/* eslint-disable @typescript-eslint/no-explicit-any */

import { useAuth } from "@/context/AuthContext";
import api from "@/lib/api";
import { useRouter } from "next/navigation";
import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { toast } from "react-toastify";

const BtnLogout = ({ isCollapsed }: any) => {
  const route = useRouter();
  const { setUser } = useAuth();

  const handleLogout = async () => {
    try {
      const res = await api.post("/auth/logout");
      if (res.status === 201) {
        toast.success(res.data.message);
        route.push("/");
        setUser(null);
      } else {
        throw new Error("Đã có lỗi xảy ra khi đăng xuất");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="absolute bottom-0 w-full p-4 border-t border-gray-700">
      <button
        onClick={handleLogout}
        className={`w-full flex items-center rounded-lg px-4 py-3 transition-all duration-200 hover:bg-red-600 hover:text-white text-gray-300 ${
          isCollapsed ? "justify-center" : "justify-start"
        }`}
      >
        <span className={`${isCollapsed ? "" : "mr-3"}`}>
          <FaSignOutAlt />
        </span>
        {!isCollapsed && <span>Logout</span>}
      </button>
    </div>
  );
};

export default BtnLogout;
