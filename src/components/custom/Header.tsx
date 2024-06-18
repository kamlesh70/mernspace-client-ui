import { Phone, ShoppingCart } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import Logo from "./Logo";
import Link from "next/link";
import { Button } from "../ui/button";
import { Tenant } from "@/lib/types";


async function Header() {

  const fetchTenants = await fetch(`${process.env.BACKEND_URL}/api/auth/tenant?limit=100`,
    {
      next: {
        revalidate: 3600, // 1 hour
      }
    }
  )

  if(!fetchTenants?.ok){
    throw new Error("failed to fetch tenant information");
  }

  const tenants : { tenants: Tenant[] } = await fetchTenants.json();

  return (
    <header className="bg-white">
      <nav className="container py-5">
        <div className="flex justify-between flex-wrap">
          <div className="flex items-center space-x-4">
            <Logo />
            <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder={ tenants.tenants[0].name } />
            </SelectTrigger>
            <SelectContent>
              {
                tenants.tenants.map((tenant) => (
                  <SelectItem key={tenant.id} value={tenant.id}>
                    {tenant.name}
                  </SelectItem>
                ))
              }
            </SelectContent>
          </Select>
          </div> 
          <div className="flex gap-x-4 items-center">
            <ul className="flex space-x-4">
              <li className="hover:text-primary font-medium">
                <Link href={"/"}>
                  Menu
                </Link>
              </li>
              <li className="hover:text-primary font-medium">
                <Link href={"/"}>
                  Orders
                </Link>
              </li>
            </ul>
            <div className="relative">
              <ShoppingCart className="hover:text-primary font-medium"/>
              <span className="absolute -top-4 left-6 bg-primary rounded-full py-0.5 px-2.5 text-white">
                3
              </span>
            </div>
            <div className="flex ml-6 space-x-2">
              <Phone />
              <span>
                +91-8192913570
              </span>
            </div>
            <Button className="color-primary">Logout</Button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;