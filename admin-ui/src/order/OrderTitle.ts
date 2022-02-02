import { Order as TOrder } from "../api/order/Order";

export const ORDER_TITLE_FIELD = "davai";

export const OrderTitle = (record: TOrder): string => {
  return record.davai || record.id;
};
