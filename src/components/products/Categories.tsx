import React from 'react'
import { Box, Card, CardActionArea, CardMedia, Grid, Link, Typography, Chip } from '@mui/material';
import NextLink from "next/link"
import { useContext } from 'react';
import DbContext from '@/context/db/DbContext';


interface Props {
    categoria: string
    title: string
}


const Categories = ({ categoria, title }: Props) => {
    const { products } = useContext(DbContext)


    const categories = products.filter(product => product.categoria === `${categoria}`)



    return (
        <Grid>
            <Box display={'flex'} justifyContent={'center'} pt={8}>
                <Typography color="primary" component="h1" variant='h1' fontSize={37}>{title}</Typography>
            </Box>
            <Grid mt={6} display={'flex'} justifyContent={'space-evenly'} flexWrap="wrap">
                {categories.map(product => (
                    <Box key={product.slug}>
                        <Typography textAlign="center" color="black" fontSize={22} fontWeight={600} m={2}>{product.titulo}</Typography>
                        <Card sx={{ margin: 3 }} key={product.titulo} className='fadeIn'>
                            <NextLink legacyBehavior href={`/product/${product.slug}`} passHref>
                                <Link sx={{ textDecoration: "none" }}>
                                    <CardActionArea>
                                        <CardMedia
                                            height={350}
                                            sx={{ borderTopRightRadius: 7, borderTopLeftRadius: 7, minWidth: 300 }}
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
        </Grid>

    )
}

export default Categories