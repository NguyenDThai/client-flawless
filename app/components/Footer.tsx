import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-blue-600">
      <div className="max-w-[1200px] mx-auto py-20">
        <div className="grid grid-cols-1 gap-10 md:gap-0 md:grid-cols-4">
          {/* col 1*/}
          <div className="min-w-1/4 md:mr-20">
            <h1 className="text-7xl font-sans text-center md:text-3xl md:text-left text-white mb-6">
              Flawless
            </h1>
            <p className="text-[12px] text-center md:text-left text-white leading-5">
              It’s a promise of clean, effective, and gentle care for every skin
              type. Rooted in nature and powered by purity, our products are
              crafted to nourish your skin and reveal its natural glow.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2 mt-9">
              <a href="#">
                <FaInstagram size={20} className="text-white" />
              </a>
              <a href="#">
                <FaFacebook size={20} className="text-white" />
              </a>
              <a href="#">
                <FaSquareTwitter size={20} className="text-white" />
              </a>
            </div>
          </div>
          {/* col 2 */}
          <div className="min-w-1/4">
            <h1 className="text-center md:text-left text-3xl font-bold text-white mb-6">
              Quick Links
            </h1>
            <ul className="flex flex-col items-center md:items-start gap-2.5 text-white">
              <Link href="/">
                <li>Home</li>
              </Link>
              <Link href="/shop">
                <li>Shop</li>
              </Link>
              <Link href="/about">
                <li>About</li>
              </Link>
              <Link href="/contact">
                <li>Contact</li>
              </Link>
            </ul>
          </div>
          {/* col 3 */}
          <div className="min-w-1/4">
            <h1 className="text-center md:text-left text-3xl font-bold text-white mb-6">
              Categories
            </h1>
            <ul className="flex flex-col items-center md:items-start gap-2.5 text-white">
              <Link href="/body">
                <li>Body Lotion</li>
              </Link>
              <a href="#">
                <li>Sunscreen</li>
              </a>
              <a href="#">
                <li>Cleanser</li>
              </a>
              <a href="#">
                <li>Moisturizer</li>
              </a>
            </ul>
          </div>
          {/* col 4 */}
          <div className="min-w-1/4">
            <h1 className="text-center md:text-left text-3xl font-bold text-white mb-6">
              Contact
            </h1>
            <div className="mb-4">
              <p className="text-center md:text-left text-white">
                Ninh Kieu, Can Tho, VietNam
              </p>
            </div>
            <div className="flex items-center justify-center md:block mb-4">
              <p className="text-center md:text-left text-white">
                +84 869240149
                <br />
                thainguyen4646@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-white"></div>
      <p className="text-white p-5 text-center">
        © 2026 Skin Cleanser Store. Powered by Skin Cleanser Store.
      </p>
    </div>
  );
};

export default Footer;
