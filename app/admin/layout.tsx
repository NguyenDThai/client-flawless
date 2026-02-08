"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import AdminSideBar from "@/app/admin/_components/AdminSideBar";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (loading) return;

    if (!user) {
      router.replace("/login");
      return;
    }

    if (user?.role !== "ADMIN") {
      router.replace("/");
    }
  }, [user, loading, router]);

  if (loading || !user || user.role !== "ADMIN") {
    return <p>Đang tải vui lòng chờ...</p>;
  }

  return (
    <div className="min-h-screen flex flex-row-reverse bg-gray-100">
      <main className="flex-1 p-6">{children}</main>
      <AdminSideBar user={user} />
    </div>
  );
};

export default AdminLayout;
