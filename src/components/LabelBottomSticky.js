import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import CallIcon from '@mui/icons-material/Call';
import HomeIcon from '@mui/icons-material/Home';
import GalleryIcon from '@mui/icons-material/PhotoLibrary';
import ServiceIcon from '@mui/icons-material/RoomService';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ pb: 7 }}>
      <CssBaseline />
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="WhatsApp" icon={<WhatsAppIcon sx={{ fontSize: 28 }} />} />
          <BottomNavigationAction label="Call" icon={<CallIcon sx={{ fontSize: 28 }} />} />
          <BottomNavigationAction label="Home" icon={<HomeIcon sx={{ fontSize: 28 }} />} />
          <BottomNavigationAction label="Gallery" icon={<GalleryIcon sx={{ fontSize: 28 }} />} />
          <BottomNavigationAction label="Service" icon={<ServiceIcon sx={{ fontSize: 28 }} />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
