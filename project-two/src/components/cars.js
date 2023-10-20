import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Card, CardMedia, Grid, Box, Typography } from "@mui/material";
import  { useParams } from 'react-router-dom';

export default function CarsPage(){

    const [cars, setCars] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/cars/${id}`)
            .then(res => setCars(res.data))
            .catch(err => console.error(err))
    }, [id]);

    return(
       <Grid container spacing={2}  className="pb-32">
            {cars.map((car) => (
                <Grid item xs={12} sm={6} md={4} key={car.id} className="pb-1">
                    <Card className="w-full flex mx-4 my-8 dark:bg-white shadow rounded-md ml-8" sx={{ maxHeight: 1500}} >
                        <CardMedia 
                            component="img"
                            src={car.Images}
                            className="static w-full h-full object-cover"
                        />
                        <Box className="px-6 py-4 w-full">
                            <Typography className="font-bold text-xl mb-2">Manufacture: {car.BrandName} </Typography>
                            <Typography className="font-bold text-lg mb-2">Model: {car.Name} </Typography>
                            <Typography className="text-gray-600 text-base mb-2">Year: {car.Year} </Typography>
                            <Typography className="text-gray-700 font-bold">Price: ${car.Price} </Typography>
                            <Box sx={{ mt: '1rem' }}>
                                <Typography> Car review: </Typography> 
                                <Typography> Review about car (text) </Typography> 
                            </Box>
                        </Box>
                    </Card> 
                </Grid>
            ))}    
       </Grid>
    )
}