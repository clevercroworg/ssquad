"use server";

import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import { createSession, deleteSession } from "../lib/session";
import { findAdminByEmail } from "../lib/db";

export async function login(
  email: string,
  password: string
): Promise<{ success: boolean; message: string }> {
  try {
    // 1. Validate inputs
    if (!email || !password) {
      return { success: false, message: "Email and password are required." };
    }

    // 2. Find admin user
    // TODO: Replace with database query when DB is connected
    const user = await findAdminByEmail(email);

    if (!user) {
      return { success: false, message: "Invalid email or password." };
    }

    // 3. Verify password
    const passwordMatch = await bcrypt.compare(password, user.passwordHash);

    if (!passwordMatch) {
      return { success: false, message: "Invalid email or password." };
    }

    // 4. Create authenticated session
    await createSession({
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
    });

    return { success: true, message: "Login successful" };
  } catch (error) {
    console.error("Login error:", error);
    return { success: false, message: "An unexpected error occurred." };
  }
}

export async function logout(): Promise<void> {
  await deleteSession();
  redirect("/admin/login");
}
