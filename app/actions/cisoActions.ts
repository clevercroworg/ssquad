"use server";

import nodemailer from "nodemailer";

export async function submitCisoRsvp(formData: FormData) {
  try {
    const rsvp_status = formData.get("rsvp_status")?.toString() || "";
    const first_name = formData.get("first_name")?.toString() || "";
    const last_name = formData.get("last_name")?.toString() || "";
    const company = formData.get("company_name")?.toString() || "";
    const designation = formData.get("designation")?.toString() || "";
    const industry = formData.get("industry")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const phone = formData.get("phone")?.toString() || "";

    // Basic Validation
    if (!first_name || !last_name || !email || !rsvp_status) {
      return { success: false, message: "Required fields are missing." };
    }

    const googleAppScriptUrl = process.env.GOOGLE_SCRIPT_WEB_APP_URL;

    // Forward to Google Sheets
    if (googleAppScriptUrl) {
      const sheetData = new URLSearchParams();
      sheetData.append("rsvp_status", rsvp_status);
      sheetData.append("first_name", first_name);
      sheetData.append("last_name", last_name);
      sheetData.append("company", company);
      sheetData.append("designation", designation);
      sheetData.append("industry", industry);
      sheetData.append("email", email);
      sheetData.append("phone", phone);
      sheetData.append("date", new Date().toISOString().replace("T", " ").substring(0, 19));

      try {
        await fetch(googleAppScriptUrl, {
          method: "POST",
          body: sheetData,
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        });
      } catch (err) {
        console.error("Silent Google Sheet failure:", err);
      }
    }

    // Email Notifications via Nodemailer
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      // Email 1: Confirmation to Registrant (only if attending)
      if (rsvp_status === "Attending") {
        const userMessage = `Dear ${first_name},\n\nThank you for confirming your attendance at the CISO Roundtable 2026. We are delighted to have you join us for this exclusive session.\n\nEvent Details:\nDate: 21 May 2026\nTime: 9:00 AM – 2:00 PM\nVenue: Le Méridien Kuala Lumpur\n\nWe look forward to welcoming you at the event.\n\nBest regards,\nSsquad Global Events Team`;

        await transporter.sendMail({
          from: `"Ssquad Global Events Team" <${process.env.SMTP_USER}>`,
          to: email,
          subject: "Registration Confirmed - CISO Roundtable 2026",
          text: userMessage,
        });
      }

      // Email 2: Alert Notification to Company
      const alertEmailStr = process.env.COMPANY_ALERT_EMAIL || "sales@ssquad.com";
      const alertEmails = alertEmailStr.split(",").map((e) => e.trim()).filter(Boolean);

      const companyMessage = `A new ${rsvp_status} RSVP has been received for the CISO Roundtable 2026.\n\nDetails:\n---------------------------------\nName: ${first_name} ${last_name}\nCompany: ${company}\nDesignation: ${designation}\nIndustry: ${industry}\nEmail: ${email}\nPhone: ${phone}\nStatus: ${rsvp_status}\n---------------------------------`;

      for (const alertEmail of alertEmails) {
        try {
          await transporter.sendMail({
            from: `"Ssquad 2026" <${process.env.SMTP_USER}>`,
            to: alertEmail,
            subject: `New RSVP: ${first_name} ${last_name} (${rsvp_status})`,
            text: companyMessage,
          });
        } catch (mailErr) {
          console.error(`Failed to send alert to ${alertEmail}:`, mailErr);
        }
      }
    } else {
      console.warn("SMTP_USER or SMTP_PASS missing. Emails were not sent.");
    }

    return { success: true, message: "Registration successfully processed." };
  } catch (error) {
    console.error("Submission Error:", error);
    return { success: false, message: "An error occurred while processing your request." };
  }
}
