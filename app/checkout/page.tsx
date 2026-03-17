import Header from "@/app/components/Header";
import ShowDiscountInOrder from "@/app/components/ShowDiscountInOrder";
import React from "react";
import { RiCheckboxIndeterminateFill } from "react-icons/ri";

const CheckoutPage = () => {
  return (
    <>
      <Header variant="light" />
      <div className="bg-[#e7f6ff]">
        <div className="max-w-[1240px] mx-auto pt-10">
          <div className="bg-white px-24 py-16">
            <div className="mb-6">
              <h1 className="leading-5 text-[26px] font-sans">Checkout</h1>
            </div>
            <div>
              {/* Discount code */}
              <div className="border border-black"></div>
              <div className="bg-[#f7f6f7] py-4 px-8 mb-8">
                <ShowDiscountInOrder />
              </div>

              {/* form */}
              <div>
                <form action="" className="flex ">
                  {/* Left col */}
                  <div className="w-[55%] mr-11">
                    <div className="mb-5">
                      <h3 className="pt-5 pb-3.5 font-bold text-xl">
                        Billing Details
                      </h3>
                      <div className="border border-[#dddddd]"></div>
                    </div>

                    <div>
                      <div className="w-full flex items-center gap-4 mb-4">
                        {/* Email */}
                        <div className="w-1/2 flex flex-col">
                          <label htmlFor="">Nhập họ</label>
                          <input type="text" className="p-3 mt-2 border" />
                        </div>
                        {/* Name */}
                        <div className="w-1/2 flex flex-col">
                          <label htmlFor="">Nhập tên</label>
                          <input type="text" className="p-3 mt-2 border" />
                        </div>
                      </div>

                      <div className="flex flex-col mb-4">
                        <label htmlFor="">Email</label>
                        <input type="email" className="p-3 mt-2 border" />
                      </div>

                      <div className="flex flex-col mb-4">
                        <label htmlFor="">Địa chỉ nhận hàng</label>
                        <input type="text" className="p-3 mt-2 border" />
                      </div>
                      <div className="flex flex-col mb-4">
                        <label htmlFor="">Nhập số điện thoại</label>
                        <input type="text" className="p-3 mt-2 border" />
                      </div>
                      <div className="flex flex-col mb-4">
                        <label htmlFor="">Ghi chú</label>
                        <input type="text" className="p-3 mt-2 border" />
                      </div>
                    </div>
                  </div>
                  {/* Right col */}
                  <div className="w-[45%] px-7 border border-[#dddddd]">
                    <div>
                      <h3 className="pt-7 pb-5 text-[19px] font-bold">
                        Your order
                      </h3>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#364151] font-semibold">
                        Product
                      </span>
                      <span className="text-[#364151] font-semibold">
                        Subtotal
                      </span>
                    </div>
                    <div className="mb-8">
                      <div className="border border-[#dddddd] mt-3.5"></div>
                      {/* Render product */}
                      <div className="flex justify-between items-center mt-3.5">
                        <span className="max-w-[200px]">
                          Soothing Sunscreen Gel
                          <br />
                          <p>x1</p>
                        </span>
                        <span>100,000</span>
                      </div>
                      <div className="border border-[#dddddd] mt-3.5"></div>
                      <div className="flex justify-between items-center mt-3.5">
                        <span className="max-w-[200px]">
                          Soothing Sunscreen Gel
                          <br />
                          <p>x1</p>
                        </span>
                        <span>100,000</span>
                      </div>

                      {/*  */}
                      <div className="border border-[#dddddd] my-3.5"></div>
                      <div className="flex items-center justify-between">
                        <span>Subtotal</span>
                        <span>200,000</span>
                      </div>
                      <div className="border border-[#dddddd] my-3.5"></div>
                      <div className="flex items-center justify-between">
                        <span>Coupon: </span>
                        <span>-100,000</span>
                      </div>
                      <div className="border border-[#dddddd] my-3.5"></div>
                      <div className="flex items-center justify-between">
                        <span>Shipment</span>
                        <span>30,000</span>
                      </div>
                      <div className="border border-[#dddddd] my-3.5"></div>
                      <div className="flex items-center justify-between">
                        <span>Total</span>
                        <span>130,000</span>
                      </div>
                      <div className="border border-[#dddddd] my-3.5"></div>
                    </div>

                    <button
                      type="button"
                      className="w-full py-3 px-6 my-2 border cursor-pointer"
                    >
                      Xem các mã giảm giá có sẵn
                    </button>

                    <div className="border border-black"></div>
                    <div className="py-4 px-5 bg-[#f7f6f7] mb-8">
                      <div className="flex justify-between gap-4">
                        <RiCheckboxIndeterminateFill
                          size={20}
                          className="shrink-0"
                        />
                        <p className="text-[#515151] leading-8">
                          Sorry, it seems that there are no available payment
                          methods. Please contact us if you require assistance
                          or wish to make alternate arrangements.
                        </p>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 px-7 bg-blue-600 text-white uppercase font-medium rounded-md mb-8 border border-transparent hover:border-blue-600 hover:bg-white hover:text-blue-600 cursor-pointer transition-all duration-300"
                    >
                      Place Order
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
