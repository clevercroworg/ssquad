import Image from 'next/image';
import Link from 'next/link';
import { getBlogs } from '../../actions/blogActions';

export default async function InsightsSection() {
  const allBlogs = await getBlogs();
  const blogs = allBlogs.slice(0, 3); // Take top 3

  return (
    <section className="bg-ssg-light py-20 lg:py-24">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6 reveal">
          <div className="max-w-2xl">
            <p className="section-eyebrow">Insights</p>
            <h2 className="section-title">Latest Cybersecurity News</h2>
          </div>
          <Link href="/insights" className="text-ssg-red font-semibold inline-flex items-center gap-2">View all insights <span>&rarr;</span></Link>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <article key={blog.id} className="reveal group relative bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-slate-100">
                <Image 
                  src={blog.image || "/placeholder.jpg"} 
                  unoptimized 
                  alt={`${blog.title} visual from Ssquad Global`} 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                {blog.category && (
                  <div className="absolute top-4 left-4 bg-ssg-red text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full z-10 shadow-md">
                    {blog.category}
                  </div>
                )}
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-heading font-bold text-lg mb-3 line-clamp-2 text-slate-900 group-hover:text-ssg-red transition-colors">{blog.title}</h3>
                <p className="text-slate-600 mb-6 line-clamp-3 text-sm flex-grow">{blog.summary}</p>
                <Link href={`/insights/${blog.id}`} className="text-ssg-red font-bold text-sm flex items-center gap-1.5 hover:gap-2.5 transition-all mt-auto">
                  Read more <i className="ph ph-arrow-right"></i>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
