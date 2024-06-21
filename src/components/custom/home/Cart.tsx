'use client';

import { useAppSelector } from "@/lib/store/hooks"
import { ShoppingCart } from "lucide-react";


function Cart() {
  const cartItemCount = useAppSelector(state => state.cart.value);

  return (
    <div className="relative">
    <ShoppingCart className="hover:text-primary font-medium"/>
    <span className="absolute -top-4 left-6 bg-primary rounded-full py-0.5 px-2.5 text-white">
      {cartItemCount}
    </span>
  </div>
  )
}

export default Cart