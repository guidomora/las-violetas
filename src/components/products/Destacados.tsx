import React from 'react'
import { Card, CardActionArea, CardMedia, Chip, Grid, Link, Typography } from '@mui/material';
import NextLink from "next/link"
import { useContext } from 'react';
import DbContext from '@/context/db/DbContext';

const Destacados = () => {
    const { products } = useContext(DbContext)
    console.log(products.find(product => product.slug === "corona_1"));
    

    return (
        <Grid mt={6} display={'flex'} justifyContent={'space-evenly'} flexWrap="wrap">
            {products.map(product =>(
                <Card sx={{ margin: 3 }} key={product.titulo} className='fadeIn'>
                    <NextLink legacyBehavior href={""} passHref>
                        <Link sx={{ textDecoration: "none" }}>
                            <CardActionArea>
                                <CardMedia
                                    height={350}
                                    sx={{ borderRadius: 2, minWidth:300}}
                                    component="img"
                                    image={product.imagen}
                                >
                                </CardMedia>
                            </CardActionArea>
                            <Typography color="black" fontSize={22} m={1} fontWeight={600}>{product.titulo}</Typography>
                            <Typography color="black" fontSize={20} m={1} fontWeight={600}>${product.precio}</Typography>
                        </Link>
                    </NextLink>
                </Card>
            ))}
        </Grid>
    )
}

export default Destacados