"use server";

import { BlogPost } from "../data/blogs";
import { revalidatePath } from "next/cache";
import { verifySession } from "../lib/session";
import {
  getBlogs as dbGetBlogs,
  getBlogById as dbGetBlogById,
  insertBlog,
  updateBlogById,
  deleteBlogById,
} from "../lib/db";

// ============================================================================
// PUBLIC READ OPERATIONS (no auth required — used by /insights)
// ============================================================================

export async function getBlogs(): Promise<BlogPost[]> {
  return dbGetBlogs();
}

export async function getBlogById(id: string): Promise<BlogPost | null> {
  return dbGetBlogById(id);
}

// ============================================================================
// PROTECTED WRITE OPERATIONS (auth required — used by /admin)
// ============================================================================

export async function addBlog(
  blog: Omit<BlogPost, "id">
): Promise<{ success: boolean; message: string }> {
  // Auth guard
  const session = await verifySession();
  if (!session) {
    return { success: false, message: "Unauthorized. Please sign in." };
  }

  // Generate a slug ID from the title
  const id = blog.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

  const result = await insertBlog({ ...blog, id });

  if (result.success) {
    // Revalidate paths where blogs are shown
    revalidatePath("/admin");
    revalidatePath("/insights");
    revalidatePath("/");
  }

  return result;
}

export async function updateBlog(
  id: string,
  updatedData: Partial<BlogPost>
): Promise<{ success: boolean; message: string }> {
  // Auth guard
  const session = await verifySession();
  if (!session) {
    return { success: false, message: "Unauthorized. Please sign in." };
  }

  const result = await updateBlogById(id, updatedData);

  if (result.success) {
    // Revalidate paths
    revalidatePath("/admin");
    revalidatePath("/insights");
    revalidatePath("/");
    revalidatePath(`/insights/${id}`);
  }

  return result;
}

export async function deleteBlog(
  id: string
): Promise<{ success: boolean; message: string }> {
  // Auth guard
  const session = await verifySession();
  if (!session) {
    return { success: false, message: "Unauthorized. Please sign in." };
  }

  const result = await deleteBlogById(id);

  if (result.success) {
    // Revalidate paths
    revalidatePath("/admin");
    revalidatePath("/insights");
    revalidatePath("/");
  }

  return result;
}
