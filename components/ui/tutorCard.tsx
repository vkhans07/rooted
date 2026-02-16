import * as React from "react"

import { cn } from "@/lib/utils"
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface TutorCardProps{
    imgSrc?:string;
    name?:string;
    school?:string;
    offers?:string[];
    style?:string[];
    paymentMethods?:string[];
    rating?:number;
}

export function TutorCard({
    imgSrc="Vijay Hans - PfP.jpg",
    name="Vijay Hans",
    school="UC Berkeley MET '29",
    offers=["CS 61A", "MATH 54", "POLSCI 5"],
    style=["In Person", "Remote"],
    paymentMethods=["Venmo", "Zelle", "Cash"],
    rating=4.8,}:TutorCardProps)
 {
    
    const starElements = [];
    for (let i = 1; i < 6; i++) {
        if (i <= rating) {
            starElements.push(<AiFillStar key={i}></AiFillStar>)
        }
        else {
            starElements.push(<AiOutlineStar key={i}></AiOutlineStar>)
        }
    }
                
    return (
        <div className="border border-gray-300 dark:border-zinc-800 rounded-xl p-6 w-full max-w-md bg-white dark:bg-zinc-900 shadow-sm transition-shadow hover:shadow-md">
            {/*top*/}
            <div className="flex items-center gap-4 mb-5">
                <img src={imgSrc} className="w-24 h-24 rounded-full"></img>
                <span><h1 className="font-bold text-4xl">{name}</h1>
                <i className="text-[1.5rem]">{school}</i></span>
            </div>
            {/*next*/}
            <div className="flex-column text-[1.2rem] pb-2">
                <div>
                    <span>Teaches </span><span>{offers.join(", ")}</span>
                </div>
                <div>
                    <span>Style: </span><span>{style.join(", ")}</span>
                </div>
                <div>
                    <span>Payment: </span><span>{paymentMethods.join(", ")}</span>
                </div>
            </div>
            {/*rating*/}
            <div className="flex text-4xl">
                {starElements}
            </div>
        </div>
    )
}