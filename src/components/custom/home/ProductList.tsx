import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { Category, Product } from "@/lib/types";
import ProductCard from "./ProductCard";

const ProductList = async ({
  searchParams,
}: {
  searchParams: { restaurantId: string };
}) => {
  console.log("searchParams", searchParams.restaurantId);
  // todo: do concurrent requests -> Promise.all()
  const categoryResponse = await fetch(
    `${process.env.BACKEND_URL}/api/catalog/category/list`,
    {
      next: {
        revalidate: 3600, // 1 hour
      },
    }
  );

  if (!categoryResponse.ok) {
    throw new Error("Failed to fetch categories");
  }

  const categories: { categories:  Category[]} = await categoryResponse.json();

  // todo: add pagination
  const productsResponse = await fetch(
    `${process.env.BACKEND_URL}/api/catalog/product/list?perPage=100&tenantId=${searchParams.restaurantId}`,
    {
      next: {
        revalidate: 3600, // 1 hour
      },
    }
  );

  if (!productsResponse.ok) {
    throw new Error("Failed to fetch products");
  }

  const products: { products: Product[] } = await productsResponse.json();
  console.log(products);
  return (
    <section>
      <div>
        <Tabs defaultValue={categories.categories[0]._id}>
          <TabsList>
            {categories.categories.map((category) => {
              return (
                <TabsTrigger
                  key={category._id}
                  value={category._id}
                  className="text-md"
                >
                  {category.name}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {categories.categories.map((category) => {
            return (
              <TabsContent key={category._id} value={category._id}>
                <div className="grid grid-cols-3 gap-6 mt-6">
                  {products.products
                    .filter((product) => product.categoryId._id === category._id)
                    .map((product) => (
                      <ProductCard product={product} key={product._id} />
                    ))}
                </div>
              </TabsContent>
            );
          })}

        </Tabs>
      </div>
    </section>
  );
};

export default ProductList;
