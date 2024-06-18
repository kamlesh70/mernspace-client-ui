import { Button } from "@/components/ui/button";
import Image from "next/image";

import pizzaImg from '../../../public/pizza-main.png';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from "@/components/custom/home/ProductCard";
import ProductList from "@/components/custom/home/ProductList";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <div className="bg-white py-10">
        <div className="container flex justify-between">
          <div className="space-y-6">
            <div>
              <h1 className="font-extrabold text-4xl">Super Delicious Pizza In</h1>
              <p className="font-extrabold text-4xl text-primary" >Only 30 Minutes</p>
            </div>
            <div>
              <p className="font-medium">Enjoy Your Free Meal If Your Order Takes More</p>
              <p className="font-medium">Than 30 Minutes!</p>
            </div>
            <div>
              <Button className="color-primary rounded-full p-6">Get Your Pizza</Button>
            </div>
          </div>
          <div>
            <Image alt="pizza-img" src={pizzaImg} height={250} width={250} />
          </div>
        </div>
      </div>
      <div className="container my-6">
        <Suspense fallback={'...Loading'}>
          <ProductList searchParams={{ restaurantId: '1' }}/>
        </Suspense>
      </div>
    </main>
  );
}
