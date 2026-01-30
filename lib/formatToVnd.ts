/* eslint-disable @typescript-eslint/no-explicit-any */
export const toVND = (value: any) => {
  value = value.toString().replace(/\./g, "");
  const formatted = new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "VND",
  })
    .format(value)
    .replace("₫", "")
    .trim();

  return formatted;
};
