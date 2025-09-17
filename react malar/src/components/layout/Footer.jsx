
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <Box component="footer" sx={{ textAlign: 'center', py: 2, bgcolor: '#f5f5f5', mt: 4 }}>
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} React Malar. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
