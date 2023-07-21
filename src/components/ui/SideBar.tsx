import { Drawer, Box, Typography, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { useContext } from 'react';
import { NavContext } from '@/context/NavContext';




const SideBar = () => {
    const { sideMenuOpen, closeSideMenu } = useContext(NavContext)


    return (
        <Drawer
            anchor='left'
            open={sideMenuOpen}
            onClose={closeSideMenu}
        >
            <Box sx={{ width: 250}}>

            </Box>
            <Box sx={{ padding: "5px, 10px", backgroundColor: "secondary.main" }}>
                <Typography variant='h4' sx={{color: "primary.main"}}> Menu</Typography>
            </Box>
            <List sx={{backgroundColor: "secondary.main"}}>
            <ListItem component={"button"} 
                sx={{
                    backgroundColor: "inherit",
                    border: "none", 
                    cursor: "pointer",
                    color: "primary.main"
                }}>
                    <ListItemText>Coronas</ListItemText>
                </ListItem>
                <Divider />
                <ListItem component={"button"} 
                sx={{
                    backgroundColor: "inherit",
                    border: "none", 
                    cursor: "pointer",
                    color: "primary.main"
                }}>
                    <ListItemText>Bouquets</ListItemText>
                </ListItem>
                <Divider />
                <ListItem component={"button"} 
                sx={{
                    backgroundColor: "inherit",
                    border: "none", 
                    cursor: "pointer",
                    color: "primary.main"
                }}>
                    <ListItemText>Otros Arreglos</ListItemText>
                </ListItem>
            </List>
            <Divider />
        </Drawer>
    )
}

export default SideBar