import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

// Helper to save leads locally as a backup
async function saveLeadBackup(leadData: any) {
  try {
    const dataDir = path.join(process.cwd(), 'data');
    
    // Ensure data directory exists
    if (!fs.existsSync(dataDir)) {
      await fs.promises.mkdir(dataDir, { recursive: true });
    }
    
    const filePath = path.join(dataDir, 'leads_backup.json');
    let leads: any[] = [];
    
    if (fs.existsSync(filePath)) {
      try {
        const fileContent = await fs.promises.readFile(filePath, 'utf8');
        leads = JSON.parse(fileContent || '[]');
      } catch (err) {
        console.error('Error reading/parsing existing backup file, resetting database:', err);
      }
    }
    
    leads.push({
      ...leadData,
      timestamp: new Date().toISOString(),
    });
    
    await fs.promises.writeFile(filePath, JSON.stringify(leads, null, 2), 'utf8');
    return true;
  } catch (err) {
    console.error('Failed to save lead backup locally:', err);
    return false;
  }
}

// Helper to send to Google Sheets
async function postToGoogleSheets(leadData: any) {
  const googleAppScriptUrl = process.env.GOOGLE_SCRIPT_WEB_APP_URL;
  if (!googleAppScriptUrl) return { success: false, reason: 'URL not configured' };

  try {
    const sheetData = new URLSearchParams();
    sheetData.append("rsvp_status", "Contact Form Inquiry");
    sheetData.append("first_name", leadData.name);
    sheetData.append("last_name", "(Contact Form)");
    sheetData.append("company", leadData.subject || "N/A");
    sheetData.append("designation", leadData.message);
    sheetData.append("industry", "Website Contact Form");
    sheetData.append("email", leadData.email);
    sheetData.append("phone", leadData.number || "N/A");
    sheetData.append("date", new Date().toISOString().replace("T", " ").substring(0, 19));

    const response = await fetch(googleAppScriptUrl, {
      method: "POST",
      body: sheetData,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });
    
    return { success: response.ok, status: response.status };
  } catch (err: any) {
    console.error('Google Sheets backup submission failed:', err);
    return { success: false, error: err.message };
  }
}

