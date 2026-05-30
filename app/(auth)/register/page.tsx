"use client";
import api from "@/lib/api";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const [data, formData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState<Record<string, string>>({});

  const route = useRouter();

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    formData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post("/user/add", data);

      toast.success("Đăng ký thành công");
      route.push("/login");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errors = error.response?.data.message;
        toast.error(errors);
      } else {
        toast.error("Đã có lỗi xảy ra khi đăng ký");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <form
        className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8"
        onSubmit={handlSubmit}
      >
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Đăng Ký
        </h2>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Nhập họ và tên
            </label>
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handleChangeInput}
              placeholder="Nhập họ và tên của bạn"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            />
            {error.name && <p className="text-red-500">{error.name}</p>}
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleChangeInput}
              placeholder="Nhập email của bạn"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            />
            {error.email && <p className="text-red-500">{error.email}</p>}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Mật khẩu
            </label>
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={handleChangeInput}
              placeholder="Nhập mật khẩu của bạn"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            />
            {error.password && <p className="text-red-500">{error.password}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Đăng Ký
          </button>

          <div className="text-center pt-4 border-t border-gray-200">
            <p className="text-gray-600">
              Bạn đã có tài khoản?{" "}
              <Link
                href="/login"
                className="text-blue-600 hover:text-blue-800 font-medium hover:underline transition"
              >
                Đăng nhập ngay
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
