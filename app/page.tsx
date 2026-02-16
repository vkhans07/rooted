'use client';
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Link } from "lucide-react";
import { NavBar } from "../components/ui/navbar";
import { TutorCard } from "../components/ui/tutorCard"

export default function Home() {
  return (
      <div className="w-screen bg-black">
      <nav className="sticky top-0 z-50"><NavBar></NavBar></nav>
        <main className="flex h-screen w-full flex-col items-center justify-between bg-white dark:bg-black sm:items-start">
          <div className="w-full overflow-hidden relative">
            <img className="h-screen blur-xs scale-105 transform" src="/Sather.jpg/"></img>
            <div className="absolute inset-0 bg-linear-to-t from-black/100 to-black/60 z-10"></div>
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
        <div className="text-white">
          <h1 className="text-4xl font-semibold pl-10 pt-10 pb-10">find a tutor that fits <i>for you.</i></h1>
        </div>
        <div className="flex items-center justify-between pr-10 pl-10 pb-10">
          <div style={{ transform: 'scale(0.9)'}}><TutorCard key={1}></TutorCard></div>
          <div style={{ transform: 'scale(0.9)'}}><TutorCard key={2} imgSrc="https://media.licdn.com/dms/image/v2/D5603AQFwbUU31WT4OQ/profile-displayphoto-shrink_400_400/B56ZjPDOq6H8Ak-/0/1755820387251?e=1772668800&v=beta&t=1ByEgfnqvmKzS4yMHjNJuzBy17NN5MtnUjHhygQEHm8" name="Alex Backues" school="UC Berkeley PHYS '29"></TutorCard></div>
          <div style={{ transform: 'scale(0.9)'}}> <TutorCard key={3} imgSrc="https://media.licdn.com/dms/image/v2/D5603AQFdc07H2hifVQ/profile-displayphoto-shrink_800_800/B56ZZ6T0mtHUAc-/0/1745808739063?e=1772668800&v=beta&t=gtlf5VHk3sFl7Ezoy-HXrdOHJ3z6-p0wJjKcsR9F-J4" name="Bruce Li" school="UC Berkeley EECS '29"></TutorCard></div>
          
         
        </div>
      </div>
  );
}
