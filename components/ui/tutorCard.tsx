import * as React from "react"

import { cn } from "@/lib/utils"
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface TutorCardProps{
    imgSrc?:string;
    name?:string;
    school?:string;
    offers?:string[];
    instructionMode?:string[];
    paymentMethods?:string[];
    rating?:number;
}

export function TutorCard({
    imgSrc="Vijay Hans - PfP.jpg",
    name="Vijay Hans",
    school="UC Berkeley MET '29",
    offers=["CS 61A", "MATH 54", "POLSCI 5"],
    instructionMode=["In Person", "Remote"],
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
        <div className="border border-gray-300 dark:border-zinc-800 rounded-xl p-6 w-full max-w-md bg-white dark:bg-zinc-900 shadow-sm transition-shadow hover:shadow-md min-w-[32vw] h-full">
            {/*top*/}
            <div className="flex items-center gap-4 mb-4">
                <img src={imgSrc} className="w-27 h-27 rounded-full border-3 border-gray-300"></img>
                <span><h1 className="font-bold text-[2rem]">{name}</h1>
                <i className="text-[1.2rem]">{school}</i></span>
            </div>
            {/*next*/}
            <div className="flex-column text-[1.2rem] pb-2">
                <div>
                    <div className="pb-4">{offers.map((subject, index) => (
                        <a className="inline-block px-3 py-1 text-[1rem] font-semibold no-underline transition-transform duration-200 rounded-full bg-slate-200 text-slate-700 hover:scale-105 hover:bg-slate-300 mr-0.5 ml-0.5" key={index} href={`/courses/${subject}`}>{subject}</a>
                    ))}</div>
                </div>
                <div>
                    <span>Style: </span><span>{instructionMode.join(", ")}</span>
                </div>
                <div>
                    <span>{paymentMethods.join(" • ")}</span>
                </div>
            </div>
            {/*rating*/}
            <div className="text-berkeley-gold flex text-4xl">
                {starElements}
            </div>
        </div>
    )
}