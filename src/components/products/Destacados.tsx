import React from 'react'
import { Card, CardActionArea, CardMedia, Chip, Grid, Link, Typography } from '@mui/material';
import NextLink from "next/link"
import { useContext } from 'react';
import DbContext from '@/context/db/DbContext';
import Box from '@mui/material/Box';

const Destacados = () => {
    const { products } = useContext(DbContext)
    console.log(products.find(product => product.slug === "corona_1"));


    return (
        <Grid mt={6} display={'flex'} justifyContent={'space-evenly'} flexWrap="wrap">
            {products.map(product => (
                <Box key={product.slug}>
                    <Typography textAlign="center" color="black" fontSize={22} fontWeight={600} m={2}>{product.titulo}</Typography>
                    <Card sx={{ margin: 3}} key={product.titulo} className='fadeIn'>
                        <NextLink legacyBehavior href={`/product/${product.slug}`} passHref>
                            <Link sx={{ textDecoration: "none" }}>
                                <CardActionArea>
                                    <CardMedia
                                        height={350}
                                        sx={{ borderTopRightRadius: 7, borderTopLeftRadius:7, minWidth: 300 }}
                                        component="img"
                                        image={product.imagen}
                                    >
                                    </CardMedia>
                                </CardActionArea>
                                <Box display={'flex'} flexDirection={'row'} justifyContent={'space-evenly'}>
                                    <Typography color="black" fontSize={22} fontWeight={600} m={2}>Detalle</Typography>
                                    <Chip sx={{ fontSize: 20, m: 2 }} color='primary' label={`$ ${product.precio}`} />
                                </Box>
                            </Link>
                        </NextLink>
                    </Card>
                </Box>

            ))}
        </Grid>
    )
}

export default Destacados