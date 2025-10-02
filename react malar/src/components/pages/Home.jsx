import React, { useRef, useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  Avatar,
  Chip,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  LocalHospital,
  Security,
  Phone,
  Email,
  LocationOn,
  Schedule,
  Star,
  Healing,
  ChildCare,
  Elderly,
  Science
} from '@mui/icons-material';

// Content Data
const heroContent = {
  title: "Welcome to Malar Dental",
  subtitle: "Your Smile, Our Passion",
  description: "Experience world-class dental care with cutting-edge technology and compassionate service. We create smiles that inspire confidence and transform lives.",
  ctaText: "Book Appointment"
};

const servicesContent = {
  title: "Our Dental Services",
  subtitle: "Comprehensive Care for Your Oral Health",
  services: [
    {
      icon: <LocalHospital sx={{ fontSize: 40 }} />,
      title: "Cosmetic Dentistry",
      description: "Transform your smile with our advanced cosmetic procedures and treatments.",
      features: ["Teeth Whitening", "Veneers", "Smile Makeover", "Bonding"]
    },
    {
      icon: <Security sx={{ fontSize: 40 }} />,
      title: "Orthodontics",
      description: "Straighten your teeth with modern orthodontic solutions for all ages.",
      features: ["Braces", "Invisalign", "Retainers", "Teen Orthodontics"]
    },
    {
      icon: <Healing sx={{ fontSize: 40 }} />,
      title: "Restorative Dentistry",
      description: "Restore function and aesthetics with crowns, bridges, and dental implants.",
      features: ["Crowns", "Bridges", "Implants", "Fillings"]
    },
    {
      icon: <ChildCare sx={{ fontSize: 40 }} />,
      title: "Pediatric Dentistry",
      description: "Gentle dental care for children, ensuring healthy smiles from an early age.",
      features: ["Sealants", "Fluoride Treatment", "Early Orthodontics", "Child Exams"]
    },
    {
      icon: <Science sx={{ fontSize: 40 }} />,
      title: "Preventive Dentistry",
      description: "Protect your teeth and gums with regular checkups and preventive treatments.",
      features: ["Cleanings", "Exams", "X-rays", "Oral Hygiene"]
    },
    {
      icon: <Elderly sx={{ fontSize: 40 }} />,
      title: "Geriatric Dentistry",
      description: "Specialized care for seniors, focusing on comfort and oral health maintenance.",
      features: ["Dentures", "Oral Cancer Screening", "Senior Hygiene", "Comfort Care"]
    },
    // Add more services here as needed
  ]
};

const aboutContent = {
  title: "Why Choose Malar Dental?",
  subtitle: "Excellence in Every Smile",
  description: "With over 15 years of experience, we combine advanced technology with compassionate care to deliver exceptional dental services.",
  stats: [
    { number: "5000+", label: "Happy Patients" },
    { number: "15+", label: "Years Experience" },
    { number: "98%", label: "Success Rate" },
    { number: "24/7", label: "Emergency Care" }
  ],
  features: [
    {
      title: "Advanced Technology",
      description: "State-of-the-art equipment including digital X-rays, laser dentistry, and 3D imaging.",
      img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Expert Team",
      description: "Highly qualified dentists with continuous training in the latest dental techniques.",
      img: "https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Comfortable Environment",
      description: "Modern, clean facilities designed to make your visit as comfortable as possible.",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Personalized Care",
      description: "Tailored treatment plans that address your unique dental needs and goals.",
      img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
    }
  ]
};

const testimonialsContent = {
  title: "What Our Patients Say",
  subtitle: "Real Stories, Real Results",
  testimonials: [
    {
      name: "Sarah Johnson",
      role: "Business Executive",
      rating: 5,
      text: "The team at Malar Dental transformed my smile completely. The process was comfortable and the results exceeded my expectations."
    },
    {
      name: "Michael Chen",
      role: "Teacher",
      rating: 5,
      text: "Professional, friendly, and incredibly skilled. I've been coming here for years and always receive excellent care."
    },
    {
      name: "Emily Rodriguez",
      role: "Student",
      rating: 5,
      text: "The orthodontic treatment was amazing. My teeth are perfectly aligned now, and the staff made the whole process enjoyable."
    }
  ]
};

