'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { AppStore, makeStore } from './store'
import { CartItem, setInitialCartItems } from './features/cartSlice'

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
    const isLocalStoragePresent = window && window.localStorage;
    if(isLocalStoragePresent){
      try {
        const cartItems: any = JSON.parse(window.localStorage.getItems('cartItems'));
        if(cartItems){
          storeRef.current.dispatch(setInitialCartItems(cartItems));
        }
      } catch (error) {
        console.error(error);
      }
    }
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}