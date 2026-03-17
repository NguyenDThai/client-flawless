/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import ContactForm from "@/app/components/ContactForm";
import Header from "@/app/components/Header";
import Image from "next/image";
import React, { useState } from "react";
import { FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineSupport } from "react-icons/md";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

const ContactPage = () => {
  const FAQList = [
    {
      id: 1,
      question: "Is Flawless suitable for all skin types?",
      answer:
        "Yes, Flawless is formulated to be gentle and effective for all skin types, including sensitive skin.",
    },
    {
      id: 2,
      question: "Are your products 100% natural and organic?",
      answer:
        "Absolutely! We use pure, organic ingredients with no harmful chemicals or artificial additives.",
    },
    {
      id: 3,
      question: "How long does shipping take?",
      answer:
        "Orders are typically delivered within 3–5 business days, depending on your location.",
    },
  ];

  const [openId, setOpenId] = useState(null);
  const [error, setError] = useState<any>({});

  const toggleFAQ = (id: any) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div>
      <Header variant="transparent" />
      <div className="relative w-full max-h-[700px] lg:h-screen overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={"/contact-hero-image.png"}
            alt="banner contact"
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
            background: "linear-gradient(180deg, #000000 0%, #00000087 100%",
          }}
        ></div>

        <div className="max-w-[600px] absolute bottom-1/4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-7">
          <h1 className="text-7xl text-white font-sans">Get in Touch</h1>
          <p className="text-center text-white mb-4 leading-8">
            Have a question, need help, or just want to connect? Our team is
            always happy to assist—reach out and we’ll get back to you shortly.
          </p>
          <div className="w-12 border border-white"></div>
        </div>
      </div>
      {/* Imformation address */}
      <div className="px-10">
        <div className="max-w-[1200px] mx-auto mt-16 mb-10">
          <div className="flex flex-col">
            {/* information */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex flex-col items-center gap-3 w-[256px]">
                <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center">
                  <FaLocationDot size={20} />
                </div>
                <div>
                  <p className="uppercase tracking-[2px] text-[#0F172A] text-center">
                    Find US
                  </p>
                  <p className="text-center text-[#364151] mt-3">
                    123 Demo St, San Francisco, CA 45678, United States
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3 w-[256px]">
                <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center">
                  <MdOutlineSupport size={20} />
                </div>
                <div>
                  <p className="uppercase tracking-[2px] text-[#0F172A] text-center">
                    Support
                  </p>
                  <p className="text-center text-[#364151] mt-3">
                    Call: +1 123 456 7890 <br />
                    Email: mail@example.com
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3 w-[256px]">
                <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center">
                  <FaClock size={20} />
                </div>
                <div>
                  <p className="uppercase tracking-[2px] text-[#0F172A] text-center">
                    Working hours
                  </p>
                  <p className="text-center text-[#364151] mt-3">
                    Mon - Fri: 08:30 - 20:00 <br />
                    Sat & Sun: 09:30 - 21:30
                  </p>
                </div>
              </div>
            </div>
            {/* Maps */}
            <div className="mt-7">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7857.063851421638!2d105.74127744384819!3d10.055428939215965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1773115879182!5m2!1svi!2s"
                width="600"
                height="450"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Form Question */}
      <div className="px-10">
        <div className="max-w-[1200px] mx-auto py-[120px] flex flex-row items-center">
          <div className="max-w-1/3 flex flex-col gap-5">
            <h2 className="text-[40px] leading-[52px]">Have Any Question ?</h2>
            <p className="mb-4 text-[#364151]">
              Have a question, feedback, or just want to say hello? We’d love to
              hear from you!
            </p>
            <div className="w-full border border-[#e9e9e9] my-4"></div>
            <h6 className="uppercase tracking-[2px] text-[#0F172A]">
              Frequently Asked Questions
            </h6>

            {/* Questions */}
            <div>
              {FAQList.map((q) => (
                <div key={q.id}>
                  <div
                    onClick={() => toggleFAQ(q.id)}
                    className="flex items-center justify-between pt-4 pb-2 cursor-pointer"
                  >
                    <p className="font-bold leading-1">{q.question}</p>
                    {openId === q.id ? (
                      <RiArrowDropUpLine size={23} />
                    ) : (
                      <RiArrowDropDownLine size={23} />
                    )}
                  </div>

                  {openId === q.id && (
                    <div className="mt-3 text-gray-600">
                      <p>{q.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          {/* Form */}
          <ContactForm error={error} setError={setError} />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