export async function POST(request: Request) {
  let name = '', email = '', number = '', subject = '', message = '';
  
  try {
    const body = await request.json();
    name = body.name;
    email = body.email;
    number = body.number;
    subject = body.subject;
    message = body.message;
  } catch (err) {
    return NextResponse.json({ error: 'Malformed request JSON' }, { status: 400 });
  }

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'Name, email, and message are required fields.' },
      { status: 400 }
    );
  }

  const leadInfo = { name, email, number, subject, message };

  // 1. Save locally as fallback immediately
  const localSaveSuccess = await saveLeadBackup(leadInfo);
  
  // 2. Forward to Google Sheets in background
  const sheetsStatus = await postToGoogleSheets(leadInfo);

  // 3. Attempt Email Dispatch Cascade
  let emailSent = false;
  let emailErrorMsg = '';

  const mailOptions = {
    from: `"Ssquad Global" <${process.env.SMTP_USER || 'ssquadeventadmin@gmail.com'}>`,
    replyTo: email,
    to: process.env.COMPANY_ALERT_EMAIL || 'sales@ssquad.com',
    subject: `New Contact Inquiry: ${subject || 'No Subject'}`,
    html: `
      <h2>New Contact Inquiry from Website</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${number || 'N/A'}</p>
      <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
      <br/>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br/>')}</p>
    `,
  };

  const userConfirmationOptions = {
    from: `"Ssquad Global" <${process.env.SMTP_USER || 'ssquadeventadmin@gmail.com'}>`,
    to: email,
    subject: `Thank you for contacting Ssquad Global`,
    html: `
      <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #0f172a; padding: 24px; text-align: center;">
          <h2 style="color: #ffffff; margin: 0; font-size: 24px;">Ssquad Global</h2>
        </div>
        <div style="padding: 32px 24px;">
          <p style="font-size: 16px; line-height: 1.6;">Dear ${name},</p>
          <p style="font-size: 16px; line-height: 1.6;">Thank you for getting in touch with us. We have successfully received your inquiry regarding <strong>"${subject || 'your message'}"</strong>.</p>
          <p style="font-size: 16px; line-height: 1.6;">One of our global experts will review your request and get back to you shortly.</p>
          <br/>
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 8px;">Best regards,</p>
          <p style="font-size: 16px; font-weight: bold; margin-top: 0;">The Ssquad Global Team</p>
        </div>
        <div style="background-color: #f8fafc; padding: 16px; text-align: center; border-top: 1px solid #eee;">
          <p style="font-size: 12px; color: #64748b; margin: 0;">&copy; ${new Date().getFullYear()} Ssquad Global. All rights reserved.</p>
        </div>
      </div>
    `,
  };

  // Try Gmail Port 465 (Secure)
  if (process.env.SMTP_USER && process.env.SMTP_PASS) {
    try {
      console.log('Attempting Gmail SMTP secure delivery (Port 465)...');
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
        connectionTimeout: 8000, // Fail fast to try next fallback
      });
      await transporter.sendMail(mailOptions);
      try {
        await transporter.sendMail(userConfirmationOptions);
      } catch (err) {
        console.warn('Failed to send user confirmation, alert sent successfully:', err);
      }
      emailSent = true;
      console.log('Gmail SMTP Port 465 secure delivery successful.');
    } catch (err: any) {
      console.error('Gmail SMTP Port 465 delivery failed:', err.message);
      emailErrorMsg += `Port 465: ${err.message}; `;
    }

    // Fallback 1: Try Gmail Port 587 (STARTTLS)
    if (!emailSent) {
      try {
        console.log('Attempting Gmail SMTP STARTTLS delivery (Port 587)...');
        const transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 587,
          secure: false,
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
          connectionTimeout: 8000,
        });
        await transporter.sendMail(mailOptions);
        try {
          await transporter.sendMail(userConfirmationOptions);
        } catch (err) {
          console.warn('Failed to send user confirmation via Port 587:', err);
        }
        emailSent = true;
        console.log('Gmail SMTP Port 587 delivery successful.');
      } catch (err: any) {
        console.error('Gmail SMTP Port 587 delivery failed:', err.message);
        emailErrorMsg += `Port 587: ${err.message}; `;
      }
    }
  } else {
    emailErrorMsg += 'SMTP credentials missing from environment; ';
  }

  // Fallback 2: Try Local Sendmail (Exim MTA on cPanel)
  if (!emailSent) {
    try {
      console.log('Attempting local sendmail binary delivery...');
      const transporter = nodemailer.createTransport({
        sendmail: true,
        path: '/usr/sbin/sendmail',
        newline: 'unix',
      });
      await transporter.sendMail(mailOptions);
      try {
        await transporter.sendMail(userConfirmationOptions);
      } catch (err) {
        console.warn('Failed to send user confirmation via Sendmail:', err);
      }
      emailSent = true;
      console.log('Local sendmail delivery successful.');
    } catch (err: any) {
      console.error('Local sendmail delivery failed:', err.message);
      emailErrorMsg += `Sendmail: ${err.message}; `;
    }
  }

  // Final Evaluation
  if (emailSent || localSaveSuccess || sheetsStatus.success) {
    console.log('Lead processed successfully.', {
      emailSent,
      localSaveSuccess,
      sheetsSaveSuccess: sheetsStatus.success,
      emailErrors: emailErrorMsg || 'None',
    });
    
    return NextResponse.json(
      { 
        message: 'Transmission successful. We will contact you shortly.',
        details: {
          savedLocal: localSaveSuccess,
          savedCloud: sheetsStatus.success,
          notified: emailSent,
        }
      },
      { status: 200 }
    );
  }

  // Only fail completely if absolutely everything failed
  console.error('All contact submission channels failed!', {
    localSaveSuccess,
    sheetsStatus,
    emailErrorMsg,
  });

  return NextResponse.json(
    { 
      error: 'Failed to process inquiry. Our servers are currently undergoing maintenance, please email us directly at sales@ssquad.com',
      reason: emailErrorMsg,
    },
    { status: 500 }
  );
}
