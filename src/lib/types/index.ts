import { CartItem } from "../store/features/cartSlice";

export interface Tenant {
  id: string;
  name: string;
  address: string;
}

export interface PriceConfiguration {
  [key: string]: {
      priceType: 'base' | 'aditional';
      availableOptions: string[];
  };
}

export interface Attribute {
  name: string;
  widgetType: 'switch' | 'radio';
  defaultValue: string;
  availableOptions: string[];
}

export interface Category {
  _id: string;
  name: string;
  priceConfigurations: PriceConfiguration;
  attributes: Attribute[];
}

export type ProductAttribute = {
  name: string;
  value: string | boolean;
};

export interface ProductPriceConfiguration {
  [key: string]: {
      priceType: 'base' | 'aditional';
      availableOptions: {
          [key: string]: number;
      };
  };
}

export type Product = {
  _id: string;
  name: string;
  image: string;
  description: string;
  categoryId: Category;
  priceConfigurations: ProductPriceConfiguration;
  attributes: ProductAttribute[];
  isPublish: boolean;
  createdAt: string;
};

export type Topping = {
  id: string;
  name: string;
  price: number;
  image: string;
};


export type Address = {
  text: string;
  isDefault: boolean;
};

export type Customer = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  addresses: Address[];
};

export type CouponCodeData = {
  code: string;
  tenantId: string;
};

export type OrderData = {
  cart: CartItem[];
  couponCode: string;
  tenantId: string;
  customerId: string;
  comment: string;
  address: string;
  paymentMode: string;
};
