import React from "react";
import axios from "axios";
import { Card, CardMedia, Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export default function ShowRoom(){

    const[showCars, setShowCars] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/show_room')
            .then((res) => setShowCars(res.data.slice(0, 12)))
            .catch((err) => console.error(err))   
    }, []);

    return(
        <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
            { showCars.map((cars) => (
                <Link key={cars.id} to={`/cars/${cars.id}`}>
                    <Card key={cars.id} sx={{ display: "flex", width: "470px", m: "20px", transitionDuration: '300ms' }} className="hover:rounded-lg hover:shadow-lg hover:transform hover:transition-all hover:scale-105 ease-in-out border border-gray-900 hover:border-[#42b883] hover:bg-[#181717] hover:text-[#fdf6e3] mx-4">
                        <CardMedia 
                            component="img"
                            src={cars.Images}
                            sx={{ width: 156 }}
                        />
                        <Box sx={{ p: 2 }}>
                            <Typography variant="h6">Manufacture: {cars.BrandName }</Typography>
                            <Typography variant="h6">Model: {cars.Name }</Typography>
                            <Typography variant="h7">Price:${cars.Price }</Typography>
                            <Typography variant="h7"> Year: {cars.Year }</Typography>
                        </Box>
                    </Card>
                </Link>
            ))}
        </Box>
    )
}