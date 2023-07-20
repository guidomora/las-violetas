
import { Inter } from 'next/font/google'
import MainLayout from '@/components/layout/MainLayout'
import { Box, Typography } from '@mui/material'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <MainLayout title={'Floreria Las Violetas'} pageDescription={''} imageFullUrl={''}>
        <Box display={'flex'} justifyContent={'center'} mt={4}>
          <Typography color="primary" component="h1" variant='h1' fontSize={30}>Nuestros productos destacados</Typography>
        </Box>
      </MainLayout>

    </>
  )
}