const contactContent = {
  title: "Ready to Transform Your Smile?",
  subtitle: "Book Your Appointment Today",
  description: "Take the first step towards a healthier, more confident smile. Our team is ready to provide you with exceptional dental care.",
  contactInfo: [
    { icon: <Phone />, text: "+1 (555) 123-4567", label: "Call Us" },
    { icon: <Email />, text: "info@malardental.com", label: "Email Us" },
    { icon: <LocationOn />, text: "123 Dental Street, Health City", label: "Visit Us" },
    { icon: <Schedule />, text: "Mon-Fri: 8AM-6PM, Sat: 9AM-4PM", label: "Hours" }
  ]
};

// Reusable Styles
const cardStyles = {
  height: '320px',
  border: '1px solid #eee',
  borderRadius: 3,
  cursor: 'pointer',
  backgroundColor: 'white',
  boxShadow: '0 4px 15px rgba(25,118,210,0.1)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    boxShadow: '0 8px 30px rgba(25,118,210,0.35)',
    borderColor: '#1976d2',
    transform: 'translateY(-4px) scale(1.03)',
    '& .service-icon': {
      color: '#1976d2',
      transition: 'color 0.3s ease'
    },
    '& .service-title': {
      color: '#1976d2',
      transition: 'color 0.3s ease'
    }
  }
};

const floatingBoxStyles = {
  position: 'absolute',
  backgroundColor: 'rgba(255,255,255,0.95)',
  borderRadius: 2,
  p: 2,
  boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
  border: '1px solid rgba(25,118,210,0.2)',
  minWidth: '120px'
};

