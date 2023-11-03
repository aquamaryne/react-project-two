import React, {useState, useEffect } from 'react';
import { Card } from "@mui/material";
import { CardMedia } from "@mui/material";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";

const CarsComponents = () => {
    const[carsComponent, setCarsComponent] = useState([]);
    const[limit, setLimit] = useState(6);

    const handleLimit = () => {
        setLimit(limit + 6);
    };

    useEffect(() => {
        axios.get('http://localhost:8000/carComponents')
            .then((res) => setCarsComponent(res.data))
            .catch((error) => console.error(error))
    });

    return(
        <div>
            <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                { carsComponent.slice(0, limit).map((components) => (
                    <Link key={components.id} to={`/componentsapi/${components.id}`}>
                        <Card key={components.id} sx={{ display: "flex", width: "470px", m: "20px", transitionDuration: '300ms' }} className="hover:rounded-lg hover:shadow-lg hover:transform hover:transition-all hover:scale-105 ease-in-out border border-gray-900 hover:border-[#42b883] hover:bg-[#181717] hover:text-[#fdf6e3] mx-4">                        
                            <CardMedia 
                                component="img"
                                src={components.image}
                                sx={{ width: 156 }}
                            />    
                            <Box sx={{ p: 2 }}>
                                <Typography variant="h6"> Name: {components.name}</Typography>
                                <Typography variant="h6"> Price: ${components.price} </Typography>
                            </Box>                        
                        </Card>
                    </Link>
                ))}
            </Box>
            {limit < carsComponent.length && (
                <button 
                    className="flex ml-[55rem] rounded-md mb-4 border border-[#1f1f1f] bg-[#42b883] hover:bg-[#42b883d3] px-2 py-2"
                    onClick={handleLimit}> 
                    Load More 
                </button>
            )}
        </div>
    )
}

export default CarsComponents;