import React from 'react'
import { Box, Card, CardActionArea, CardMedia, Chip, Grid, Link, Typography } from '@mui/material';
import NextLink from "next/link"

const Destacados = () => {
    return (
        <Grid mt={6} display={'flex'} justifyContent={'center'} flexWrap="wrap">
            <Card sx={{margin: 3}}>
                <NextLink legacyBehavior href={""} passHref>
                    <Link sx={{textDecoration: "none"}}>
                        <CardActionArea>
                            <CardMedia
                            height={350}
                            sx={{borderRadius:2,}}
                            component="img"
                            image={"https://firebasestorage.googleapis.com/v0/b/floreria-morabito.appspot.com/o/4b0d8ff9-a3cf-4d57-a98c-4da66b107061.JPG?alt=media&token=77c63c81-518c-435f-b2f4-6d3ece8f23b6"}
                            >

                            </CardMedia>
                        </CardActionArea>
                        <Typography color="black" fontSize={22} m={1} fontWeight={600}>Titulo del producto</Typography>
                        <Typography color="black" fontSize={20} m={1}>$200.000</Typography>
                    </Link>
                </NextLink>
            </Card>
            <Card sx={{margin: 3}}>
                <NextLink legacyBehavior href={""} passHref>
                    <Link sx={{textDecoration: "none"}}>
                        <CardActionArea>
                            <CardMedia
                            height={350}
                            sx={{borderRadius:2,}}
                            component="img"
                            image={"https://firebasestorage.googleapis.com/v0/b/floreria-morabito.appspot.com/o/4b0d8ff9-a3cf-4d57-a98c-4da66b107061.JPG?alt=media&token=77c63c81-518c-435f-b2f4-6d3ece8f23b6"}
                            >

                            </CardMedia>
                        </CardActionArea>
                        <Typography color="black" fontSize={22} m={1} fontWeight={600}>Titulo del producto</Typography>
                        <Typography color="black" fontSize={20} m={1}>$200.000</Typography>
                    </Link>
                </NextLink>
            </Card>
            <Card sx={{margin: 3}}>
                <NextLink legacyBehavior href={""} passHref>
                    <Link sx={{textDecoration: "none"}}>
                        <CardActionArea>
                            <CardMedia
                            height={350}
                            sx={{borderRadius:2,}}
                            component="img"
                            image={"https://firebasestorage.googleapis.com/v0/b/floreria-morabito.appspot.com/o/4b0d8ff9-a3cf-4d57-a98c-4da66b107061.JPG?alt=media&token=77c63c81-518c-435f-b2f4-6d3ece8f23b6"}
                            >

                            </CardMedia>
                        </CardActionArea>
                        <Typography color="black" fontSize={22} m={1} fontWeight={600}>Titulo del producto</Typography>
                        <Typography color="black" fontSize={20} m={1}>$200.000</Typography>
                    </Link>
                </NextLink>
            </Card>
            <Card sx={{margin: 3}}>
                <NextLink legacyBehavior href={""} passHref>
                    <Link sx={{textDecoration: "none"}}>
                        <CardActionArea>
                            <CardMedia
                            height={350}
                            sx={{borderRadius:2,}}
                            component="img"
                            image={"https://firebasestorage.googleapis.com/v0/b/floreria-morabito.appspot.com/o/4b0d8ff9-a3cf-4d57-a98c-4da66b107061.JPG?alt=media&token=77c63c81-518c-435f-b2f4-6d3ece8f23b6"}
                            >

                            </CardMedia>
                        </CardActionArea>
                        <Typography color="black" fontSize={22} m={1} fontWeight={600}>Titulo del producto</Typography>
                        <Typography color="black" fontSize={20} m={1}>$200.000</Typography>
                    </Link>
                </NextLink>
            </Card>
            <Card sx={{margin: 3}}>
                <NextLink legacyBehavior href={""} passHref>
                    <Link sx={{textDecoration: "none"}}>
                        <CardActionArea>
                            <CardMedia
                            height={350}
                            sx={{borderRadius:2,}}
                            component="img"
                            image={"https://firebasestorage.googleapis.com/v0/b/floreria-morabito.appspot.com/o/4b0d8ff9-a3cf-4d57-a98c-4da66b107061.JPG?alt=media&token=77c63c81-518c-435f-b2f4-6d3ece8f23b6"}
                            >

                            </CardMedia>
                        </CardActionArea>
                        <Typography color="black" fontSize={22} m={1} fontWeight={600}>Titulo del producto</Typography>
                        <Typography color="black" fontSize={20} m={1}>$200.000</Typography>
                    </Link>
                </NextLink>
            </Card>
        </Grid>
    )
}

export default Destacados