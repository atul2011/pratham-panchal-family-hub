"use client";

import { usePathname } from "next/navigation";
import AdminSidebar from "@/components/AdminSidebar";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function AdminLayout({ children }) {
  const pathname = usePathname();

  // Don't show sidebar or protection on login page
  if (pathname === "/admin/login") {
    return children;
  }

  return (
    <ProtectedRoute>
      <div className="flex min-h-screen">
        <AdminSidebar />

        <main className="flex-1 p-8 bg-gray-100">
          {children}
        </main>
      </div>
    </ProtectedRoute>
  );
}