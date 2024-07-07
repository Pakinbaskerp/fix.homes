import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import Logo from '../FIXs.png';

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'rgb(244, 210, 82)' }}>
      <Toolbar sx={{ justifyContent: 'center' }}>
        <img src={Logo} alt="Logo" style={{ width: 200, height: 80 }} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
