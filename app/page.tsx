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

const useTypewriter = (words = [""], speed = 50) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const text = words[wordIndex];

    const typingSpeed = speed;
    const deletingSpeed = speed/2;
    const pauseTime = speed*10;

    if (!isDeleting && displayText === text) {
      let pauseTimer;
      if (wordIndex !== words.length - 1) {
        pauseTimer = setTimeout( () => setIsDeleting(true), pauseTime);
      }
      else {
        pauseTimer = setTimeout( () => setIsDeleting(true), pauseTime*10);
      }
      return () => clearTimeout(pauseTimer);
    }

    if (isDeleting && displayText==="") {
      setWordIndex((prev) => ((prev + 1) % words.length));
      setIsDeleting(false);
      return;
    }

    const timer = setTimeout( () => {
      setDisplayText((prev) => {
        if (isDeleting) {
          return text.slice(0, prev.length - 1);
        } else {
          return text.slice(0, prev.length + 1);
        }
      });
      }, isDeleting ? deletingSpeed : typingSpeed);
    }, [displayText, isDeleting, wordIndex]);
  return displayText;
};

const Typewriter = ({ words=[""], speed=100 }) => {
  const displayText = useTypewriter(words, speed);

  return <span className="text-berkeley-gold">{displayText}</span>
};


export default function Home() {
  return (
      <div className="w-screen font-sans">
      <nav className="sticky top-0 z-50"><NavBar></NavBar></nav>
        <main className="flex h-screen w-full flex-col items-center justify-between bg-white dark:bg-black sm:items-start">
          <div className="w-full overflow-hidden relative">
            <img className="h-screen blur-xs scale-105 transform" src="/Sather.jpg/"></img>
            <div className="absolute inset-0 bg-linear-to-t from-[rgb(0,36,71)] to-[rgb(0,36, 71)]/60 z-10"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
              <h1 className="text-white text-4xl sm:text-6xl font-bold tracking-tight text-center px-4 text-shadow-lg/50">
                <Typewriter words={["by", "for"]}></Typewriter> berkeley students.
              </h1>
            </div>
            
            </div>
        </main>
        <div className="text-white">
          <h1 className="text-4xl font-semibold pl-10 pt-10 pb-10">find a tutor that fits <i>for you.</i></h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 items-stretch pr-10 pl-10 pb-10">
          <div style={{ transform: 'scale(0.9)'}}><TutorCard key={1}></TutorCard></div>
          <div style={{ transform: 'scale(0.9)'}}><TutorCard key={2} imgSrc="https://media.licdn.com/dms/image/v2/D5603AQFwbUU31WT4OQ/profile-displayphoto-shrink_400_400/B56ZjPDOq6H8Ak-/0/1755820387251?e=1772668800&v=beta&t=1ByEgfnqvmKzS4yMHjNJuzBy17NN5MtnUjHhygQEHm8" name="Alex Backues" school="UC Berkeley Physics '29" instructionMode={["Remote"]} offers={["CS 61A", "PHYS 5A", "PHYS 7A"]}></TutorCard></div>
          <div style={{ transform: 'scale(0.9)'}}> <TutorCard key={3} imgSrc="https://media.licdn.com/dms/image/v2/D5603AQFdc07H2hifVQ/profile-displayphoto-shrink_800_800/B56ZZ6T0mtHUAc-/0/1745808739063?e=1772668800&v=beta&t=gtlf5VHk3sFl7Ezoy-HXrdOHJ3z6-p0wJjKcsR9F-J4" name="Bruce Li" school="UC Berkeley EECS '29" instructionMode={["In Person"]} offers={["CS 61A", "CS 61B", "CS 70"]}></TutorCard></div>
          
         
        </div>
      </div>
  );
}
