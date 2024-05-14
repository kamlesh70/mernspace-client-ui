import { ShoppingCart } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import Logo from "./Logo";
import Link from "next/link";
import { Button } from "../ui/button";


function Header() {
  return (
    <header className="bg-white">
      <nav className="container py-5">
        <div className="flex justify-between">
          <div className="flex items-center space-x-4">
            <Logo />
            <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
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
            <span className="ml-6">
              +91-8192913570
            </span>
            <Button className="color-primary">Logout</Button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;