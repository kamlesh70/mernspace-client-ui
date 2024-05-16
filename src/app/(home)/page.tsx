import { Button } from "@/components/ui/button";
import Image from "next/image";

import pizzaImg from '../../../public/pizza-main.png';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from "@/components/custom/ProductCard";

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
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger className="font-bold" value="account">Pizza</TabsTrigger>
          <TabsTrigger className="font-bold" value="password">Beverages</TabsTrigger>
        </TabsList>
        <TabsContent value="account" className="flex flex-wrap">
          <ProductCard />
          <ProductCard />
          {/* <ProductCard />
          <ProductCard /> */}
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
      </div>
    </main>
  );
}
