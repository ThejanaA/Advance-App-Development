import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function AdminNav() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: 'rgb(21, 25, 67)' }}>
        <Toolbar>
          <Link to="/admindash" style={{ color: 'white', textDecoration: 'none', marginRight: 'auto' }}>
            <Typography variant="h6" component="div" sx={{ textAlign: 'left', fontFamily: 'Arial', fontStyle: 'italic' }}>
              ADMIN PANEL
            </Typography>
          </Link>
          <IconButton
            edge="end" // Align the icon to the end of the toolbar
            color="inherit"
            aria-label="account"
            onClick={handleMenuOpen}
            sx={{ ml: 2 }} // Adjust margin to add space between the icon and the title
          >
            <AccountCircleIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <Link to="/Profile" style={{ textDecoration: 'none', color: 'inherit' }}>
              <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            </Link>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
            </Link>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
