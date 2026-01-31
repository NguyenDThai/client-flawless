"use client";

import BtnLoginAndLogout from "@/app/components/BtnLoginAndLogout";
import { useState } from "react";

type HeaderProp = {
  variant?: "transparent" | "light";
};

const Header = ({ variant = "transparent" }: HeaderProp) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLight = variant === "light";

  return (
    <header
      className={`top-0 left-0 right-0 z-50 min-h-[110px] ${
        isLight
          ? "bg-white text-black shadow-sm"
          : "absolute bg-transparent text-white"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center min-h-[110px]">
          {/* Logo - ĐỔI MÀU TRẮNG */}
          <div
            className={`text-3xl font-bold ${isLight ? "text-black" : "text-white"}`}
          >
            Flawless
          </div>

          {/* Desktop Menu - ĐỔI MÀU TRẮNG */}
          <nav className="hidden md:flex space-x-10">
            <a
              href="#"
              className={`${isLight ? "text-black hover:text-gray-600" : "text-white hover:text-gray-200"}`}
            >
              HOME
            </a>
            <a
              href="/shop"
              className={`${isLight ? "text-black hover:text-gray-600" : "text-white hover:text-gray-200"}`}
            >
              SHOP
            </a>
            <a
              href="#"
              className={`${isLight ? "text-black hover:text-gray-600" : "text-white hover:text-gray-200"}`}
            >
              ABOUT
            </a>
            <a
              href="#"
              className={`${isLight ? "text-black hover:text-gray-600" : "text-white hover:text-gray-200"}`}
            >
              CONTACT
            </a>
          </nav>

          {/* Desktop Action - ĐIỀU CHỈNH ĐỂ PHÙ HỢP */}
          <div className="hidden md:block">
            <BtnLoginAndLogout isLight={isLight} />
          </div>

          {/* Mobile Menu Button - ĐỔI MÀU TRẮNG */}
          <button
            className="md:hidden flex items-center justify-center h-10 w-10 text-white hover:text-gray-200 hover:bg-white/10 rounded-lg transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <span className="text-xl font-semibold">✕</span>
            ) : (
              <span className="text-xl font-semibold">☰</span>
            )}
          </button>
        </div>

        {/* Mobile Menu - ĐIỀU CHỈNH ĐỂ TRONG SUỐT */}
        {isMenuOpen && (
          <div className="md:hidden py-6 backdrop-blur-md bg-white/10 border-t border-white/20 rounded-b-lg">
            <div className="flex flex-col space-y-4">
              <a
                href="#"
                className="text-white hover:text-gray-200 font-medium text-lg py-3 px-4 hover:bg-white/10 rounded-lg transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-200 font-medium text-lg py-3 px-4 hover:bg-white/10 rounded-lg transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                SHOP
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-200 font-medium text-lg py-3 px-4 hover:bg-white/10 rounded-lg transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-200 font-medium text-lg py-3 px-4 hover:bg-white/10 rounded-lg transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT
              </a>
              <div className="pt-4 mt-2 border-t border-white/20">
                <div className="px-4">
                  <BtnLoginAndLogout isLight={isLight} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
