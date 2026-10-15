import "server-only";
import fs from "fs/promises";
import path from "path";
import { BlogPost } from "../data/blogs";

// ============================================================================
// Database Abstraction Layer
// ============================================================================
// This module centralizes ALL data access. Currently backed by JSON files.
// When you're ready to connect a real database (MongoDB, PostgreSQL, etc.),
// replace the implementations below — the rest of the app stays unchanged.
// ============================================================================

// --- File Paths (will be replaced by DB connection) ---
const BLOGS_FILE = path.join(process.cwd(), "data", "blogs.json");
const ADMIN_USERS_FILE = path.join(process.cwd(), "data", "admin-users.json");

// --- Admin User Types ---
export interface AdminUser {
  id: string;
  email: string;
  passwordHash: string;
  name: string;
  role: string;
}

// ============================================================================
// ADMIN USER QUERIES
// TODO: Replace with database queries (e.g. db.collection("admins").findOne)
// ============================================================================

export async function findAdminByEmail(
  email: string
): Promise<AdminUser | null> {
  try {
    const fileContents = await fs.readFile(ADMIN_USERS_FILE, "utf8");
    const users: AdminUser[] = JSON.parse(fileContents);
    return users.find((u) => u.email.toLowerCase() === email.toLowerCase()) || null;
  } catch (error) {
    console.error("Error finding admin user:", error);
    return null;
  }
}

// ============================================================================
// BLOG QUERIES
// TODO: Replace with database queries (e.g. db.collection("blogs").find())
// ============================================================================

export async function getBlogs(): Promise<BlogPost[]> {
  try {
    const fileContents = await fs.readFile(BLOGS_FILE, "utf8");
    return JSON.parse(fileContents);
  } catch (error) {
    console.error("Error reading blogs:", error);
    return [];
  }
}

export async function getBlogById(id: string): Promise<BlogPost | null> {
  const blogs = await getBlogs();
  return blogs.find((blog) => blog.id === id) || null;
}

export async function insertBlog(
  blog: BlogPost
): Promise<{ success: boolean; message: string }> {
  try {
    const blogs = await getBlogs();

    // Check for duplicate ID
    if (blogs.some((b) => b.id === blog.id)) {
      return {
        success: false,
        message: "A blog with a similar title already exists.",
      };
    }

    blogs.unshift(blog); // Add to the beginning
    await fs.writeFile(BLOGS_FILE, JSON.stringify(blogs, null, 2));

    return { success: true, message: "Blog created successfully" };
  } catch (error) {
    console.error("Error inserting blog:", error);
    return { success: false, message: "Failed to create blog" };
  }
}

export async function updateBlogById(
  id: string,
  updatedData: Partial<BlogPost>
): Promise<{ success: boolean; message: string }> {
  try {
    const blogs = await getBlogs();
    const index = blogs.findIndex((b) => b.id === id);

    if (index === -1) {
      return { success: false, message: "Blog not found" };
    }

    blogs[index] = { ...blogs[index], ...updatedData };
    await fs.writeFile(BLOGS_FILE, JSON.stringify(blogs, null, 2));

    return { success: true, message: "Blog updated successfully" };
  } catch (error) {
    console.error("Error updating blog:", error);
    return { success: false, message: "Failed to update blog" };
  }
}

export async function deleteBlogById(
  id: string
): Promise<{ success: boolean; message: string }> {
  try {
    const blogs = await getBlogs();
    const newBlogs = blogs.filter((b) => b.id !== id);

    if (blogs.length === newBlogs.length) {
      return { success: false, message: "Blog not found" };
    }

    await fs.writeFile(BLOGS_FILE, JSON.stringify(newBlogs, null, 2));

    return { success: true, message: "Blog deleted successfully" };
  } catch (error) {
    console.error("Error deleting blog:", error);
    return { success: false, message: "Failed to delete blog" };
  }
}
