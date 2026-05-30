export const toVND = (value: number | string) => {
  // Chuyển đổi chuỗi thành số thực (parseFloat) nếu đầu vào là string
  const numValue =
    typeof value === "string" ? parseFloat(value.replace(/\./g, "")) : value;

  // Đề phòng trường hợp giá trị truyền vào không hợp lệ (không phải số)
  if (isNaN(numValue)) return "0";

  const formatted = new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "VND",
  })
    .format(numValue) // Truyền vào kiểu number chuẩn xác
    .replace("₫", "")
    .trim();

  return formatted;
};
