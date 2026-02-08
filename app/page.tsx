"use client";

import Banner from "@/app/components/Banner";
import Cart from "@/app/components/Cart";
import CustomerSay from "@/app/components/CustomerSay";
import FollowUs from "@/app/components/FollowUs";
import Header from "@/app/components/Header";
import IntroWeb from "@/app/components/IntroWeb";
import LovedByCustomers from "@/app/components/LovedByCustomers";
import Methods from "@/app/components/Methods";
import NewArrivals from "@/app/components/NewArrivals";
import OptionBanner from "@/app/components/OptionBanner";
import SkincareRegimen from "@/app/components/SkincareRegimen";
import { useAuth } from "@/context/AuthContext";
import { redirect } from "next/navigation";

export default function Home() {
  return (
    <>
      <Header />
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
