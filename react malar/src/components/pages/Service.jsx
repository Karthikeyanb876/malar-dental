import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Service = () => {
  return (
    <Box id="service" sx={{ p: 4, textAlign: 'center' }}>
      <Typography variant="h3" gutterBottom>Our Services</Typography>
      <Typography variant="body1">
        We offer a range of web development services including React app development, UI/UX design, and rapid prototyping with Vite and Material UI.
      </Typography>
    </Box>
  );
};

export default Service;
