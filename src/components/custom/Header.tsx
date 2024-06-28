import { Phone, ShoppingCart } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import Logo from "./Logo";
import Link from "next/link";
import { Button } from "../ui/button";
import { Tenant } from "@/lib/types";
import dynamic from "next/dynamic";
import SelectTenant from "./SelectTenant";
import { getSession } from "@/lib/session";
import Logout from "./Logout";

const CartCounterWithoutSSR = dynamic(() => import("./CartCounter"), {
  ssr: false,
});

async function Header() {
  const fetchTenants = await fetch(
    `${process.env.BACKEND_URL}/api/auth/tenant?limit=100`,
    {
      next: {
        revalidate: 3600, // 1 hour
      },
    }
  );

  if (!fetchTenants?.ok) {
    throw new Error("failed to fetch tenant information");
  }

  const tenants: { tenants: Tenant[] } = await fetchTenants.json();

  const session = await getSession();

  return (
    <header className="bg-white">
      <nav className="container py-5">
        <div className="flex justify-between flex-wrap">
          <div className="flex items-center space-x-4">
            <Logo />
            <SelectTenant tenants={tenants} />
          </div>
          <div className="flex gap-x-4 items-center">
            <ul className="flex space-x-4">
              <li className="hover:text-primary font-medium">
                <Link href={"/"}>Menu</Link>
              </li>
              <li className="hover:text-primary font-medium">
                <Link href={"/"}>Orders</Link>
              </li>
            </ul>
            <CartCounterWithoutSSR />
            <div className="flex ml-6 space-x-2">
              <Phone />
              <span>+91-8192913570</span>
            </div>
            {session ? (
              <Logout />
            ) : (
              <Button size={"sm"} asChild>
                <Link href="/login">Login</Link>
              </Button>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
