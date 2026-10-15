import { redirect } from "next/navigation";
import Link from "next/link";
import { verifySession } from "@/app/lib/session";
import SignOutButton from "./components/SignOutButton";

export const metadata = {
  title: "Admin Dashboard | Ssquad Global",
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Server-side auth check — redirect to login if not authenticated
  const session = await verifySession();

  if (!session) {
    redirect("/admin/login");
  }

  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-900 font-body antialiased">
      <aside className="w-64 bg-ssg-dark text-white flex flex-col shrink-0">
        <div className="h-16 flex items-center px-6 border-b border-white/10 shrink-0">
          <span className="font-heading font-bold text-lg tracking-wide text-white">SSQUAD Admin</span>
        </div>
        <nav className="flex-1 py-6 flex flex-col gap-2 px-4">
          <Link 
            href="/admin" 
            className="px-3 py-2 bg-white/10 rounded-lg text-sm font-medium flex items-center gap-3 hover:bg-white/15 transition-colors"
          >
            <i className="ph ph-squares-four text-lg"></i>
            Insights Management
          </Link>
          <div className="px-3 py-2 text-white/50 hover:text-white/80 transition-colors text-sm font-medium flex items-center gap-3 cursor-not-allowed">
            <i className="ph ph-users text-lg"></i>
            Users (Coming Soon)
          </div>
          <div className="px-3 py-2 text-white/50 hover:text-white/80 transition-colors text-sm font-medium flex items-center gap-3 cursor-not-allowed">
            <i className="ph ph-gear text-lg"></i>
            Settings (Coming Soon)
          </div>
        </nav>

        {/* Admin info & sign out */}
        <div className="p-4 border-t border-white/10 space-y-3">
          <div className="flex items-center gap-3 px-1">
            <div className="w-8 h-8 rounded-full bg-ssg-red/80 flex items-center justify-center text-white text-xs font-bold shrink-0">
              {session.name?.charAt(0)?.toUpperCase() || "A"}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">{session.name}</p>
              <p className="text-[11px] text-white/50 truncate">{session.email}</p>
            </div>
          </div>

          <SignOutButton />

          <Link href="/" className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors mt-1">
            <i className="ph ph-arrow-left"></i>
            Back to Public Site
          </Link>
        </div>
      </aside>
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-50 relative">
        {children}
      </main>
    </div>
  );
}
