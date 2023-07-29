import MainLayout from '@/components/layout/MainLayout'
import { Products } from '@/interfaces/products'
import { Box, Button, Card, CardMedia, Grid, Link, Typography } from '@mui/material'
import { NextPage } from 'next'
import React from 'react'
import { GetStaticPaths } from 'next'
import { useContext } from 'react';
import DbContext from '@/context/db/DbContext'
import { GetStaticProps } from 'next'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import NextLink from 'next/link';
import { firestore } from 'firebase-admin'
import getProductBySlug from '@/utils/getProductBySlug'



interface Props {
    slug: string
}


const ProductPage: NextPage<Props> = ({ slug }) => {
    const { products } = useContext(DbContext)
    const product = products.filter(product => product.slug == `${slug}`)





    return (
        <MainLayout title={``} pageDescription={''} imageFullUrl={''}>
            <Grid>
                {product.map(producto =>
                    <Grid mt={7} sx={{display:'flex', flexDirection:{xs: 'column', sm:"column", md:"row"}}} p={5} key={producto.titulo}>
                        <Card key={producto.titulo}>
                            <CardMedia
                                component="img"
                                sx={{maxHeight:600}}
                                image={`${producto.imagen}`}
                            >
                            </CardMedia>
                        </Card>
                        <Box m={2} maxWidth={600}>
                            <Box>
                                <Typography component="h2" variant='h4' color="primary">{producto.titulo}</Typography>
                                <Typography mt={3} fontSize={18}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, molestias. Atque animi distinctio aperiam ullam, nulla,
                                    exercitationem, earum excepturi quam nostrum quia iste incidunt ea maiores
                                    quibusdam aliquam repellendus placeat.
                                </Typography>
                                <Typography mt={3} fontSize={18}> Las flores pueden variar según la estación del año. Consultar disponibilidad
                                de variedades y colores.
                                </Typography>
                                <Typography fontSize={25} mt={3} fontWeight="bolder">${producto.precio}</Typography>
                            </Box>
                            <Box mt={3} sx={{display:'flex', justifyContent:{xs:"center", sm: "center", md:"unset"}}}>
                                <NextLink passHref legacyBehavior href={"https://wa.me/541169402036"}>
                                    <Link display={'flex'} alignItems={'center'} sx={{ textDecoration: "none" }} target='blank'>
                                        <Button sx={{ textTransform: "capitalize", fontSize: 20 }} variant='outlined'>
                                            <Typography component="h6" variant='h4' ml={1} sx={{ color: "black" }}>
                                                Contactar
                                            </Typography>
                                            <WhatsAppIcon sx={{ ml: 1, color: "#39d05c", fontSize: 35 }} />
                                        </Button>
                                    </Link>
                                </NextLink>
                            </Box>
                        </Box>
                    </Grid>

                )}

            </Grid>
        </MainLayout>
    )
}


export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const slugs = await getProductBySlug()

    return {
        paths: slugs.map(slug => ({
            params:{slug}
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
                permanent: true
            }
        }
    }
    return {
        props: {
            slug
        },
        revalidate: 86400
    }
}


export default ProductPage