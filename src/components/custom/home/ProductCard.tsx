import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../ui/card";
import pizzaImage from "../../../../public/pizza-main.png";
import Image from "next/image";
import ProductModal from "./ProductModal";

function ProductCard() {
  return (
    <Card className="w-72">
      <CardHeader className="items-center">
        <Image alt="product image" height={120} width={120} src={pizzaImage} />
      </CardHeader>
      <CardContent className="w-full">
        <p className="font-bold">Pizza Name</p>
        <p className="text-sm">pizza description will come here!</p>
      </CardContent>
      <CardFooter>
        <div className="w-full flex justify-between">
          <p>From <span className="font-bold">500</span></p>
          <ProductModal />
        </div>
      </CardFooter>
    </Card>

  )
}

export default ProductCard;