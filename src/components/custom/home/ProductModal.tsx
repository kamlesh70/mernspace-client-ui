import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

import pizzaImage from "../../../../public/pizza-main.png";
import Image from "next/image";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

function ProductModal() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button>Choose</Button>
      </DialogTrigger>
      <DialogContent>
        <div className="grid grid-flow-col">
          <div className="col-span-4 content-center bg-white">
            <Image alt="product image" height={120} width={120} src={pizzaImage} />
          </div>
          <div className="col-span-8 space-y-3">
            <div>
              <h1 className="font-bold">Margarita Pizza</h1>
              <p className="">This is very healthy pizza</p>
            </div>
            <div className="space-y-1">
              <p>Choose the size</p>
              <ToggleGroup className="justify-between" type="single">
                <ToggleGroupItem value="bold" aria-label="Toggle bold">
                  <p className="mx-3">Small</p>
                </ToggleGroupItem>
                <ToggleGroupItem value="italic" aria-label="Toggle italic">
                  <p className="mx-3">Small</p>
                </ToggleGroupItem>
                <ToggleGroupItem value="underline" aria-label="Toggle underline">
                  <p className="mx-3">Small</p>
                </ToggleGroupItem>
              </ToggleGroup>  
            </div>
            <div className="space-y-1">
              <p>Extra Toppings</p>
                <ToggleGroup className="justify-between" type="single">
                <ToggleGroupItem value="bold" aria-label="Toggle bold">
                  <Image alt="product image" height={20} width={20} src={pizzaImage} />
                </ToggleGroupItem>
                <ToggleGroupItem value="italic" aria-label="Toggle italic">
                  <Image alt="product image" height={50} width={50} src={pizzaImage} />
                </ToggleGroupItem>
                <ToggleGroupItem value="underline" aria-label="Toggle underline">
                  <Image alt="product image" height={50} width={50} src={pizzaImage} />
                </ToggleGroupItem>
              </ToggleGroup>  
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ProductModal