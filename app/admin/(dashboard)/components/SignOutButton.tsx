"use client";

import { useTransition } from "react";
import { logout } from "@/app/actions/authActions";

export default function SignOutButton() {
  const [isPending, startTransition] = useTransition();

  const handleSignOut = () => {
    startTransition(async () => {
      await logout();
    });
  };

  return (
    <button
      onClick={handleSignOut}
      disabled={isPending}
      className="w-full flex items-center gap-2 px-3 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors disabled:opacity-50"
    >
      {isPending ? (
        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
      ) : (
        <i className="ph ph-sign-out text-lg"></i>
      )}
      Sign Out
    </button>
  );
}
