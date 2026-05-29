"use client";

import Banner from "@/components/Banner";
import Cart from "@/components/Cart";
import CustomerSay from "@/components/CustomerSay";
import FollowUs from "@/components/FollowUs";
import Header from "@/components/Header";
import IntroWeb from "@/components/IntroWeb";
import LovedByCustomers from "@/components/LovedByCustomers";
import Methods from "@/components/Methods";
import NewArrivals from "@/components/NewArrivals";
import OptionBanner from "@/components/OptionBanner";
import SkincareRegimen from "@/components/SkincareRegimen";
import { useCart } from "@/context/CartContext";
import { useEffect } from "react";

export default function Home() {
  const { showCart } = useCart();

  useEffect(() => {
    if (showCart) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showCart]);
  return (
    <>
      <div className="relative">
        <Header />
      </div>
      <Banner />
      <NewArrivals />
      <IntroWeb />
      <OptionBanner />
      <SkincareRegimen />
      <LovedByCustomers />
      <CustomerSay />
      <FollowUs />
      <Methods />
      <Cart />
    </>
  );
}
