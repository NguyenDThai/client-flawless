"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import AdminSideBar from "@/app/admin/_components/AdminSideBar";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();
  const route = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        route.replace("/");
      } else if (user.role !== "ADMIN") {
        route.replace("/");
      }
    }
  }, [user, loading, route]);

  if (loading) return <p>Đang tải vui lòng chờ</p>;

  return (
    <div className="min-h-screen flex flex-row-reverse bg-gray-100">
      <main className="flex-1 p-6">{children}</main>
      <AdminSideBar user={user} />
    </div>
  );
};

export default AdminLayout;
