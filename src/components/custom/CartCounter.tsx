'use client';

import { useAppSelector } from "@/lib/store/hooks"
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function CartCounter() {
  const searchParams = useSearchParams();
  const cartItemCount = useAppSelector((state) => state.cart.cartItems);

  return (
    <div className="relative">
      <Link
        className="hover:text-primary"
        href={`checkout/?restaurantId=${searchParams.get("restaurantId")}`}
      >
        <ShoppingCart className="hover:text-primary font-medium" />
        <span className="absolute -top-4 left-6 bg-primary rounded-full py-0.5 px-2.5 text-white">
          {cartItemCount?.length}
        </span>
      </Link>
    </div>
  );
}

export default CartCounter