"use client";
import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { usePathname } from "next/navigation";

const ConditionalLayout = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();
  const isAdmin = pathName.startsWith("/admin");

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default ConditionalLayout;
