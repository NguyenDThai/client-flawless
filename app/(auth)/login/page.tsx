/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useAuth } from "@/context/AuthContext";
import api from "@/lib/api";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { setUser } = useAuth();
  const router = useRouter();

  const handChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", data);

      if (res.status === 201 && res?.data.user.role === "ADMIN") {
        toast.success("Đăng nhập thành công");
        setUser(res.data.user);
        router.push("/admin");
      } else if (res.status === 201 && res?.data.user.role === "USER") {
        toast.success("Đăng nhập thành công");
        setUser(res.data.user);
        router.push("/");
      } else {
        throw new Error("Đã có lỗi khi đăng nhập");
      }
    } catch (error: any) {
      const err = error.response?.data.message;
      toast.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <form
        className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Đăng Nhập
        </h2>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Nhập email của bạn"
              value={data.email}
              onChange={handChangeInput}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Mật khẩu
            </label>
            <input
              type="password"
              name="password"
              placeholder="Nhập mật khẩu của bạn"
              value={data.password}
              onChange={handChangeInput}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Đăng Nhập
          </button>

          <div className="text-center pt-4 border-t border-gray-200">
            <p className="text-gray-600">
              Bạn chưa có tài khoản?{" "}
              <Link
                href="/register"
                className="text-blue-600 hover:text-blue-800 font-medium hover:underline transition"
              >
                Đăng ký ngay
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
