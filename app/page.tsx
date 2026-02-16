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
import { NavBar } from "./navbar";


export default function Home() {
  return (
      <div className="w-screen bg-black">
      <NavBar></NavBar>
      <main className="flex min-h-screen w-full flex-col items-center justify-between bg-white dark:bg-black sm:items-start">
        <div className="w-full overflow-hidden relative">
          <img className="w-full blur-xs scale-105 transform" src="/Sather.jpg/"></img>
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
            <h1 className="text-white text-4xl sm:text-6xl font-bold tracking-tight text-center px-4 text-shadow-lg/50">
              For Berkeley Students.
            </h1>
            <h1 className="text-white text-4xl sm:text-6xl font-bold tracking-tight text-center px-4 text-shadow-lg/50">
              By Berkeley Students.
            </h1>
          </div>
          </div>
      </main>
      </div>
  );
}
