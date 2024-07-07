// import * as React from 'react';
// import { CssBaseline, BottomNavigation, BottomNavigationAction, Paper, Box } from '@mui/material';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import CallIcon from '@mui/icons-material/Call';
// import HomeIcon from '@mui/icons-material/Home';
// import GalleryIcon from '@mui/icons-material/PhotoLibrary';
// import ServiceIcon from '@mui/icons-material/RoomService';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';

// const theme = createTheme({
//   components: {
//     MuiBottomNavigationAction: {
//       styleOverrides: {
//         root: {
//           color: 'gray',
//           '&.Mui-selected': {
//             color: 'black',
//           },
//         },
//       },
//     },
//   },
// });

// export default function FixedBottomNavigation() {
//   const [value, setValue] = React.useState(0);

//   return (
//     <ThemeProvider theme={theme}>
//       <Box sx={{ pb: 7 }}>
//         <CssBaseline />
//         <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: 'rgb(244, 210, 82)' }} elevation={3}>
//           <BottomNavigation
//             showLabels
//             value={value}
//             onChange={(event, newValue) => {
//               setValue(newValue);
//             }}
//             sx={{ backgroundColor: 'rgb(244, 210, 82)' }}
//           >
//             <BottomNavigationAction label="WhatsApp" icon={<WhatsAppIcon sx={{ fontSize: 28 }} />} />
//             <BottomNavigationAction label="Call" icon={<CallIcon sx={{ fontSize: 28 }} />} />
//             <BottomNavigationAction label="Home" icon={<HomeIcon sx={{ fontSize: 28 }} />} />
//             <BottomNavigationAction label="Gallery" icon={<GalleryIcon sx={{ fontSize: 28 }} />} />
//             <BottomNavigationAction label="Service" icon={<ServiceIcon sx={{ fontSize: 28 }} />} />
//           </BottomNavigation>
//         </Paper>
//       </Box>
//     </ThemeProvider>
//   );
// }

// import * as React from 'react';
// import { CssBaseline, BottomNavigation, BottomNavigationAction, Paper, Box } from '@mui/material';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import CallIcon from '@mui/icons-material/Call';
// import HomeIcon from '@mui/icons-material/Home';
// import GalleryIcon from '@mui/icons-material/PhotoLibrary';
// import ServiceIcon from '@mui/icons-material/RoomService';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';

// const theme = createTheme({
//   components: {
//     MuiBottomNavigationAction: {
//       styleOverrides: {
//         root: {
//           color: 'white',
//           '&.Mui-selected': {
//             color: 'rgb(244, 210, 82)',
//           },
//         },
//       },
//     },
//   },
// });

// export default function FixedBottomNavigation() {
//   const [value, setValue] = React.useState(0);

//   return (
//     <ThemeProvider theme={theme}>
//       <Box sx={{ pb: 7 }}>
//         <CssBaseline />
//         <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: 'black' }} elevation={3}>
//           <BottomNavigation
//             showLabels
//             value={value}
//             onChange={(event, newValue) => {
//               setValue(newValue);
//             }}
//             sx={{ backgroundColor: 'black' }}
//           >
//             <BottomNavigationAction label="WhatsApp" icon={<WhatsAppIcon sx={{ fontSize: 28 }} />} />
//             <BottomNavigationAction label="Call" icon={<CallIcon sx={{ fontSize: 28 }} />} />
//             <BottomNavigationAction label="Home" icon={<HomeIcon sx={{ fontSize: 28 }} />} />
//             <BottomNavigationAction label="Gallery" icon={<GalleryIcon sx={{ fontSize: 28 }} />} />
//             <BottomNavigationAction label="Service" icon={<ServiceIcon sx={{ fontSize: 28 }} />} />
//           </BottomNavigation>
//         </Paper>
//       </Box>
//     </ThemeProvider>
//   );
// }
import * as React from 'react';
import { CssBaseline, BottomNavigation, BottomNavigationAction, Paper, Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CallIcon from '@mui/icons-material/Call';
import HomeIcon from '@mui/icons-material/Home';
import GalleryIcon from '@mui/icons-material/PhotoLibrary';
import ServiceIcon from '@mui/icons-material/RoomService';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const theme = createTheme({
  components: {
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: {
          color: 'white',  // Default color for icons and labels
          '&.Mui-selected': {
            backgroundColor: 'rgb(244, 210, 82)',  // Background color for selected item
            color: 'black',  // Color for selected icon and label
          },
        },
      },
    },
  },
});

export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(2); // Set the initial state to the index of the Home icon

  React.useEffect(() => {
    setValue(2); // Reset to the Home icon index on every render
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = '+ 91 7358360090'; // Replace with the desired phone number
    const message = 'Hello, I need some information'; // Replace with the desired message
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleCallClick = () => {
    const phoneNumber = '+91 7358360090'; // Replace with the desired phone number
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ pb: 7 }}>
        <CssBaseline />
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: 'black' }} elevation={3}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            sx={{ backgroundColor: 'black' }}
          >
            <BottomNavigationAction label="WhatsApp" icon={<WhatsAppIcon sx={{ fontSize: 28 }} />} onClick={handleWhatsAppClick} />
            <BottomNavigationAction label="Call" icon={<CallIcon sx={{ fontSize: 28 }} />} onClick={handleCallClick} />
            <BottomNavigationAction label="Home" icon={<HomeIcon sx={{ fontSize: 28 }} />} />
            <BottomNavigationAction label="Gallery" icon={<GalleryIcon sx={{ fontSize: 28 }} />} />
            <BottomNavigationAction label="Service" icon={<ServiceIcon sx={{ fontSize: 28 }} />} />
          </BottomNavigation>
        </Paper>
      </Box>
    </ThemeProvider>
  );
}
