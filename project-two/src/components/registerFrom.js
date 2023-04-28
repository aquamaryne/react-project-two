import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function RegisterForm(){

    const[first_name, setFirstName] = useState([]); 
    const[last_name, setLastName] = useState([]);
    const[password, setPassword] = useState([]);
    const[email, setEmail] = useState([]);
    const[phone, setPhone] = useState([]);    

    const hanldeSubmit = () => {
        if(first_name && last_name && email && password && phone){
            axios.post('http://localhost:8000/user_auth', {
                first_name,
                last_name,
                email,
                password,
                phone
            })
            .then((responce) => {
                console.log(responce.data);
            })
            .catch((error) => {
                console.log(error);
            })
        } else {
            alert("Заповніть форму")
        }
    } 

    return(
        <div className="bg-gray-100 py-10 mb-10">
            <form className="bg-white p-8 mx-auto rounded-md shadow-lg max-w-md">
                <div className="mb-4">
                <label className="block font-bold text-gray-700 mb-2" htmlFor="first-name">
                    First Name
                </label>
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="first-name"
                    type="text"
                    onChange={(event) => setFirstName(event.target.value)}
                />
                </div>
                <div className="mb-4">
                <label className="block font-bold text-gray-700 mb-2" htmlFor="last-name">
                    Last Name
                </label>
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="last-name"
                    type="text"
                    onChange={(event) => setLastName(event.target.value)}
                />
                </div>
                <div className="mb-4">
                <label className="block font-bold text-gray-700 mb-2" htmlFor="email">
                    Email
                </label>
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    onChange={(event) => setEmail(event.target.value)}
                />
                </div>
                <div className="mb-4">
                <label className="block font-bold text-gray-700 mb-2" htmlFor="password">
                    Password
                </label>
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    onChange={(event) => setPassword(event.target.value)}
                />
                </div>
                <div className="mb-4">
                <label className="block font-bold text-gray-700 mb-2" htmlFor="phone">
                    Phone
                </label>
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="phone"
                    type="phone"
                    onChange={(event) => setPhone(event.target.value)}
                />
                </div>
                <div className="flex justify-center">
                    <Link to={"/usePage"}>
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={hanldeSubmit}>
                            Submit
                        </button>
                    </Link>
                </div>
            </form>
        </div>
    );
};