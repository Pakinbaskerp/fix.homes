import * as React from 'react';
import { Box, Typography, Grid, CssBaseline, Container } from '@mui/material';

const AboutSection = () => {
  return (
    <Box sx={{ backgroundColor: 'gry',py: 5, p: 5 }}>
      <CssBaseline />
      <Container>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={4} sm={4}>
            <Typography variant="h4" sx={{ color: 'rgb(244, 210, 82)' }}>
              25
            </Typography>
            <Typography variant="h6" sx={{ color: 'black' }}>
              Years in business
            </Typography>
          </Grid>
          {/* <Grid item xs={6} sm={3}>
            <Typography variant="h4" sx={{ color: 'rgb(244, 210, 82)' }}>
              5+
            </Typography>
            <Typography variant="h6" sx={{ color: 'black' }}>
              Technology Exposure
            </Typography>
          </Grid> */}
          <Grid item xs={4} sm={4}>
            <Typography variant="h4" sx={{ color: 'rgb(244, 210, 82)' }}>
              100+
            </Typography>
            <Typography variant="h6" sx={{ color: 'black' }}>
              Clients
            </Typography>
          </Grid>
          <Grid item xs={4} sm={4}>
            <Typography variant="h4" sx={{ color: 'rgb(244, 210, 82)' }}>
              170+
            </Typography>
            <Typography variant="h6" sx={{ color: 'black' }}>
              Completed Projects
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;
