import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, Card, CardMedia, Box, Typography} from "@mui/materials";

export default function MarkList() {

    const[brandList, setBrandList] = useState([]);

    useEffect(() => {
        axios.get('/')
            .then((res) => setBrandList(res.data))
            .catch((error) => console.error(error))
    }, []);

    return(
        <Grid>
            {brandList.map((list) => (
                <Grid>
                    <Card>
                        <CardMedia 
                            component = "img"
                        />
                        <Box>
                            <Typography> {list.Name} </Typography>
                        </Box>
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}