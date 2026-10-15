"use client";

import { useTransition } from "react";
import { deleteBlog } from "../../../actions/blogActions";

export default function DeletePostButton({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this post?")) {
      startTransition(async () => {
        const res = await deleteBlog(id);
        if (!res.success) {
          alert(res.message);
        }
      });
    }
  };

  return (
    <button 
      onClick={handleDelete}
      disabled={isPending}
      className="p-2 text-slate-400 hover:text-ssg-red hover:bg-ssg-red/5 rounded-lg transition-colors disabled:opacity-50"
      title="Delete Post"
    >
      {isPending ? (
        <div className="w-4 h-4 border-2 border-ssg-red/30 border-t-ssg-red rounded-full animate-spin" />
      ) : (
        <i className="ph ph-trash text-lg"></i>
      )}
    </button>
  );
}
