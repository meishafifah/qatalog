import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { ChevronRight, X, Menu } from "lucide-react";
import logo from "../assets/logo.png";
import { useState } from "react";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="fixed left-0 right-0 flex justify-center z-50 mx-10 lg:mx-0">
      <div className="my-8 py-4 px-6 w-full lg:w-fit flex justify-between lg:justify-center border rounded-full shadow-md bg-white z-50">
        <a className="flex items-center" href="/">
          <img className="w-9 h-9 rounded-full mr-2 lg:mr-16" src={logo} alt="Logo" />
          <span className="block lg:hidden text-base md:text-xl font-light">Qatalog</span>
        </a>
        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList className="flex justify-between gap-16">
            <NavigationMenuItem>
              <NavigationMenuLink href="/">Product</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/">Resources</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/">Pricing</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/">Login</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/">
                <Button className="rounded-full bg-black/80 text-white hover:text-black">
                  Get Started <ChevronRight />
                </Button>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Button
          onClick={() => setOpenMenu(!openMenu)}
          className="block lg:hidden items-center ml-3 text-sm shadow-none"
        >
          <Menu className="w-full" />
        </Button>
      </div>

      <div
        onClick={() => setOpenMenu(false)}
        className={`duration-500 fixed inset-0 bg-black z-40 ${
          openMenu
            ? "opacity-50 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      ></div>
      <div
        className={`duration-500 w-full fixed top-0 z-50 bg-white px-6 shadow-2xl translate-x-full ${
          openMenu && "translate-x-0"
        }`}
      >
        <div className="pt-9 pb-6 flex justify-between">
          <a href={"/"}>
            <img className="w-[80px] md:w-auto" src={logo} />
          </a>
          <X className="cursor-pointer" onClick={() => setOpenMenu(false)} />
        </div>

        <ul className="flex flex-col rounded-lg pb-4"></ul>
      </div>
    </div>
  );
}
