import React from 'react'
import { Box, Card, CardActionArea, CardMedia, Grid, Link, Typography, Chip, Button } from '@mui/material';
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
                    <Box key={product.slug} ml={4} mr={4}>
                        <Typography textAlign="center" color="black" fontSize={22} fontWeight={600}>{product.titulo}</Typography>
                        <Card sx={{ margin: 3 }} className='card-article'>
                            <NextLink legacyBehavior href={`/product/${product.slug}`} passHref>
                                <Link sx={{ textDecoration: "none" }}>
                                    <CardActionArea>
                                        <CardMedia
                                            height={400}
                                            sx={{ borderTopRightRadius: 7, borderTopLeftRadius: 7, minWidth: {xs:300, sm:350} }}
                                            component="img"
                                            image={product.imagen}
                                        >
                                        </CardMedia>
                                    </CardActionArea>
                                    <Box display={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
                                        <Button variant='outlined' sx={{fontSize:22, mt:2, mb:2 , textTransform:"none"}} >${product.precio}</Button>
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