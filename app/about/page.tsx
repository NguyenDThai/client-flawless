import FollowUs from "@/app/components/FollowUs";
import Header from "@/app/components/Header";
import Methods from "@/app/components/Methods";
import StatsSection from "@/app/components/StatsSection";
import Image from "next/image";
import React from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { RxInstagramLogo } from "react-icons/rx";
import { SiComma } from "react-icons/si";

const AboutPage = () => {
  return (
    <div className="">
      <Header variant="transparent" />

      <div className="relative w-full max-h-[700px] lg:h-screen overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={"/about-hero-image.png"}
            alt="banner about"
            width={700}
            height={700}
            className="object-cover w-full h-full"
            priority
            sizes="100vw"
          />
        </div>

        {/* Overlay theo màu bạn cung cấp */}
        <div
          className="absolute inset-0 opacity-70"
          style={{
            background: "linear-gradient(180deg, #080619 10%, #00000057 100%)",
          }}
        ></div>

        <div className="max-w-[600px] absolute bottom-1/4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-7">
          <h1 className="text-7xl text-white font-sans">About</h1>
          <p className="text-center text-white mb-4 leading-8">
            At Flawless, we believe skincare should be simple, natural, and
            effective.Our mission is to help you feel confident in your
            skin—every single day.
          </p>
          <div className="w-12 border border-white"></div>
        </div>
      </div>
      <div className="px-10">
        <div className="max-w-[1200px] mx-auto py-[120px]">
          <div className="flex items-center">
            <div className="w-1/2 py-12">
              <Image
                src={"/founder-image.png"}
                alt="founder image"
                width={700}
                height={700}
                className="object-cover"
                priority
                sizes="100vw"
              />
            </div>
            <div className="w-1/2 p-12">
              <h6 className="mb-6 pb-6 uppercase leading-4 font-normal">
                From Founder
              </h6>
              <div className="flex items-center">
                <SiComma size={24} />
                <SiComma size={24} />
              </div>
              <p className="text-[20px] font-semibold mb-5">
                Flawless was founded by a passion believer in clean and
                conscious skincare. Flawless is my way of sharing honest,
                natural care that helps you feel confident in your skin.
              </p>
              <div>
                <p className="uppercase font-semibold tracking-[2px] text-[13px]">
                  Mila Christine
                </p>
                <p className="text-[13px] text-[#737375]">Founder</p>
              </div>
              <div className="border border-[#e9e9e9] my-6"></div>
              <div>
                <h6 className="uppercase pb-5 tracking-[2px] text-[14px]">
                  Social Media
                </h6>
                <div className="flex items-center gap-8">
                  <FaFacebook
                    size={20}
                    className="text-blue-500 cursor-pointer"
                  />
                  <RxInstagramLogo
                    size={20}
                    className="text-blue-500 cursor-pointer"
                  />
                  <FaTwitter
                    size={20}
                    className="text-blue-500 cursor-pointer"
                  />
                  <FaYoutube
                    size={20}
                    className="text-blue-500 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-10 bg-[#e7f6ff]">
        <div className="max-w-[1200px] mx-auto py-20">
          <div className="flex">
            <div className="w-1/4">
              <h6 className="uppercase leading-5 tracking-[2px]">Our Story</h6>
            </div>
            <div className="w-3/4 pr-28">
              <span className="text-[20px] font-semibold leading-8 text-justify">
                Born from a passion for clean beauty, Flawless is skincare you
                can trust.We blend nature and science to bring out your skin’s
                natural radiance.
              </span>
              <p className="text-[#475561] leading-7 text-justify mt-2.5">
                Flawless began with a simple idea—to create skincare that’s
                honest, gentle, and truly effective. Tired of products filled
                with harsh chemicals and empty promises, our founder set out to
                build something better. Guided by nature and backed by care,
                Flawless was born to bring pure, organic skincare to everyone.
                What started as a passion has grown into a trusted brand,
                helping people feel confident in their skin every single day.
              </p>
              <StatsSection />
            </div>
          </div>
        </div>
      </div>
      <FollowUs />
      <Methods />
    </div>
  );
};

export default AboutPage;
