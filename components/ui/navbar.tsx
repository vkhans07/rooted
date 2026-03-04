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
        <div className="font-black flex justify-between bg-black text-white pr-10 pl-10 pt-3 pb-3 sticky top-0 w-full z-50">
            <div className="text-3xl">
                <a href="#">rooted.</a>
            </div>
            <NavigationMenu>
            <NavigationMenuList className="flex justify-end gap-6">
                <NavigationMenuItem>
                     <NavigationMenuLink asChild>
                            <a href="https://www.youtube.com/" className="bg-black text-white flex flex-row font-semibold items-center justify-center hover:text-black transition-colors gap-2">
                                Tutors
                            </a>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <a href="https://www.youtube.com/" className="bg-black border border-berkeley-gold text-white flex flex-row items-center justify-center hover:bg-berkeley-gold hover:text-black transition-colors gap-2">
                                <AiOutlineUser className="text-xl"/><span>Sign In</span>
                            </a>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}