import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const Nosotros = () => {
    return (
        <Grid sx={{ backgroundColor: "secondary.main" }} mt={-1} mb={4} p={5}>
            <Box>
                <Typography variant='h4' component="h3" color="primary" mb={3} textAlign={'center'}>Productos florales de la más alta calidad y diseño.<br/>
                    Nuestro compromiso nos ha convertido en una opción confiable para acompañarlos en momentos de profundo significado.
                </Typography>
                <Typography variant='h5' component="h4" color="primary" textAlign={'center'}>
                    Permita que nuestras flores expresen lo que las palabras no pueden en estos momentos difíciles.
                </Typography>
            </Box>
        </Grid>
    )
}

export default Nosotros

//
// Ofrecemos productos florales de la más alta calidad y diseño.
// Nuestra pasión por la artesanía floral y nuestro compromiso con la sensibilidad y el respeto hacia nuestros clientes
// nos han convertido en una opción confiable para acompañarlos en momentos de profundo significado.
// Permita que nuestras flores expresen lo que las palabras no pueden en estos momentos difíciles.