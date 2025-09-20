import React from "react";
import {
  Box,
  Typography,
  Paper,
  Button,
  Card,
  Avatar,
  Grid,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import StarIcon from "@mui/icons-material/Star";

// Assets
import Logo from "../../assets/malar-dental-logo.png";
import Braces from "../../assets/braces.png";
import Whitening from "../../assets/whitening.jpg";
import TeethCleaning from "../../assets/teeth_cleaning.png";
import SmileBefore from "../../assets/smile_before.jpg";
import SmileAfter from "../../assets/smile_after.jpg";

// Styled Components
const CircleLogo = styled("img")({
  width: 140,
  height: 140,
  borderRadius: "50%",
  objectFit: "cover",
  border: "4px solid #7b7b7b99",
  boxShadow: "0 4px 12px rgb(0 0 0 / 69%)",
  marginBottom: "1rem",
});

const HoverCard = styled(Card)(({ theme }) => ({
  textAlign: "center",
  padding: theme.spacing(2),
  transition: "all 0.3s ease",
  cursor: "pointer",
  border: "1px solid #eee",
  borderRadius: 3,
  background: "#fff",
  "&:hover": {
    transform: "translateY(-6px) scale(1.03)",
    boxShadow: "0 12px 40px rgba(255,183,3,0.35), 0 2px 10px rgba(16,14,133,0.1)",
    borderColor: "#FFB703",
    color: "rgba(16, 14, 133, 1)",
  },
}));

const AboutUs = () => {
  const teamMembers = [
    { name: "Dr. Anitha", role: "Chief Dentist", img: "https://via.placeholder.com/150" },
    { name: "Dr. Rajesh", role: "Orthodontist", img: "https://via.placeholder.com/150" },
    { name: "Dr. Meena", role: "Hygienist", img: "https://via.placeholder.com/150" },
  ];

  const testimonials = [
    { name: "Priya", review: "Amazing care and friendly staff. My smile has never been better!" },
    { name: "Karthik", review: "Professional service with modern equipment. Highly recommend!" },
    { name: "Divya", review: "Best dental experience in Chennai. Comfortable and caring team." },
  ];

  return (
    <Box sx={{ bgcolor: "#f5f9ff", py: 4 }}>

      {/* Hero Section */}
      <Box sx={{ textAlign: "center", py: 6, bgcolor: "#1976d2", color: "white" }}>
        <CircleLogo src={Logo} alt="Malar Dental Logo" />
      
        <Typography variant="h6" sx={{ mt: 1 }}>
          Your bright smile is our priority. Advanced dental care with a personal touch.
        </Typography>
      </Box>

      {/* About Us */}
      <Box sx={{ maxWidth: 1000, mx: "auto", textAlign: "center", py: 6 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          At Malar Dental Clinic, located in Red Hills, Chennai, we have been providing trusted and advanced dental care for years.
          Our team uses state-of-the-art technology to ensure your oral health and a confident smile.
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {[
            "Trusted Dental Care in Chennai",
            "Advanced Technology for Every Smile",
            "Experienced & Caring Team",
            "Focus on Comfort & Prevention",
          ].map((point, idx) => (
            <Grid item xs={12} sm={6} key={idx}>
              <Paper
                sx={{
                  p: 2,
                  bgcolor: "white",
                  border: "1px solid #eee",
                  borderRadius: 3,
                  transition: "all 0.3s ease",
                  cursor: "default",
                  "&:hover": {
                    transform: "translateY(-4px) scale(1.02)",
                    boxShadow: "0 8px 30px rgba(255,183,3,0.35), 0 2px 10px rgba(16,14,133,0.1)",
                    borderColor: "#FFB703",
                    color: "#100E85",
                  },
                }}
                elevation={2}
              >
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  ✅ {point}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Services */}
      <Box sx={{ maxWidth: 1000, mx: "auto", py: 6 }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
          Our Services
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {[
            { img: TeethCleaning, title: "Teeth Cleaning" },
            { img: Braces, title: "Braces & Alignment" },
            { img: Whitening, title: "Teeth Whitening" },
          ].map((service, idx) => (
            <Grid item xs={12} sm={4} key={idx}>
              <HoverCard>
                <Box
                  component="img"
                  src={service.img}
                  alt={service.title}
                  sx={{ width: 80, height: 80, mx: "auto", mb: 2 }}
                />
                <Typography variant="h6">{service.title}</Typography>
              </HoverCard>
            </Grid>
          ))}
        </Grid>
      </Box>
      {/* Before/After Section */}
      <Box sx={{ maxWidth: 1000, mx: "auto", py: 6 }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
          Smile Transformations
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, flexWrap: "wrap" }}>
          <Box component="img" src={SmileBefore} alt="Before" sx={{ width: 300, borderRadius: 2, boxShadow: 3 }} />
          <Box component="img" src={SmileAfter} alt="After" sx={{ width: 300, borderRadius: 2, boxShadow: 3 }} />
        </Box>
      </Box>
      {/* Why Choose Us */}
      <Box sx={{ maxWidth: 1000, mx: "auto", py: 6, textAlign: "center" }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Why Choose Us
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {[
            { icon: "🦷", text: "Advanced Dental Technology" },
            { icon: "💖", text: "Personalized Care" },
            { icon: "⏱️", text: "Flexible Appointment Hours" },
            { icon: "🏆", text: "Experienced Professionals" },
          ].map((item, idx) => (
            <Grid item xs={12} sm={6} md={3} key={idx}>
              <Paper sx={{
                p: 3,
                borderRadius: 3,
                cursor: "pointer",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-6px) scale(1.05)",
                  boxShadow: "0 12px 40px rgba(255,183,3,0.35), 0 2px 10px rgba(16,14,133,0.1)",
                  color: "#100E85",
                },
              }}>
                <Typography variant="h3">{item.icon}</Typography>
                <Typography variant="h6" fontWeight="bold" mt={2}>{item.text}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Team */}
      <Box sx={{ maxWidth: 1000, mx: "auto", py: 6 }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
          Meet Our Team
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {teamMembers.map((member, idx) => (
            <Grid item xs={12} sm={4} key={idx}>
              <HoverCard>
                <Avatar
                  src={member.img}
                  alt={member.name}
                  sx={{ width: 100, height: 100, mx: "auto", mb: 2 }}
                />
                <Typography variant="h6">{member.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {member.role}
                </Typography>
              </HoverCard>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Before & After Gallery */}
      <Box sx={{ maxWidth: 1000, mx: "auto", py: 6 }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
          Before & After
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {[
            { before: "https://via.placeholder.com/300", after: "https://via.placeholder.com/300/00FF00" },
            { before: "https://via.placeholder.com/300", after: "https://via.placeholder.com/300/00FF00" },
            { before: "https://via.placeholder.com/300", after: "https://via.placeholder.com/300/00FF00" },
          ].map((item, idx) => (
            <Grid item xs={12} sm={4} key={idx}>
              <Box sx={{ position: "relative", "&:hover img:first-of-type": { opacity: 0 } }}>
                <img src={item.before} alt="before" style={{ width: "100%", borderRadius: "8px", transition: "all 0.5s" }} />
                <img src={item.after} alt="after" style={{ width: "100%", borderRadius: "8px", position: "absolute", top: 0, left: 0, transition: "all 0.5s", opacity: 1 }} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Achievements */}
      <Box sx={{ bgcolor: "#e0f7fa", py: 6, textAlign: "center" }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Our Achievements
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {[
            { number: 5000, label: "Smiles Created" },
            { number: 15, label: "Years of Experience" },
            { number: 100, label: "Professional Team" },
            { number: 2000, label: "Happy Patients" },
          ].map((item, idx) => (
            <Grid item xs={6} sm={3} key={idx}>
              <Typography variant="h3" fontWeight="bold" color="#1976d2">
                {item.number}+
              </Typography>
              <Typography variant="subtitle1">{item.label}</Typography>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Dental Tips */}
      <Box sx={{ maxWidth: 1000, mx: "auto", py: 6 }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
          Dental Tips
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {[
            "Brush twice a day for healthy teeth.",
            "Visit your dentist every 6 months.",
            "Avoid sugary snacks to prevent cavities.",
            "Use fluoride toothpaste for stronger enamel.",
          ].map((tip, idx) => (
            <Grid item xs={12} sm={6} key={idx}>
              <Paper sx={{ p: 3, borderRadius: 3, cursor: "pointer", transition: "all 0.3s ease", "&:hover": { transform: "translateY(-4px) scale(1.02)", boxShadow: "0 8px 30px rgba(255,183,3,0.35)" } }}>
                <Typography variant="body1">💡 {tip}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Testimonials */}
      <Box sx={{ maxWidth: 1000, mx: "auto", py: 6 }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
          What Our Patients Say
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {testimonials.map((t, idx) => (
            <Grid item xs={12} sm={4} key={idx}>
              <HoverCard>
                <Typography variant="body1" gutterBottom sx={{ fontStyle: "italic" }}>
                  "{t.review}"
                </Typography>
                <Typography variant="subtitle2" fontWeight="bold" color="primary">
                  – {t.name}
                </Typography>
                <Box sx={{ mt: 1 }}>
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} sx={{ color: "#FFD700", fontSize: 20 }} />
                  ))}
                </Box>
              </HoverCard>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Contact */}
      <Box sx={{ maxWidth: 1000, mx: "auto", py: 6 }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
          Find Us
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <iframe
              title="clinic-location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.256281877639!2d80.157033!3d13.142376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5264e6213a67cd%3A0xa5a1e20e2a8b6d5a!2sMalar%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1695213421!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", border: "1px solid #eee", borderRadius: 3, transition: "all 0.3s", cursor: "default", "&:hover": { boxShadow: "0 12px 40px rgba(255,183,3,0.35), 0 2px 10px rgba(16,14,133,0.1)", borderColor: "#FFB703", transform: "translateY(-4px) scale(1.03)", color: "#100E85" } }} elevation={3}>
              <Typography variant="h6" gutterBottom>
                Contact Us
              </Typography>
              <Typography sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <LocationOnIcon sx={{ mr: 1, color: "#1976d2" }} /> 16/1 By-Pass Road, Red Hills, Chennai, TN 600052
              </Typography>
              <Typography sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <PhoneIcon sx={{ mr: 1, color: "#1976d2" }} /> +91 98765 43210
              </Typography>
              <Typography sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <WhatsAppIcon sx={{ mr: 1, color: "#25D366" }} /> +91 98765 43210
              </Typography>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#1a54c4",
                    transform: "scale(1.03)",
                  },
                }}
              >
                Book an Appointment
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Box>

    </Box>
  );
};

export default AboutUs;
