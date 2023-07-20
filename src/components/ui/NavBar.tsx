
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
  return (
    <Box >
      <AppBar position="static" color='secondary'>
        <Toolbar>
          <Box>
            <IconButton
              size="large"
              edge="start"
              color="primary"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box flex={1} />
          <Box display={'flex'} justifyContent={'center'}>
            <Button variant="text" sx={{ ml: 3 }}>
              <Typography variant="h6" fontSize={17} component="h2" sx={{ textTransform: "capitalize" }} color="primary">
                Coronas
              </Typography>
            </Button>
            <Button variant="text" sx={{ ml: 3 }}>
              <Typography variant="h6" fontSize={17} component="h2" sx={{ textTransform: "capitalize" }} color="primary">
                Bouquets
              </Typography>
            </Button>
            <Button variant="text" sx={{ ml: 3 }}>
              <Typography variant="h6" fontSize={17} component="h2" sx={{ textTransform: "capitalize" }} color="primary">
                Arreglos florales
              </Typography>
            </Button>
          </Box>
          <Box flex={1} />
          <Box>
            <Typography>wpp</Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar