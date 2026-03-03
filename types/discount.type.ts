export type DiscountType = {
  id: number;
  code: string;
  type: "PERCENT" | "FIXED";
  value: number;
  quantity: number;
  minAmount: number;
  maxDiscount: number;
  usedCount: number;
  isActive: boolean;
  startDate: string;
  endDate: string;
};
