import React, {  useState, useEffect } from "react";
import axios from 'axios';

export default function Filter({ onFilterChange }){
    const[years, setYear] = useState([]);
    const[marks, setMark] = useState([]);
    const[models, setModel] = useState([]);
    const[selectedYear, setSelectedYear] = useState("");
    const[selctedMark, setSelectedMark] = useState("");
    const[selectedModel, setSelectedModel] = useState("");

    const handleYearChange = (event) => {
        setSelectedYear(event.target.value);
        onFilterChange(selectedYear, selctedMark, selectedModel);
    };
    
    const handleBrandChange = (event) => {
        setSelectedMark(event.target.value);
        onFilterChange(selectedYear, selctedMark, selectedModel);
    };
    
    const handleModelChange = (event) => {
        setSelectedModel(event.target.value);
        onFilterChange(selectedYear, selctedMark, selectedModel);
    };

    useEffect(() => {

        axios.get("http://localhost:8000/cars/year")
            .then((response) => setYear(response.data))
            .catch((error) => console.error(error));

        axios.get("http://localhost:8000/car_brands")
            .then((response) => setMark(response.data))
            .catch((error) => console.error(error));

        axios.get("http://localhost:8000/car_models")
            .then((response) => setModel(response.data))
            .catch((error) => console.error(error));

    }, []);

    return (
        <div className="flex flex-row items-center justify-center bg-white border border-[#1f1f1f] p-4">
            <ul className="grid grid-cols-3 gap-4 px-8 ml-40 mr-60">
                <li className="relative">
                    <label htmlFor="year" className="text-sm font-rubik text-white absolute top-1 left-2 transition-all duration-200 ease-in-out">
                        Year
                    </label>
                    <select value={selectedYear} onChange={handleYearChange} id="year" className="w-full h-16 rounded-md pt-2 pl-10 pr-3 py-2 bg-[#1f1f1f] text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 border-gray-300 transition-all duration-300 ease-in-out">
                        <option value="">Pick year</option>
                            {years.map(year => (
                                <option key={year.id} value={year.name}>{year.Year}</option>
                            ))}
                    </select>
                </li>
                <li className="relative">
                    <label htmlFor="mark" className="text-sm font-rubik text-white  absolute top-1 left-2 transition-all duration-200 ease-in-out">
                        Manufacture
                    </label>
                    <select value={selctedMark} onChange={handleBrandChange} id="mark" className="w-48 h-16 rounded-md pt-2 pl-10 pr-3 py-2 bg-[#1f1f1f] text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 border-gray-300 transition-all duration-300 ease-in-out">
                        <option value="">Pick manafacture</option>
                            {marks.map(mark => (
                                <option key={mark.id} value={mark.name}>{mark.Name} </option>
                            ))}
                    </select>
                </li>
                <li className="relative">
                    <label htmlFor="model" className="text-sm font-rubik text-white  absolute top-1 left-2 transition-all duration-200 ease-in-out">
                        Model
                    </label>
                    <select value={selectedModel} onChange={handleModelChange} id="model" className="w-48 h-16 rounded-md pt-2 pl-10 pr-3 py-2 bg-[#1f1f1f] text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 border-gray-300 transition-all duration-300 ease-in-out">
                        <option value="">Pick model</option>
                            {models.map(model => (
                                <option key={model.id} value={model.name}>{model.Name}</option>
                            ))}
                    </select>
                </li>
            </ul>
        </div>
    )
}