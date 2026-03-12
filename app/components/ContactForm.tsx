"use client";
import api from "@/lib/api";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { toast } from "react-toastify";

const ContactForm = ({ error, setError }: any) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const onChangeInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    // Set lai rong khi field thay doi
    setError((prev: any) => ({ ...prev, [e.target.name]: "" }));
  };

  const submitFeedBack = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post("/feedback/add", data);
      toast.success("Gửi phản hồi thành công");
    } catch (error: any) {
      setError(error?.response?.data);
    }
  };

  return (
    <>
      {/* form */}
      <div className="w-2/3 flex flex-col pl-20">
        <div className="border border-blue-500 w-16 my-6"></div>
        <form onSubmit={submitFeedBack} className="flex flex-col gap-6">
          <div className="">
            <label htmlFor="">Name</label>
            <input
              name="name"
              type="text"
              value={data.name}
              onChange={onChangeInput}
              className={`py-2.5 px-3 border ${error.name ? "border-red-500 outline-none" : ""}  w-full rounded-md my-1.5`}
            />
            {error.name && <p className="text-red-500">{error.name}</p>}
          </div>
          <div className="">
            <label htmlFor="">Email</label>
            <input
              name="email"
              type="email"
              value={data.email}
              onChange={onChangeInput}
              className={`py-2.5 px-3 border ${error.email ? "border-red-500 outline-none" : ""}  w-full rounded-md my-1.5`}
            />
            {error.email && <p className="text-red-500">{error.email}</p>}
          </div>
          <div className="">
            <label>Comment or Message</label>
            <textarea
              name="comment"
              value={data.comment}
              onChange={onChangeInput}
              className={`h-24 py-2.5 px-3 border ${error.comment ? "border-red-500 outline-none" : ""} w-full rounded-md my-1.5`}
            />
            {error.comment && <p className="text-red-500">{error.comment}</p>}
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white w-[100px] py-3 rounded-md cursor-pointer hover:bg-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
