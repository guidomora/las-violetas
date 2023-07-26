import React from 'react'
import { Box, Card, CardActionArea, CardMedia, Grid, Link, Typography } from '@mui/material';
import NextLink from "next/link"
import { useContext } from 'react';
import DbContext from '@/context/db/DbContext';


interface Props {
    categoria: string
    title:string
}


const Categories = ({categoria, title}:Props) => {
    const { products } = useContext(DbContext)


    const categories = products.filter(product => product.categoria === `${categoria}`)

    
    
    return (
        <Grid>
         <Box display={'flex'} justifyContent={'center'} pt={8}>
          <Typography color="primary" component="h1" variant='h1' fontSize={37}>{title}</Typography>
        </Box>
        <Grid mt={6} display={'flex'} justifyContent={'space-evenly'} flexWrap="wrap">
            {categories.map(product =>(
                <Card sx={{ margin: 3, maxHeight:450 }} key={product.titulo}>
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
        </Grid>
        
    )
}

export default Categories