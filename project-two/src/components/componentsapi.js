import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Card, CardMedia, Grid, Box, Typography, Button } from "@mui/material";
import  { useParams } from 'react-router-dom';

export default function ComponentApi(){

    const [components, setComponents] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/ComponentApi/${id}`)
            .then(res => setComponents(res.data))
            .catch(err => console.error(err))
    }, [id]);

    return(
       <Grid container spacing={2}  className="pb-32">
            {components.map((component) => (
                <Grid item xs={12} sm={6} md={4} key={component.id} className="pb-1">
                    <Card className="w-full flex mx-4 my-8 dark:bg-white shadow rounded-md ml-8" sx={{ maxHeight: 1500}} >
                        <CardMedia 
                            component="img"
                            src={component.image}
                            className="static w-full h-full object-cover"
                        />
                        <Box className="px-6 py-4 w-full">
                            <Typography variant="h6"> Name: {component.name}</Typography>
                            <Typography variant="h6"> Price: ${component.price} </Typography>
                            <Button> Buy </Button>
                        </Box>
                    </Card> 
                </Grid>
            ))}    
       </Grid>
    )
}