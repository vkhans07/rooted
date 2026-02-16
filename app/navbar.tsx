import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Link } from "lucide-react";
import { AiOutlineUser } from "react-icons/ai";

export function NavBar() {
    return (
        <div className="font-bold flex justify-between bg-black text-white pr-10 pl-10 pt-3 pb-3 fixed top-0 w-full z-50">
            <div className="text-2xl">
                <a href="#">rooted.</a>
            </div>
            <NavigationMenu>
            <NavigationMenuList className="flex justify-end gap-6">
                <NavigationMenuItem>
                     <NavigationMenuLink asChild>
                            <a href="https://www.youtube.com/" className="bg-black text-white flex flex-row font-semibold items-center justify-center hover:text-black transition-colors gap-2">
                                Universities
                            </a>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <a href="https://www.youtube.com/" className="bg-black border border-white text-white flex flex-row items-center justify-center hover:bg-white hover:text-black transition-colors gap-2">
                                <AiOutlineUser className="text-xl"/><span>Sign In</span>
                            </a>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}