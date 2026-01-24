import ProductCart from "@/app/components/ProductCart";
import React from "react";

const LovedByCustomers = () => {
  const products = [
    {
      id: 1,
      name: "Hybrid Cleansing Balm",
      star: 5,
      category: "Cleanser",
      image: "/img/skin-cleanser-template-product-img-3.jpg",
      price: 840000,
    },
    {
      id: 2,
      name: "Soothing Sunscreen Gel",
      star: 5,
      category: "Sunscreens",
      image: "/img/skin-cleanser-template-product-img-11.jpg",
      price: 630000,
    },
    {
      id: 3,
      name: "Energizing Marine Lotion",
      star: 5,
      category: "Body lotion",
      image: "/img/skin-cleanser-template-product-img-1.jpg",
      price: 630000,
    },
    {
      id: 4,
      name: "Calm Hydrating Moisturizer",
      star: 5,
      category: "Body lotion",
      image: "/img/skin-cleanser-template-product-img-14.jpg",
      price: 890000,
    },
  ];
  return (
    <div className="container mx-auto py-[120px] px-[40px]">
      <div className="flex flex-col items-center justify-center">
        <h2 className="mb-2 text-[40px]">Most Loved by the Customers</h2>
        <p className="text-[#364151] text-[16px]">
          Meet the favorite—loved by thousands, trusted for flawless results.
        </p>
      </div>
      <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.map((product) => (
          <div key={product.id}>
            <ProductCart product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LovedByCustomers;
