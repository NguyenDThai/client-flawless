/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaRegStar } from "react-icons/fa";

const ReviewForm = ({ reviews, product }: any) => {
  return (
    <div>
      {reviews === 0 && <p className="mb-4">Chưa có đánh giá nào</p>}
      <div className="border border-gray-400">
        <div className="p-6">
          <div>
            <span className="flex items-center gap-1.5 text-xl text-gray-700">
              Hãy là người đầu tiên đánh giá{" "}
              <p className="font-semibold">{product.name}</p>
            </span>
            <p className="text-gray-700 mt-1.5 mb-1.5">
              Địa chỉ email của bạn không được để trống. Các trường có dấu * là
              bắt buộc
            </p>
            <div className="flex items-center gap-2 my-4">
              <span className="text-xl text-gray-700">Đánh giá sao *</span>
              <p className="flex items-center">
                <FaRegStar size={25} className="text-gray-700" />
                <FaRegStar size={25} className="text-gray-700" />
                <FaRegStar size={25} className="text-gray-700" />
                <FaRegStar size={25} className="text-gray-700" />
                <FaRegStar size={25} className="text-gray-700" />
              </p>
            </div>

            <form action="">
              <div>
                <label className="text-xl text-gray-700">
                  Đánh giá của bạn *
                </label>
                <textarea
                  name=""
                  className="w-full h-20 border border-gray-300 outline-none p-3 mt-0.5"
                ></textarea>
              </div>
              <div className="flex items-center justify-between gap-5 mt-1.5">
                <div className="flex flex-col w-full">
                  <label className="text-gray-700">Họ và tên *</label>
                  <input
                    type="text"
                    className="border border-gray-300 p-3 mt-0.5 outline-none"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label className="text-gray-700">Email *</label>
                  <input
                    type="email"
                    className="border border-gray-300 p-3 mt-0.5 outline-none"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2 m-2">
                <input type="checkbox" name="" />
                <p>
                  Lưu tên, email và trang web của tôi trong trình duyệt này cho
                  lần bình luận tiếp theo
                </p>
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className=" bg-blue-600 text-white py-2.5 px-10 rounded-md border border-transparent hover:text-blue-600 hover:bg-white hover:border-blue-600 transition-all duration-300 cursor-pointer"
                >
                  Gửi
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;
