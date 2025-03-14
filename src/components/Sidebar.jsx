import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box, Typography, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import CategoryIcon from '@mui/icons-material/Category';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const drawerWidth = 240;
const collapsedWidth = 65;

function Sidebar({ open, onToggle }) {
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsHovered(true);
    onToggle(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false);
      onToggle(false);
    }, 300); // 300ms delay before closing
  };

  return (
    <Drawer
      variant="permanent"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        width: open ? drawerWidth : collapsedWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: open ? drawerWidth : collapsedWidth,
          boxSizing: 'border-box',
          backgroundColor: 'primary.dark',
          color: 'white',
          transition: 'width 0.2s ease-in-out',
          borderRight: 'none',
          boxShadow: 'none',
        },
      }}
    >
      <Box sx={{ 
        p: 2, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
      }}>
        {open && <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>E-Shop</Typography>}
        <IconButton 
          sx={{ 
            color: 'white',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            }
          }}
        >
          {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </Box>
      <List>
        <ListItem 
          button 
          component={Link} 
          to="/" 
          sx={{ '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}
        >
          <ListItemIcon sx={{ color: 'white', minWidth: 40 }}>
            <HomeIcon />
          </ListItemIcon>
          {open && <ListItemText primary="Home" sx={{ '& .MuiListItemText-primary': { fontWeight: 500 } }} />}
        </ListItem>
        <ListItem button sx={{ '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}>
          <ListItemIcon sx={{ color: 'white', minWidth: 40 }}>
            <ShoppingBagIcon />
          </ListItemIcon>
          {open && <ListItemText primary="Products" sx={{ '& .MuiListItemText-primary': { fontWeight: 500 } }} />}
        </ListItem>
        <ListItem button sx={{ '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}>
          <ListItemIcon sx={{ color: 'white', minWidth: 40 }}>
            <CategoryIcon />
          </ListItemIcon>
          {open && <ListItemText primary="Categories" sx={{ '& .MuiListItemText-primary': { fontWeight: 500 } }} />}
        </ListItem>
        <ListItem button sx={{ '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}>
          <ListItemIcon sx={{ color: 'white', minWidth: 40 }}>
            <LocalOfferIcon />
          </ListItemIcon>
          {open && <ListItemText primary="Deals" sx={{ '& .MuiListItemText-primary': { fontWeight: 500 } }} />}
        </ListItem>
        <ListItem button sx={{ '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}>
          <ListItemIcon sx={{ color: 'white', minWidth: 40 }}>
            <SearchIcon />
          </ListItemIcon>
          {open && <ListItemText primary="Search" sx={{ '& .MuiListItemText-primary': { fontWeight: 500 } }} />}
        </ListItem>
        <ListItem 
          button 
          component={Link} 
          to="/cart" 
          sx={{ '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}
        >
          <ListItemIcon sx={{ color: 'white', minWidth: 40 }}>
            <ShoppingCartIcon />
          </ListItemIcon>
          {open && <ListItemText primary="Cart" sx={{ '& .MuiListItemText-primary': { fontWeight: 500 } }} />}
        </ListItem>
      </List>
    </Drawer>
  );
}

export default Sidebar; 