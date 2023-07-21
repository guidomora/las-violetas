import { Box, Grid } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import portada from "../../../public/images/port.png"


const Portada = () => {
  return (
    <Grid>
      <Image src={portada} alt={''} style={{width:"100vw", height:500}}/>
    </Grid>
  )
}

export default Portada