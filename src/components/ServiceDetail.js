
import React from 'react';
import { Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

const ServiceDetail = ({ service }) => {
  const subtasks = service.subtasks || [];

  return (
    <div>
      <Typography variant="body1" gutterBottom>
        {service.description}
      </Typography>
      {subtasks.length > 0 && (
        <Grid container spacing={3}>
          {subtasks.map((subtask, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia component="img" height="140" image={subtask.image} alt={subtask.title} />
                <CardContent>
                  <Typography variant="h7" component="div">
                    {subtask.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {subtask.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default ServiceDetail;
