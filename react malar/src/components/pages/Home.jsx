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
    }
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
      description: "State-of-the-art equipment including digital X-rays, laser dentistry, and 3D imaging."
    },
    {
      title: "Expert Team",
      description: "Highly qualified dentists with continuous training in the latest dental techniques."
    },
    {
      title: "Comfortable Environment",
      description: "Modern, clean facilities designed to make your visit as comfortable as possible."
    },
    {
      title: "Personalized Care",
      description: "Tailored treatment plans that address your unique dental needs and goals."
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
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#f8fafc',
          overflow: 'hidden'
        }}
      >
        {/* Background Decorative Elements */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, rgba(25,118,210,0.05) 0%, rgba(66,165,245,0.05) 100%)',
            zIndex: 1
          }}
        />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  '@keyframes fadeInUp': {
                    '0%': {
                      transform: 'translateY(30px)',
                      opacity: 0
                    },
                    '100%': {
                      transform: 'translateY(0)',
                      opacity: 1
                    }
                  },
                  animation: 'fadeInUp 1s ease-out 0.2s both'
                }}
              >
                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    fontWeight: 'bold',
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
                {/* Main Dental Image */}
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
                  
                  {/* Floating Stats Boxes */}
                  <Box
                    sx={{
                      ...floatingBoxStyles,
                      top: '8%',
                      left: '-8%',
                      '@keyframes slideInFromLeft1': {
                        '0%': {
                          transform: 'translateX(-150px)',
                          opacity: 0
                        },
                        '100%': {
                          transform: 'translateX(0)',
                          opacity: 1
                        }
                      },
                      '@keyframes float1': {
                        '0%, 100%': { transform: 'translateY(0px)' },
                        '50%': { transform: 'translateY(-10px)' }
                      },
                      animation: 'slideInFromLeft1 0.8s ease-out 1.2s both, float1 3s ease-in-out infinite 2s'
                    }}
                  >
                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                      9.8/10
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#666' }}>
                      Patient Rating
                    </Typography>
                  </Box>
                  
                  <Box
                    sx={{
                      ...floatingBoxStyles,
                      top: '25%',
                      right: '-12%',
                      '@keyframes slideInFromRight1': {
                        '0%': {
                          transform: 'translateX(150px)',
                          opacity: 0
                        },
                        '100%': {
                          transform: 'translateX(0)',
                          opacity: 1
                        }
                      },
                      '@keyframes float2': {
                        '0%, 100%': { transform: 'translateY(0px)' },
                        '50%': { transform: 'translateY(-8px)' }
                      },
                      animation: 'slideInFromRight1 0.8s ease-out 1.5s both, float2 3.5s ease-in-out infinite 2.3s'
                    }}
                  >
                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                      20+
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#666' }}>
                      Years Exp.
                    </Typography>
                  </Box>
                  
                  <Box
                    sx={{
                      ...floatingBoxStyles,
                      bottom: '15%',
                      left: '-8%',
                      '@keyframes slideInFromLeft2': {
                        '0%': {
                          transform: 'translateX(-150px)',
                          opacity: 0
                        },
                        '100%': {
                          transform: 'translateX(0)',
                          opacity: 1
                        }
                      },
                      '@keyframes float3': {
                        '0%, 100%': { transform: 'translateY(0px)' },
                        '50%': { transform: 'translateY(-12px)' }
                      },
                      animation: 'slideInFromLeft2 0.8s ease-out 1.8s both, float3 4s ease-in-out infinite 2.6s'
                    }}
                  >
                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                      1.5k+
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#666' }}>
                      Happy Patients
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box sx={{ py: 8, backgroundColor: '#f8f9fa' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: 'bold',
                color: '#1976d2',
                mb: 2
              }}
            >
              {servicesContent.title}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: '#666',
                maxWidth: 600,
                mx: 'auto'
              }}
            >
              {servicesContent.subtitle}
            </Typography>
          </Box>
          
          {/* Services Banner Image */}
          <Box sx={{ mb: 6, textAlign: 'center' }}>
            <img
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Dental Services"
              style={{
                width: '100%',
                maxWidth: '800px',
                height: '300px',
                objectFit: 'cover',
                borderRadius: '16px',
                border: '4px solid #1976d2',
                boxShadow: '0 10px 30px rgba(25,118,210,0.2)'
              }}
            />
          </Box>
          
          <Grid container spacing={4} justifyContent="center">
            {servicesContent.services.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  ref={index === 0 ? cosmeticRef : index === 1 ? orthoRef : null}
                  sx={{
                    ...cardStyles,
                    ...(index === 0
                      ? {
                          transform: cosmeticVisible ? 'translateX(0)' : 'translateX(-100vw)',
                          opacity: cosmeticVisible ? 1 : 0,
                          transition: 'transform 1s cubic-bezier(0.4, 0, 0.2, 1), opacity 1s',
                        }
                      : index === 1
                      ? {
                          transform: orthoVisible ? 'translateX(0)' : 'translateX(100vw)',
                          opacity: orthoVisible ? 1 : 0,
                          transition: 'transform 1s cubic-bezier(0.4, 0, 0.2, 1), opacity 1s',
                        }
                      : {}),
                  }}
                >
                  <CardContent sx={{ p: 3, textAlign: 'center', height: '100%' }}>
                    <Box>
                      <Box className="service-icon" sx={{ color: '#1976d2', mb: 2, transition: 'all 0.3s ease' }}>
                        {service.icon}
                      </Box>
                      <Typography className="service-title" variant="h5" component="h3" sx={{ fontWeight: 'bold', mb: 2, color: '#1976d2', transition: 'all 0.3s ease' }}>
                        {service.title}
                      </Typography>
                      <Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.6, fontSize: '0.95rem' }}>
                        {service.description}
                      </Typography>
                    </Box>
                    <Box>
                      {service.features.map((feature, featureIndex) => (
                        <Chip
                          key={featureIndex}
                          label={feature}
                          size="small"
                          sx={{
                            mr: 0.5,
                            mb: 0.5,
                            backgroundColor: '#e3f2fd',
                            color: '#1976d2',
                            fontSize: '0.75rem',
                            '&:hover': {
                              backgroundColor: '#1976d2',
                              color: 'white',
                              transform: 'scale(1.05)'
                            },
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* About Section */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          {/* About Banner Image */}
          <Box sx={{ mb: 6, textAlign: 'center' }}>
            <img
              src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Dental Team"
              style={{
                width: '100%',
                maxWidth: '600px',
                height: '250px',
                objectFit: 'cover',
                borderRadius: '16px',
                border: '4px solid #1976d2',
                boxShadow: '0 10px 30px rgba(25,118,210,0.2)'
              }}
            />
          </Box>
          
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box>
                <Typography
                  variant="h3"
                  component="h2"
                  sx={{
                    fontWeight: 'bold',
                    color: '#1976d2',
                    mb: 2
                  }}
                >
                  {aboutContent.title}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: '#42a5f5',
                    mb: 3
                  }}
                >
                  {aboutContent.subtitle}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 4,
                    color: '#666',
                    lineHeight: 1.8,
                    fontSize: '1.1rem'
                  }}
                >
                  {aboutContent.description}
                </Typography>
                
                <Grid container spacing={2}>
                  {aboutContent.stats.map((stat, index) => (
                    <Grid item xs={6} key={index}>
                      <Box sx={{ textAlign: 'center' }}>
                        <Typography
                          variant="h4"
                          sx={{
                            fontWeight: 'bold',
                            color: '#1976d2'
                          }}
                        >
                          {stat.number}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: '#666' }}
                        >
                          {stat.label}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Box>
                {aboutContent.features.map((feature, index) => (
                  <Box
                    key={index}
                    sx={{
                      mb: 3,
                      p: 3,
                      backgroundColor: 'white',
                      borderRadius: 3,
                      border: '2px solid #1976d2',
                      borderLeft: '6px solid #1976d2',
                      boxShadow: '0 4px 15px rgba(25,118,210,0.1)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        transform: 'translateY(-4px) scale(1.03)',
                        boxShadow: '0 6px 20px rgba(25,118,210,0.15)'
                      }
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 'bold',
                        color: '#1976d2',
                        mb: 1
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: '#666' }}
                    >
                      {feature.description}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ py: 8, backgroundColor: '#f8f9fa' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: 'bold',
                color: '#1976d2',
                mb: 2
              }}
            >
              {testimonialsContent.title}
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: '#666' }}
            >
              {testimonialsContent.subtitle}
            </Typography>
          </Box>
          
          <Grid container spacing={4} justifyContent="center">
            {testimonialsContent.testimonials.map((testimonial, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    p: 3,
                    textAlign: 'center',
                    backgroundColor: 'white',
                    border: '2px solid #1976d2',
                    borderRadius: 3,
                    boxShadow: '0 4px 20px rgba(25,118,210,0.1)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-4px) scale(1.03)',
                      boxShadow: '0 8px 30px rgba(25,118,210,0.2)'
                    }
                  }}
                >
                  <Avatar
                    sx={{
                      width: 80,
                      height: 80,
                      mx: 'auto',
                      mb: 2,
                      backgroundColor: '#1976d2'
                    }}
                  >
                    {testimonial.name.charAt(0)}
                  </Avatar>
                  <Box sx={{ mb: 2 }}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} sx={{ color: '#ffc107' }} />
                    ))}
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                      fontStyle: 'italic',
                      color: '#666',
                      lineHeight: 1.6
                    }}
                  >
                    "{testimonial.text}"
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 'bold',
                      color: '#1976d2'
                    }}
                  >
                    {testimonial.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: '#999' }}
                  >
                    {testimonial.role}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box
        sx={{
          py: 8,
          background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
          color: 'white'
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: 'bold',
                mb: 2
              }}
            >
              {contactContent.title}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 3,
                color: '#e3f2fd'
              }}
            >
              {contactContent.subtitle}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                maxWidth: 600,
                mx: 'auto',
                color: '#f5f5f5'
              }}
            >
              {contactContent.description}
            </Typography>
          </Box>
          
          <Grid container spacing={4} sx={{ mb: 4 }}>
            {contactContent.contactInfo.map((info, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box sx={{ textAlign: 'center' }}>
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255,255,255,0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2
                    }}
                  >
                    {info.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 'bold',
                      mb: 1
                    }}
                  >
                    {info.label}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#e3f2fd' }}>
                    {info.text}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
          
          <Box sx={{ textAlign: 'center' }}>
            <Button
    X          variant="contained"
              size="large"
              sx={{
                backgroundColor: 'white',
                color: '#1976d2',
                px: 6,
                py: 2,
                fontSize: '1.2rem',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: '#f5f5f5',
                  transform: 'translateY(-4px) scale(1.03)',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
                },
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              Book Your Appointment Now
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};
export default Home;