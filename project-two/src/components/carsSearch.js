import React, { useState, useEffect } from "react";
import axios from "axios";
import { CardMedia, Box, Card, Typography } from "@mui/material";

export default function CarSearchPage(){

    const[search, setSearch] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/auto/brand?search=${search}`)
            .then((res) => setSearch(res.data))
            .catch(err => console.error(err));
    })

    return(
        <Box>
            {search.map((cars) => (
                <Box>
                    <CardMedia
                
                    />

                    <Card>
                        <Typography> {cars.BrandName} </Typography>
                        <Typography> {cars.Name} </Typography>
                        <Typography> {cars.Years} </Typography>
                        <Typography> {cars.Price} </Typography>
                    </Card>
                </Box>
            ))}
        </Box>
    )
}