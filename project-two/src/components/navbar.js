import React from "react";
import { Link } from 'react-router-dom';
import SearchBar from "./searchBar";
import RedirectBtn from "./logbtn";

export default function Navbar(){
    return(
        <nav className="bg-[#023430] font-rubik">
            <div className="max-w-7x1 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <span className="text-[#fdf6e3] font-bebas text-4xl"> <Link to="/" > Inside Cars </Link> </span>
                    </div>
                    <div className="ml-4 flex items-center">  
                        <Link 
                            to="/new" 
                            className="border border-[#023430] hover:border-gray-900 text-[#fdf6e3] hover:bg-[#fdf6e3d0] focus:bg-[#fdf6e3d0] transition duration-200 hover:text-[#1f1f1f] focus:text-[#1f1f1f] px-3 py-2 rounded-md text-sm font-medium mr-2"> 
                            Нові авто 
                        </Link>
                        <Link 
                            to="/used" 
                            className="border border-[#023430] hover:border-gray-900 text-[#fdf6e3] hover:bg-[#fdf6e3d0] focus:bg-[#fdf6e3d0] transition duration-200 hover:text-[#1f1f1f] focus:text-[#1f1f1f] px-3 py-2 rounded-md text-sm font-medium"> 
                            Вживані авто 
                        </Link>
                        <Link 
                            to="/carComponents" 
                            className="border border-[#023430] hover:border-gray-900 text-[#fdf6e3] hover:bg-[#fdf6e3d0] focus:bg-[#fdf6e3d0] transition duration-200 hover:text-[#1f1f1f] focus:text-[#1f1f1f] px-3 py-2 rounded-md text-sm font-medium"> 
                            Запчастини 
                        </Link>
                        <div className="ml-96 flex items-center">
                            <SearchBar />
                            <div className="ml-4 pr-2">
                                <RedirectBtn />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

