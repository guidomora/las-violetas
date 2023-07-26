
import { Inter } from 'next/font/google'
import MainLayout from '@/components/layout/MainLayout'
import { Box, Typography } from '@mui/material'
import Destacados from '@/components/products/Destacados'
import Portada from '@/components/ui/Portada'
import Nosotros from '@/components/ui/Nosotros'
import Contacto from '@/components/ui/Contacto'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  

  return (
    <>
      <MainLayout title={'Floreria Las Violetas'} pageDescription={''} imageFullUrl={''}>
        <Portada />
        <Box>
          <Nosotros />
        </Box>
        <Box display={'flex'} justifyContent={'center'} mt={8}>
          <Typography color="primary" component="h1" variant='h1' fontSize={37}>Nuestros productos destacados</Typography>
        </Box>
        <Box display={'flex'} justifyContent={'center'} mt={2}>
          <Destacados />
        </Box>
        <Box>
          <Contacto />
        </Box>
      </MainLayout>
    </>
  )
}
