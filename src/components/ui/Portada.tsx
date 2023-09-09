import { Box, Grid, CardMedia } from '@mui/material'



const Portada = () => {

  return (
    <Grid>
      <CardMedia component="img" image='https://firebasestorage.googleapis.com/v0/b/segunda-floreria.appspot.com/o/newPortada.png?alt=media&token=cb0f2760-aa84-42da-acd0-296e09701f25'
      sx={{maxHeight:800}}
      className='animate__animated animate__fadeIn'>
      </CardMedia>
    </Grid>
  )
}

export default Portada