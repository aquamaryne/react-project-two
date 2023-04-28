import React, { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

export default function SearchBar({ onSearch }){
    const[search, setSearch] = useState("");

    const handleInputChange = (event) => {
        setSearch(event.target.value)
    }

    const handleRequest = () => {
        axios.get(`http://localhost:8000/auto/brand?serach=${search}`)
            .then((res) => onSearch(res.data))
            .catch(err => console.error(err));
    }

    return(
        <form onSubmit={handleRequest} className='flex items-center rounded-md p-2'>
            <div className="flex">
                <input
                    className='bg-white text-[#023430] rounded-md p-2 mr-2 w-60' 
                    type='text'
                    placeholder='Пошук...'
                    onChange={handleInputChange}
                />
                <Link to={"/carsSearch"}>
                    <button className="bg-[#fdf6e3] text-[#1f1f1f] rounded-md px-4 py-2 hover:bg-[#fdf6e3dc]" type='Submit'>Шукати</button>
                </Link>
            </div>
        </form>
    )
}