"use client";

import Banner from "@/app/components/Banner";
import Cart from "@/app/components/Cart";
import CartModel from "@/app/components/CartModel";
import CustomerSay from "@/app/components/CustomerSay";
import FollowUs from "@/app/components/FollowUs";
import Header from "@/app/components/Header";
import IntroWeb from "@/app/components/IntroWeb";
import LovedByCustomers from "@/app/components/LovedByCustomers";
import Methods from "@/app/components/Methods";
import NewArrivals from "@/app/components/NewArrivals";
import OptionBanner from "@/app/components/OptionBanner";
import SkincareRegimen from "@/app/components/SkincareRegimen";
import { useEffect, useState } from "react";

export default function Home() {
  const [showModelCart, setShowModelCart] = useState(false);

  const handleShowCart = () => {
    setShowModelCart(true);
  };

  useEffect(() => {
    if (showModelCart) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModelCart]);
  return (
    <>
      <div className="relative">
        <Header handleShowCart={handleShowCart} />
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

      {showModelCart && (
        <CartModel
          setShowModelCart={setShowModelCart}
          showModelCart={showModelCart}
        />
      )}
    </>
  );
}
