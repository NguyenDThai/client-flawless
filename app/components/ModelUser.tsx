"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const ModelUser = () => {
  const { user, setUser } = useAuth();
  const route = useRouter();
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    setUser(null);
    route.push("/");
  };
  return (
    <div className="absolute right-10 top-10 z-50">
      <div className="min-w-[320px] bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
        {/* Header với màu gradient */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
              <span className="text-white text-lg font-semibold">
                {user.email?.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <p className="text-white text-sm font-medium">Chào mừng</p>
              <p className="text-white font-semibold truncate max-w-[200px]">
                {user.email}
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* User info */}
          <div className="mb-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center">
                <span className="text-blue-600 text-xl font-bold">
                  {user.email?.charAt(0).toUpperCase()}
                </span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Tài khoản</h3>
                <p className="text-gray-600 text-sm truncate max-w-[180px]">
                  {user.email}
                </p>
              </div>
            </div>

            <div className="space-y-2 pl-1">
              <div className="flex items-center text-gray-600">
                <span className="w-24 text-sm">Trạng thái:</span>
                <span className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                  <span className="text-sm font-medium text-green-600">
                    Đang hoạt động
                  </span>
                </span>
              </div>
              <div className="flex items-center text-gray-600">
                <span className="w-24 text-sm">Đăng nhập:</span>
                <span className="text-sm">Vừa xong</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-100 my-4"></div>

          {/* Action buttons */}
          <div className="space-y-3">
            <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-lg transition-all duration-200 font-medium">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span>Hồ sơ cá nhân</span>
            </button>

            {/* Logout button - highlight */}
            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-red-50 to-red-100 text-red-600 hover:from-red-100 hover:to-red-200 hover:shadow-sm rounded-lg transition-all duration-200 font-semibold border border-red-200 mt-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              <span>Đăng xuất</span>
            </button>
          </div>

          {/* Footer */}
          <div className="mt-6 pt-4 border-t border-gray-100">
            <p className="text-center text-gray-500 text-xs">
              Phiên đăng nhập sẽ hết hạn sau{" "}
              <span className="font-semibold">24 giờ</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelUser;
