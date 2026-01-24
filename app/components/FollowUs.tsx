import Image from "next/image";
import React from "react";

const FollowUs = () => {
  const imageSkinCare = [
    {
      id: 1,
      image: "/img/skin-care-store-image-1.png",
    },
    {
      id: 2,
      image: "/img/skin-care-store-image-2.png",
    },
    {
      id: 3,
      image: "/img/skin-care-store-image-3.png",
    },
    {
      id: 4,
      image: "/img/skin-care-store-image-4.png",
    },
    {
      id: 5,
      image: "/img/skin-care-store-image-5.png",
    },
    {
      id: 6,
      image: "/img/skin-care-store-image-6.png",
    },
  ];

  return (
    <div className="container mx-auto px-[40px] py-[120px]">
      <div className="max-w-[970px] mx-auto">
        <div className="flex flex-col justify-center items-center">
          <div>
            <h4 className="text-2xl font-light">
              Follow Us.{" "}
              <a href="#" className="underline text-2xl">
                @flawlesscleanser
              </a>
            </h4>
          </div>
          <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-3">
            {imageSkinCare.map((img) => (
              <div key={img.id}>
                <Image
                  src={img.image}
                  alt="image"
                  width={400}
                  height={400}
                  className="object-center pr-10 pb-10"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowUs;
