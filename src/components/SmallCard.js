import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import logo from '../logo.svg'; // Importing the logo image

export default function SimplePaper() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'space-around',
        width: '100vw',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 120, 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative', 
        },
      }}
    >
      <Paper elevation={3}>
        <img src={logo} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        <p style={{ position: 'absolute', bottom: 0, left: 0, right: 0, textAlign: 'center', margin: 0 }}>Name 1</p>
      </Paper>
      <Paper elevation={3}>
        <img src={logo} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        <p style={{ position: 'absolute', bottom: 0, left: 0, right: 0, textAlign: 'center', margin: 0 }}>Name 2</p>
      </Paper>
      <Paper elevation={3}>
        <img src={logo} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        <p style={{ position: 'absolute', bottom: 0, left: 0, right: 0, textAlign: 'center', margin: 0 }}>Name 3</p>
      </Paper>
      <Paper elevation={3}>
        <img src={logo} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        <p style={{ position: 'absolute', bottom: 0, left: 0, right: 0, textAlign: 'center', margin: 0 }}>Name 4</p>
      </Paper>
    </Box>
  );
}
