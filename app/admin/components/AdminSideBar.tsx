/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import React, { useState } from "react";
import {
  FaTachometerAlt,
  FaUsers,
  FaBox,
  FaShoppingCart,
  FaChartBar,
  FaChevronLeft,
  FaChevronRight,
  FaSignOutAlt,
  FaBars,
} from "react-icons/fa";

const AdminSideBar = ({ user }: any) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState("dashboard");

  const menuItems = [
    {
      id: "dashboard",
      label: "Trang Chủ",
      href: "/admin",
      icon: <FaTachometerAlt />,
    },
    {
      id: "users",
      label: "Quản lý người dùng",
      href: "/admin/user",
      icon: <FaUsers />,
    },
    {
      id: "products",
      label: "Quản lý sản phẩm",
      href: "/admin/product",
      icon: <FaBox />,
    },
    {
      id: "orders",
      label: "Quản lý đơn hàng",
      href: "/admin/order",
      icon: <FaShoppingCart />,
    },
    {
      id: "analytics",
      label: "Thống kê",
      href: "/admin/analytic",
      icon: <FaChartBar />,
    },
  ];

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleLogout = () => {
    console.log("Logging out...");
    // Add your logout logic here
  };

  return (
    <div className="relative">
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-blue-600 text-white shadow-lg"
      >
        <FaBars size={20} />
      </button>

      {/* Overlay for mobile */}
      {!isCollapsed && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsCollapsed(true)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed lg:static h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white z-40 transition-all duration-300 ${
          isCollapsed ? "w-20" : "w-80"
        } ${isCollapsed ? "-translate-x-full lg:translate-x-0" : "translate-x-0"}`}
      >
        {/* Logo Section */}
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center justify-between">
            {!isCollapsed && (
              <h1 className="text-2xl font-bold tracking-tight">
                Admin<span className="text-blue-400">Panel</span>
              </h1>
            )}
            <button
              onClick={toggleSidebar}
              className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-700 transition-colors"
            >
              {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
            </button>
          </div>
        </div>

        {/* User Profile */}
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
              A
            </div>
            {!isCollapsed && (
              <div>
                <h3 className="font-semibold">Admin User</h3>
                <p className="text-sm text-gray-400">{user.email}</p>
              </div>
            )}
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <Link href={item.href} key={item.id}>
              <button
                onClick={() => setActiveItem(item.id)}
                className={`w-full flex items-center rounded-lg px-4 py-3 transition-all duration-200 ${
                  activeItem === item.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "hover:bg-gray-700 text-gray-300"
                } ${isCollapsed ? "justify-center" : "justify-start"}`}
              >
                <span className={`${isCollapsed ? "" : "mr-3"}`}>
                  {item.icon}
                </span>
                {!isCollapsed && <span>{item.label}</span>}
              </button>
            </Link>
          ))}
        </nav>

        {/* Logout Button */}
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

        {/* Collapsed indicator */}
        {isCollapsed && (
          <div className="absolute top-1/2 -right-3 transform -translate-y-1/2">
            <div className="w-6 h-12 bg-gray-800 rounded-r-lg flex items-center justify-center">
              <FaChevronRight className="text-gray-400" size={12} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminSideBar;
