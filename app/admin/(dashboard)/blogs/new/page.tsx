"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { addBlog } from "../../../../actions/blogActions";
import { BlogCategory } from "../../../../data/blogs";
import HtmlEditor from "@/app/admin/components/HtmlEditor";

export default function NewBlog() {
  const router = useRouter();
  const [isSaving, setIsSaving] = useState(false);

  // Form states
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState<BlogCategory>("Latest Insights");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [content, setContent] = useState("");

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    const res = await addBlog({
      title,
      summary,
      image,
      category,
      date,
      content,
    });

    setIsSaving(false);

    if (res.success) {
      alert("Post created successfully!");
      router.push("/admin");
    } else {
      alert(res.message || "Failed to create post");
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-6 flex items-center gap-3 text-sm text-slate-500">
        <Link href="/admin" className="hover:text-ssg-cyber transition-colors">Insights Management</Link>
        <i className="ph ph-caret-right text-xs"></i>
        <span className="text-slate-900 font-medium truncate max-w-[200px]">New Post</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-heading font-bold text-slate-900">Create New Post</h1>
          <p className="text-slate-500 mt-2">Publish a new insight or news event.</p>
        </div>
        <div className="flex items-center gap-3">
          <Link 
            href="/admin"
            className="px-5 py-2.5 rounded-xl font-medium text-slate-600 hover:bg-slate-200 transition-colors"
          >
            Cancel
          </Link>
          <button 
            onClick={handleSave}
            disabled={isSaving || !title || !summary || !image}
            className="bg-ssg-cyber text-white px-6 py-2.5 rounded-xl font-semibold flex items-center gap-2 hover:bg-[#4820db] transition-colors shadow-sm disabled:opacity-70 min-w-[120px] justify-center"
          >
            {isSaving ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <i className="ph ph-check"></i>
                Publish
              </>
            )}
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <form onSubmit={handleSave} className="p-6 md:p-8 flex flex-col gap-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="title" className="text-sm font-semibold text-slate-700">
                  Post Title
                </label>
                <input
                  id="title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ssg-cyber/20 focus:border-ssg-cyber transition-all font-medium text-slate-900"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="summary" className="text-sm font-semibold text-slate-700">
                  Summary Excerpt
                </label>
                <textarea
                  id="summary"
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                  rows={3}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ssg-cyber/20 focus:border-ssg-cyber transition-all text-slate-700 resize-y"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="content" className="text-sm font-semibold text-slate-700">
                  Full Content (HTML/Text)
                </label>
                <HtmlEditor
                  id="content"
                  value={content}
                  onChange={setContent}
                />
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="category" className="text-sm font-semibold text-slate-700">
                  Category
                </label>
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value as BlogCategory)}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ssg-cyber/20 focus:border-ssg-cyber transition-all text-slate-900 bg-white"
                >
                  <option value="Latest Insights">Latest Insights</option>
                  <option value="News & Events">News & Events</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="date" className="text-sm font-semibold text-slate-700">
                  Publish Date
                </label>
                <input
                  id="date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ssg-cyber/20 focus:border-ssg-cyber transition-all text-slate-900"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="image" className="text-sm font-semibold text-slate-700">
                  Featured Image URL
                </label>
                <input
                  id="image"
                  type="url"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ssg-cyber/20 focus:border-ssg-cyber transition-all text-slate-900"
                  required
                />
              </div>

              <div className="border border-slate-200 rounded-xl bg-slate-50 p-2 relative mt-2">
                <span className="absolute top-4 left-4 bg-white/80 backdrop-blur text-xs font-semibold px-2 py-1 rounded shadow-sm z-10 text-slate-700">Preview</span>
                <div className="aspect-[570/600] w-full rounded-lg overflow-hidden relative border border-slate-200 bg-white">
                  {image ? (
                    <img 
                      src={image} 
                      alt="Preview" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNmMThmMWIiPjwvcmVjdD48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1zaXplPSIyMCIgZmlsbD0iIzQ3NTU2OSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SWW1hZ2UgRXJyb3I8L3RleHQ+PC9zdmc+';
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-400">
                      <i className="ph ph-image text-4xl"></i>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
