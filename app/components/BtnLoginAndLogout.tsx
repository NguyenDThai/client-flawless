"use client";

import ModelUser from "@/app/components/ModelUser";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const BtnLoginAndLogout = () => {
  const { user } = useAuth();

  const [showModel, setShowModel] = useState(false);

  return (
    <div>
      {user ? (
        <div className="relative">
          <div className="flex items-center gap-7">
            <FaUser
              size={20}
              onClick={() => setShowModel((prev) => !prev)}
              className="cursor-pointer text-white"
            />
            <FaCartShopping size={20} className="cursor-pointer text-white" />
          </div>
          {showModel && <ModelUser />}
        </div>
      ) : (
        <>
          <Link href="/login">
            <button className="text-white hover:text-blue-600 font-medium mr-4 cursor-pointer">
              Đăng nhập
            </button>
          </Link>
          <Link href="/register">
            <button className="text-white hover:text-blue-600 font-medium cursor-pointer">
              Đăng ký
            </button>
          </Link>
        </>
      )}
    </div>
  );
};

export default BtnLoginAndLogout;
