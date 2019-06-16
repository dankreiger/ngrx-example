export interface IOrderRecipient {
  name: string;
  email: string;
}

export interface IOrderTotalPrice {
  currency: string;
  amount: string;
}

export interface IOrderItem {
  id: string;
  name: string;
  quantity: number;
  total_price: IOrderTotalPrice;
}

export interface IOrderDelivery {
  courier: string;
  method: string;
}

export interface IChargeCustomer {
  currency: string;
  total_price: string;
}

export interface IOrder {
  id: string;
  recipient: IOrderRecipient;
  created_at: Date;
  items: IOrderItem[];
  delivery: IOrderDelivery;
  charge_customer: IChargeCustomer;
  selected?: boolean;
}
