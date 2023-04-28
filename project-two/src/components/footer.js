import React from "react";
import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <footer className="font-rubik border border-[#1f1f1f] bg-[#023430] text-white container mx-auto max-w-full">
            <div className="max-w-lg mx-auto flex flex-wrap justify-between py-2 text-sm">
                <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-8">
                    <Link to={"/"} className="hover:text-whit mb-2 block  pt-12"> О нас </Link>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-8 text-center pt-6">
                    <h1> Автомобілі </h1>
                    <Link to={"/"} className="border border-[#023430] hover:border-[#1f1f1f] hover:bg-[#1DA1F2] hover:text-white mb-2 block"> Toyota </Link>
                    <Link to={"/"} className="hover:text-white mb-2 block"> Nissan </Link>
                    <Link to={"/"} className="hover:text-white mb-2 block"> Mazda </Link>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-8 text-center pt-6">
                    <h1 className="inline-block"> Соціальні мережі </h1>
                    <Link to={"/"} className="rounded-md border border-[#023430] hover:border-[#1f1f1f] hover:bg-[#1DA1F2] hover:text-white mb-2 block"> Twitter </Link>
                    <Link to={"/"} className="rounded-md border border-[#023430] hover:border-[#1f1f1f] hover:bg-[#4267B2] hover:text-white mb-2 block"> Facebook </Link>
                    <Link to={"/"} className="rounded-md border border-[#023430] hover:border-[#1f1f1f] hover:bg-gradient-to-r hover:from-[#feda75] hover:via-[#d62976] hover:to-[#962fbf] hover:text-white mb-2 block"> Instagram </Link>
                </div>
            </div>
            <div className="border-t border-[#1f1f1f] py-2 sm:py-4">
                <p className="text-sm text-white text-center"> Non-comercial Company @ 2023 InsideCard. All rights reserved.</p>
            </div>
        </footer>

    )
}