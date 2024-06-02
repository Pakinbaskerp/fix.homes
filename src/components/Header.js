import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import Logo from '../logo.svg'

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#9c27b0' }}>
      <Toolbar>
        <img src={Logo} alt="Logo" style={{ width: 40, marginRight: 10 }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;