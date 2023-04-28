import React, { useState, useEffect} from "react";
import { Card } from "@mui/material";
import { CardMedia } from "@mui/material";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Filter from "./filter";
import axios from "axios";

export default function UsedCars(){

    const [usedCars, setUsedCars] = useState([]);
    const [displayLimit, setDisplayLimit] = useState(6);

    const handleLoadMore = () => {
        setDisplayLimit(displayLimit + 6);
    };

    useEffect(() => {
        axios.get('http://localhost:8000/used_cars')
            .then((res) => setUsedCars(res.data))
            .catch((error) => console.error(error));
    }, []);

    const handleFilterChange = (selectedYear, selectedBrand, selectedModel) => {
        let filteredCars = usedCars;
    
        if (selectedYear !== "") {
          filteredCars = filteredCars.filter((cars) => cars.Year === selectedYear);
        }
    
        if (selectedBrand !== "") {
          filteredCars = filteredCars.filter(
            (cars) => cars.BrandName === selectedBrand
          );
        }
    
        if (selectedModel !== "") {
          filteredCars = filteredCars.filter(
            (cars) => cars.Name === selectedModel
          );
        }
    
        setUsedCars(filteredCars);
    };

    return(  
        <div>
            <Filter onFilterChange={handleFilterChange}/>
            <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                { usedCars.slice(0, displayLimit).map((cars) => (
                    <Link key={cars.id} to={`/cars/${cars.id}`}>
                        <Card key={cars.id} sx={{ display: "flex", width: "470px", m: "20px", transitionDuration: '300ms' }} className="hover:rounded-lg hover:shadow-lg hover:transform hover:transition-all hover:scale-105 ease-in-out border border-gray-900 hover:border-[#42b883] hover:bg-[#181717] hover:text-[#fdf6e3] mx-4">                        
                            <CardMedia 
                                component="img"
                                src={cars.Images}
                                sx={{ width: 156 }}
                            />    
                            <Box sx={{ p: 2 }}>
                                <Typography variant="h6"> Manafacture: {cars.BrandName}</Typography>
                                <Typography variant="h6"> Model: {cars.Name} </Typography>
                                <Typography variant="h7"> Year: {cars.Year}</Typography>
                                <Typography variant="h7"> Price: ${cars.Price} </Typography>
                            </Box>                        
                        </Card>
                    </Link>
                ))}
            </Box>
            {displayLimit < usedCars.length && (
                <button 
                    className="flex ml-[55rem] rounded-md mb-4 border border-[#1f1f1f] bg-[#42b883] hover:bg-[#42b883d3] px-2 py-2"
                    onClick={handleLoadMore}> 
                    Load More 
                </button>
            )}
        </div>
    )
}