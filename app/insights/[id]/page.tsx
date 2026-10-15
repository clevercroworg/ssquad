import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogById } from "@/app/actions/blogActions";
import InnerHeader from "@/app/components/inner/InnerHeader";
import ContactCTASection from "@/app/components/sections/ContactCTASection";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const blog = await getBlogById(id);

  if (!blog) {
    return {
      title: "Insight Not Found | Ssquad Global",
      description: "The requested cybersecurity insight or research report could not be found.",
    };
  }

  return {
    title: `${blog.title} | Ssquad Global`,
    description: blog.summary || "Explore cybersecurity insights and expert guidance from Ssquad Global.",
  };
}

export default async function InsightDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const blog = await getBlogById(id);

  if (!blog) {
    notFound();
  }

  return (
    <main className="bg-white min-h-screen">
      <InnerHeader 
        title={blog.title} 
        subtitle={blog.summary}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Insights', href: '/insights' },
          { label: blog.title.slice(0, 30) + '...', href: `/insights/${blog.id}` }
        ]}
      />

      <section className="py-16 lg:py-24 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        
        <div className="max-w-3xl mx-auto px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-wrap items-center gap-4 mb-8">
            {blog.category && (
              <span className="bg-ssg-red/10 text-ssg-red text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-ssg-red/20">
                {blog.category}
              </span>
            )}
            {blog.date && (
              <span className="text-slate-500 font-medium text-sm flex items-center gap-2">
                <i className="ph ph-calendar-blank"></i>
                {new Date(blog.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
            )}
          </div>

          {blog.image && (
            <div className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden mb-12 shadow-premium border border-slate-100">
              <Image 
                src={blog.image} 
                alt={blog.title}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          )}

          <article 
            className="prose prose-lg md:prose-xl prose-slate max-w-none 
              prose-headings:font-heading prose-headings:font-bold prose-headings:text-slate-900 
              prose-h2:text-3xl md:prose-h2:text-4xl prose-h2:mt-14 prose-h2:mb-6 prose-h2:border-b prose-h2:border-slate-100 prose-h2:pb-4 prose-h2:text-ssg-red
              prose-h3:text-2xl prose-h3:mt-10
              prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-ssg-cyber prose-a:font-semibold prose-a:no-underline hover:prose-a:text-ssg-red hover:prose-a:underline transition-colors
              prose-blockquote:border-l-4 prose-blockquote:border-ssg-cyber prose-blockquote:bg-slate-50 prose-blockquote:py-3 prose-blockquote:px-6 prose-blockquote:not-italic prose-blockquote:text-slate-700 prose-blockquote:rounded-r-xl prose-blockquote:shadow-sm
              prose-ul:list-disc prose-ul:pl-6 prose-li:text-slate-600 prose-li:mb-2 prose-li:marker:text-ssg-red
              prose-img:rounded-2xl prose-img:shadow-md"
            dangerouslySetInnerHTML={{ __html: blog.content || `<p>${blog.summary}</p>` }}
          />
          
          <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
            <Link href="/insights" className="text-slate-500 hover:text-ssg-red transition-colors flex items-center gap-2 font-semibold">
              <i className="ph ph-arrow-left"></i>
              Back to all insights
            </Link>
            
            <div className="flex items-center gap-3 bg-slate-50 px-4 py-2 rounded-full border border-slate-200">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mr-2">Share</span>
              <button className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-500 hover:bg-[#0077b5] hover:text-white transition-all border border-slate-100">
                <i className="ph-fill ph-linkedin-logo text-sm"></i>
              </button>
              <button className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-500 hover:bg-black hover:text-white transition-all border border-slate-100">
                <i className="ph-fill ph-x-logo text-sm"></i>
              </button>
              <button className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-500 hover:bg-[#0051b8] hover:text-white transition-all border border-slate-100">
                <i className="ph-fill ph-facebook-logo text-sm"></i>
              </button>
            </div>
          </div>

        </div>
      </section>

      <ContactCTASection />
    </main>
  );
}