const Home = () => {
  // Animation state for about feature cards
  const [aboutVisible, setAboutVisible] = useState([false, false, false, false]);
  const aboutRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    function handleAboutFeatureScroll() {
      setAboutVisible((prev) =>
        prev.map((v, idx) => {
          const ref = aboutRefs[idx].current;
          if (!ref) return v;
          const rect = ref.getBoundingClientRect();
          return rect.top < window.innerHeight - 60;
        })
      );
    }
    window.addEventListener('scroll', handleAboutFeatureScroll);
    handleAboutFeatureScroll();
    return () => window.removeEventListener('scroll', handleAboutFeatureScroll);
  }, []);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Animation state for service cards
  const [cosmeticVisible, setCosmeticVisible] = useState(false);
  const [orthoVisible, setOrthoVisible] = useState(false);
  const cosmeticRef = useRef(null);
  const orthoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (cosmeticRef.current) {
        const rect = cosmeticRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setCosmeticVisible(true);
        } else {
          setCosmeticVisible(false);
        }
      }
      if (orthoRef.current) {
        const rect = orthoRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setOrthoVisible(true);
        } else {
          setOrthoVisible(false);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Main Home page container */}
  <Box sx={{ maxWidth: '1400px', mx: 'auto', p: '10px', boxSizing: 'border-box' }}>
        {/* Hero Section */}
  <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Typography
                variant="h2"
                sx={{
                  mb: 2,
                  fontSize: { xs: '2.5rem', md: '4rem' },
                  lineHeight: 1.1,
                  '& .blue-text': {
                    color: '#1976d2'
                  },
                  '& .dark-text': {
                    color: '#1a202c'
                  }
                }}
              >
                <span className="dark-text">Your Smile.</span><br />
                <span className="blue-text">Our Passion.</span>
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  color: '#4a5568',
                  lineHeight: 1.6,
                  fontSize: { xs: '1.1rem', md: '1.3rem' }
                }}
              >
                Modern dental care with advanced tools and gentle hands. Experience comfort, quality and exceptional results.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 4 }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: '#1976d2',
                    color: 'white',
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    borderRadius: 3,
                    '&:hover': {
                      backgroundColor: '#1565c0',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 25px rgba(25,118,210,0.3)'
                    },
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  Book Appointment
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    color: '#1976d2',
                    borderColor: '#1976d2',
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    borderRadius: 3,
                    '&:hover': {
                      backgroundColor: '#1976d2',
                      color: 'white',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 25px rgba(25,118,210,0.3)'
                    },
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  Explore Services
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                textAlign: 'center'
              }}
            >
              {/* Main Dental Image (no floating stats boxes) */}
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '600px',
                  margin: '0 auto',
                  borderRadius: 4,
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  '@keyframes slideInFromTop': {
                    '0%': {
                      transform: 'translateY(-100px)',
                      opacity: 0
                    },
                    '100%': {
                      transform: 'translateY(0)',
                      opacity: 1
                    }
                  },
                  animation: 'slideInFromTop 1s ease-out 0.5s both'
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Happy Patient at Malar Dental"
                  style={{
                    width: '100%',
                    height: '600px',
                    objectFit: 'cover',
                    borderRadius: '16px'
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
        {/* ...existing code... other sections ... */}
        {/* Services Section */}
  <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold', color: '#1976d2' }}>
            {servicesContent.title}
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 2, color: '#4a5568' }}>
            {servicesContent.subtitle}
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {servicesContent.services.map((service, idx) => (
              <Grid item xs={12} sm={6} md={4} key={service.title} display="flex" justifyContent="center" alignItems="stretch">
                <Card sx={{ ...cardStyles, width: 400, minWidth: 400, maxWidth: 400, height: 250, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                  <CardContent>
                    <Box className="service-icon" sx={{ mb: 2 }}>{service.icon}</Box>
                    <Typography className="service-title" variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2, color: '#4a5568' }}>
                      {service.description}
                    </Typography>
                    <Box>
                      {service.features.map((feature) => (
                        <Chip key={feature} label={feature} sx={{ mr: 1, mb: 1 }} />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* About Section */}
  <Box sx={{ mt: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold', color: '#1976d2' }}>
            {aboutContent.title}
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 2, color: '#4a5568' }}>
            {aboutContent.subtitle}
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, color: '#4a5568' }}>
            {aboutContent.description}
          </Typography>
          <Grid container spacing={6} justifyContent="center" alignItems="stretch" sx={{ width: '100%' }}>
            {aboutContent.features.map((feature, idx) => (
              <Grid item xs={12} sm={6} md={3} key={feature.title} display="flex" alignItems="stretch" sx={{ width: '100%' }}>
                <Card
                  ref={aboutRefs[idx]}
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    boxShadow: '0 8px 32px rgba(25,118,210,0.18)',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    minHeight: '200px',
                    height: '100%',
                    width: '100%',
                    maxWidth: 'none',
                    opacity: aboutVisible[idx] ? 1 : 0,
                    transform: aboutVisible[idx] ? 'translateY(0)' : 'translateY(40px)',
                    transition: 'box-shadow 0.3s, opacity 0.7s, transform 0.7s',
                    '&:hover': {
                      boxShadow: '0 16px 48px rgba(25,118,210,0.28)',
                      transform: aboutVisible[idx] ? 'scale(1.04)' : 'translateY(40px)'
                    }
                  }}
                >
                  <Box sx={{ minWidth: '140px', display: 'flex', justifyContent: 'center', alignItems: 'center', mr: 3 }}>
                    <img
                      src={feature.img}
                      alt={feature.title}
                      style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: '50%', boxShadow: '0 2px 8px rgba(25,118,210,0.10)' }}
                    />
                  </Box>
                  <CardContent sx={{ textAlign: 'left', p: 0, flex: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#4a5568' }}>
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Testimonials Section */}
  <Box sx={{ mt: 10 }}>
          <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold', color: '#1976d2' }}>
            {testimonialsContent.title}
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 2, color: '#4a5568' }}>
            {testimonialsContent.subtitle}
          </Typography>
          <Grid container spacing={4}>
            {testimonialsContent.testimonials.map((testimonial) => (
              <Grid item xs={12} md={4} key={testimonial.name}>
                <Card sx={{ p: 2, borderRadius: 3, boxShadow: '0 4px 15px rgba(25,118,210,0.08)' }}>
                  <CardContent>
                    <Typography variant="body1" sx={{ mb: 2, color: '#4a5568' }}>
                      "{testimonial.text}"
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Avatar sx={{ bgcolor: '#1976d2', color: 'white' }}>{testimonial.name[0]}</Avatar>
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>{testimonial.name}</Typography>
                        <Typography variant="caption" sx={{ color: '#4a5568' }}>{testimonial.role}</Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Contact Section */}
  <Box sx={{ mt: 10, mb: 10 }}>
          <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold', color: '#1976d2' }}>
            {contactContent.title}
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 2, color: '#4a5568' }}>
            {contactContent.subtitle}
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, color: '#4a5568' }}>
            {contactContent.description}
          </Typography>
          <Grid container spacing={4}>
            {contactContent.contactInfo.map((info) => (
              <Grid item xs={12} sm={6} md={3} key={info.label}>
                <Card sx={{ p: 2, borderRadius: 3, boxShadow: '0 4px 15px rgba(25,118,210,0.08)' }}>
                  <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    {info.icon}
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>{info.label}</Typography>
                      <Typography variant="body2" sx={{ color: '#4a5568' }}>{info.text}</Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};
export default Home;
