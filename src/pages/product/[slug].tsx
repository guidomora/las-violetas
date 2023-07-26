import MainLayout from '@/components/layout/MainLayout'
import { Products } from '@/interfaces/products'
import { Box, Button, Card, CardMedia, Grid, Typography } from '@mui/material'
import { NextPage } from 'next'
import React from 'react'
import { GetStaticPaths } from 'next'
import { useContext } from 'react';
import DbContext from '@/context/db/DbContext'
import { GetStaticProps } from 'next'


interface Props {
    slug:Products
}

const ProductPage: NextPage<Props> = ({ slug }) => {
    const { products } = useContext(DbContext)
    const product = products.filter(product => product.slug === `${slug}`)
    

    return (
        <MainLayout title={``} pageDescription={''} imageFullUrl={''}>
            <Grid mt={7} display={'flex'} flexDirection={'row'} p={5}>
                <Card>
                    <CardMedia
                        component="img"
                        image={"https://firebasestorage.googleapis.com/v0/b/segunda-floreria.appspot.com/o/bou90.jpg?alt=media&token=c520b370-9006-4e5a-9337-5145e84fb5ec"}
                    >
                    </CardMedia>
                </Card>
                <Box m={2} maxWidth={600}>
                    <Box>
                        <Typography component="h2" variant='h4' color="primary">Titulo del producto</Typography>
                        <Typography mt={3} fontSize={18}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, molestias. Atque animi distinctio aperiam ullam, nulla,
                            exercitationem, earum excepturi quam nostrum quia iste incidunt ea maiores
                            quibusdam aliquam repellendus placeat.
                        </Typography>
                        <Typography fontSize={20} mt={3} fontWeight="bolder">$90.000</Typography>
                    </Box>
                    <Box mt={3}>
                        <Button sx={{ textTransform: "capitalize", fontSize: 20 }} variant='outlined'>
                            Contactar
                        </Button>
                    </Box>
                </Box>
            </Grid>
        </MainLayout>
    )
}


export const getStaticPaths: GetStaticPaths = async (ctx) => {
    
    const { products } = useContext(DbContext)
    const slug = products.map(product => product.slug)
    return {
        paths: slug.filter(slug => ({
            params: slug === slug
        })),
        fallback: "blocking"
    }
}




export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { slug } = params as { slug: string }  

    if (!slug) {
        return {
            redirect: {
                destination: "/",
                permanent: false
            }
        }
    }  
    return {
        props: {
            slug
        },
        revalidate:86400
    }
}


export default ProductPage