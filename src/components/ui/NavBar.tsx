
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { useContext } from 'react';
import { NavContext } from '@/context/Nav/NavContext';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import NextLink from 'next/link';
import { Link } from '@mui/material';

const NavBar = () => {
  const { openSideMenu } = useContext(NavContext)


  return (
    <Box>
      <AppBar position="static" color='secondary'>
        <Toolbar sx={{ display: 'flex', alignItems: 'center' }}>
          <Box>
            <Button
              variant='outlined'
              color="primary"
              sx={{ textTransform: "capitalize" }}
              onClick={openSideMenu}
            >
              <MenuIcon sx={{ mr: 1 }} />
              Categorías
            </Button>
          </Box>
          <Box flex={1} />
          <Box display={'flex'} justifyContent={'center'}>
            <Typography component="h1" variant='h4' color="primary">Las Violetas</Typography>
          </Box>
          <Box flex={1} />
          <Box>
            <Button>
              <NextLink legacyBehavior href={"https://wa.me/541169402036"} passHref>
                <Link target="blank" sx={{display: 'flex', alignItems: 'center'}}>
                  <WhatsAppIcon fontSize="large" color='primary'/>
                </Link>
              </NextLink>
            </Button>

          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar