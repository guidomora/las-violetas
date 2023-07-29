import MainLayout from '@/components/layout/MainLayout'
import React from 'react'
import { Box, Typography, Button, Link } from '@mui/material';
import NextLink from "next/link"

const Error = () => {
  return (
    <MainLayout title='Pagina no encontrada' pageDescription='Error en la busqueda' imageFullUrl={''}>
        <Box pt={6} display={'flex'} justifyContent={'center'} flexDirection={'column'} alignItems={'center'}>
            <Typography textAlign="center" component="h1" variant='h2' color="primary">Ups... Parece que te perdiste!</Typography>
            <Button variant="outlined" sx={{mt: 5, textTransform:"none", fontSize:20}}>
                <NextLink legacyBehavior href={"/"} passHref>
                    <Link sx={{textDecoration:"none"}}>
                        Ir a la página principal
                    </Link>
                </NextLink>
            </Button>
        </Box>
    </MainLayout>
  )
}

export default Error