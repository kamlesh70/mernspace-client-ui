"use client";
import { setInitialCartItems } from "@/lib/store/features/cartSlice";
import { AppStore, makeStore } from "@/lib/store/store";
import { useRef } from "react";
import { Provider } from "react-redux";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
    const isLocalStoragePresent = window && window.localStorage;
    if (isLocalStoragePresent) {
      try {
        console.log("initializing local storage");
        const data = window.localStorage.getItem("cartItems") as string;
        const cartItems: any = JSON.parse(data);
        if (cartItems) {
          storeRef.current.dispatch(setInitialCartItems(cartItems));
        }
      } catch (error) {
        console.error(error);
      }
    }
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
