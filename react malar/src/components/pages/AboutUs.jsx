import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Fade, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LocalHospital from '@mui/icons-material/LocalHospital';
import Security from '@mui/icons-material/Security';
import Healing from '@mui/icons-material/Healing';
import ChildCare from '@mui/icons-material/ChildCare';
import Science from '@mui/icons-material/Science';
import Elderly from '@mui/icons-material/Elderly';
import useMediaQuery from "@mui/material/useMediaQuery";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SchoolIcon from "@mui/icons-material/School";
import PsychologyIcon from "@mui/icons-material/Psychology";
import BuildIcon from "@mui/icons-material/Build";
import GroupsIcon from "@mui/icons-material/Groups";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ConstructionIcon from "@mui/icons-material/Construction";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import Diversity3Icon from '@mui/icons-material/Diversity3';

const About = () => {
  // Dental services content for the section
  const dentalServices = [
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
  ];
  // Services block data and logic
  const services = [
    {
      title: "CRM",
      description:
        "We provide robust CRM solutions to help you manage customer relationships, automate sales processes, and drive business growth with actionable insights.",
      image: '/src/assets/course1.png',
    },
    {
      title: "Mobile Design",
      description:
        "Our mobile design services focus on creating intuitive, engaging, and responsive interfaces that deliver seamless experiences across all devices.",
      image: '/src/assets/course1.png',
    },
    {
      title: "Motion Graphic",
      description:
        "Bring your brand to life with our motion graphic services. We craft dynamic animations and videos that capture attention and communicate your message effectively.",
      image: '/src/assets/course1.png',
    },
    {
      title: "Web Design",
      description:
        "We design visually stunning and user-friendly websites tailored to your brand, ensuring optimal performance and a memorable digital presence.",
      image: '/src/assets/course1.png',
    },
    {
      title: "Development",
      description:
        "Our development team builds scalable, secure, and high-performing web and mobile applications to meet your unique business needs.",
      image: '/src/assets/course1.png',
    },
    {
      title: "SEO",
      description:
        "Boost your online visibility and attract more customers with our comprehensive SEO strategies, including on-page, off-page, and technical optimization.",
      image: '/src/assets/course1.png',
    },
  ];
  // Data-driven Hero Section
  const heroData = {
    title: [
      { text: 'Where Learning', color: '#FFB703' },
      { text: 'Meets Doing.', color: '#100E85' },
    ],
    description: `At Workiy Academy, we offer cutting-edge Generative AI courses designed to equip you with the most in-demand skills in today’s tech world. Our programs are created by industry experts to help you learn key concepts, apply them in practice, and gain real-time project experience. We emphasize hands-on learning, where you work on live projects, solve real-world problems, and build the confidence to apply AI solutions in practical scenarios. With guidance from experienced trainers, you’ll learn how to build and deploy AI-driven applications that meet industry standards. Whether you’re a student, working professional, or beginner, our Generative AI course will help you acquire future-ready skills and stay ahead in the evolving IT landscape.`
    ,   
    image: {
      src: 'https://large-ivory-fala6psajj.edgeone.app/about-us-metaphor-company-inform.png',
      alt: 'AI Brain Visual',
    },
  };
  // Partners carousel logic
  const partners = [
    { src: "https://i.ibb.co/DHDDq4rJ/images.png", alt: "Freshworks" },
    { src: "https://i.ibb.co/b5Df8Z9v/650c9830-9601-11eb-b593-972a7dbc1054-google-939112-1280.jpg", alt: "Google" },
    { src: "https://i.ibb.co/2YcHNgnn/OIP.webp[/img][/url]", alt: "Microsoft" },
    { src: "https://i.ibb.co/hFXzk0cx/phonepe3248.jpg", alt: "PhonePe" },
    { src: "https://i.ibb.co/GQfLyTdj/paypal-logo-transparent-free-png.webp", alt: "PayPal" },
    { src: "https://i.ibb.co/3ysyyQ2F/aaa245759726ab04e968b9bff4981a52.jpg", alt: "TCS" },
    { src: "https://i.ibb.co/p6GqLGgg/infosys-logo-PNG.png", alt: "Infosys" },
    { src: "https://i.ibb.co/G3cXxCV4/Accenture-Logo-Tagline-Slogan.webp", alt: "Accenture" },
    { src: "https://i.ibb.co/FLHCkTHm/VECTOR69-COM-Cognizant-Logo-Download-Free-Vector-CDR-Corel-Draw.webp", alt: "Cognizant" },
    { src: "https://i.ibb.co/G3Gh0ZhR/Hcl-logo-300x296.jpg", alt: "HCL" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", alt: "Amazon" },
    { src: "https://i.ibb.co/DPQhKbN8/download.webphttps://i.ibb.co/LXb8MC08/Swiggy-1697454976634.png", alt: "Swiggy" },
    
  ];
  const [partnerIndex, setPartnerIndex] = useState(0); 
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  // Responsive visibleCount based on screen width
  const [visibleCount, setVisibleCount] = useState(3);
  useEffect(() => {
    function updateVisibleCount() {
      if (window.innerWidth < 600) setVisibleCount(1);
      else if (window.innerWidth < 900) setVisibleCount(2);
      else if (window.innerWidth < 1200) setVisibleCount(3);
      else if (window.innerWidth < 1500) setVisibleCount(4);
      else setVisibleCount(5);
    }
    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const handlePrev = () => {
    setPartnerIndex((prev) => (prev - 1 + partners.length) % partners.length);
  };
  const handleNext = () => {
    setPartnerIndex((prev) => (prev + 1) % partners.length);
  };

  // Animated stats logic
  const [learners, setLearners] = useState(0);
  const [projects, setProjects] = useState(0);
  const [courses, setCourses] = useState(0);

  useEffect(() => {
    let l = 0, p = 0, c = 0;
    const lTarget = 1000, pTarget = 100, cTarget = 20;
    const duration = 1200;
    const steps = 60;
    const lStep = Math.ceil(lTarget / steps);
    const pStep = Math.ceil(pTarget / steps);
    const cStep = Math.ceil(cTarget / steps);
    let count = 0;
    const interval = setInterval(() => {
      count++;
      l = Math.min(l + lStep, lTarget);
      p = Math.min(p + pStep, pTarget);
      c = Math.min(c + cStep, cTarget);
      setLearners(l);
      setProjects(p);
      setCourses(c);
      if (count >= steps) clearInterval(interval);
    }, duration / steps);
    return () => clearInterval(interval);
  }, []);

  const approachData = [
    {
      icon: <SchoolIcon sx={{ color: '#100E85' }}/> ,
      title: "Learn by Doing",
      desc: "Experience hands-on learning with real projects.",
    },
    {
      icon: <PsychologyIcon sx={{ color: '#100E85' }}/> ,
      title: "Blend Theory & Practice",
      desc: "A space to thrive, collaborate, and innovate.",
    },
    {
      icon: <BuildIcon sx={{ color: '#100E85' }}/> ,
      title: "Industry Alignment",
      desc: "Stay updated with skills that meet industry needs.",
    },
    {
      icon: <GroupsIcon sx={{ color: '#100E85' }}/> ,
      title: "Expert Mentorship",
      desc: "Get guidance from experienced professionals.",
    },
    {
      icon: <TrendingUpIcon sx={{ color: '#100E85' }} />,
      title: "Continuous Growth",
      desc: "Develop skills for long-term career success.",
    },
    {
      icon: <SupportAgentIcon sx={{ color: '#100E85' }} />,
      title: "Personal Support",
      desc: "Receive help and feedback at every step.",
    },
    
  ];

  const differentData = [
    {
      icon: <AutoAwesomeIcon  sx={{ color: '#100E85' }}/> ,
      title: "Learning by Building",
      desc: "Gain real skills through hands-on projects that make learning practical and impactful.",
    },
    {
      icon: <PsychologyIcon  sx={{ color: '#100E85' }}/> ,
      title: "Generative AI at the Core",
      desc: "While others talk about AI, we put you ahead with real, practical Generative AI training.",
    },
    {
      icon: <GroupsIcon  sx={{ color: '#100E85' }}/> ,
      title: "Mentors Who've Been There",
      desc: "Learn directly from industry professionals who bring real-world experience into every lesson.",
    },
    {
      icon: <ConstructionIcon  sx={{ color: '#100E85' }}/> ,
      title: "Startup Energy. Personal Attention",
      desc: "We’re young, fast-growing, and adaptive — giving you the focus and care you deserve.",
    },
    {
      icon: <EmojiEventsIcon  sx={{ color: '#100E85' }}/> ,
      title: "Career-Driven Approach",
      desc: "Everything we teach is built with your future in mind, turning skills into real opportunities.",
    },
    {
      icon: <Diversity3Icon sx={{ color: '#100E85' }} />,
      title: "Inclusive Community",
      desc: "We foster a welcoming environment where everyone can thrive, collaborate, and innovate together.",
    },
  ];

  // Mission, Principles, and Values data
  const missionData = [
"Turning learners into future-ready innovators.",
"Fueling skills for today and tomorrow’s challenges.",
"Building strong, hands-on industry expertise.",
"Turning aspirations into thriving, successful careers.",
"Shaping futures with lasting positive impact.",];
  const principlesData = [
"Delivering practical, industry-aligned learning.",
"Building strong foundations for lifelong learning.",
"Bridging education to career success.",
"Nurturing curiosity and continuous growth.",
"Upholding integrity and excellence in every step.",
  ];

  // One-time on-view animation for Services using IntersectionObserver
  const servicesRef = useRef(null);
  const itemRefs = useRef([]);
  const [visibleBoxes, setVisibleBoxes] = useState(() => Array(6).fill(false));

  useEffect(() => {
    if (!itemRefs.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const indexAttr = entry.target.getAttribute('data-index');
          const index = Number(indexAttr);
          if (entry.isIntersecting && !visibleBoxes[index]) {
            setVisibleBoxes((prev) => {
              const next = [...prev];
              next[index] = true;
              return next;
            });
            observer.unobserve(entry.target); // trigger once per box
          }
        });
      },
      { root: null, threshold: 0.25 }
    );
    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);
  const valuesData = [
    "Fostering passion for continuous growth.",
    "Ensuring excellence in every learning step.",
    "Encouraging innovation with real impact.",
    "Valuing and empowering every learner.",
    "Transforming knowledge into meaningful outcomes.",
  ];

  return (
    <Box sx={{ p: { xs: 2, sm: 4 } }}>
      {/* Hero Section (data-driven) */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          gap: { xs: 2, md: 6 },
          mb: { xs: 4, md: 8 },
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
            {heroData.title.map((part, idx) => (
              <span key={idx} style={{ color: part.color }}>
                {part.text}{' '}
              </span>
            ))}
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
            {heroData.description}
          </Typography>
        </Box>
        <Box
          component="img"
          src={heroData.image.src}
          alt={heroData.image.alt}
          sx={{
            flex: 1,
            maxWidth: { xs: '100%', md: 500 },
            borderRadius: 2,
          }}
        />
      </Box>

      {/* Mission, Principles, and Values Section */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" },
          gap: 3,
          mb: { xs: 4, md: 8 },
        }}
      >
  <Box sx={{ p: 2, border: "1px solid #eee", borderRadius: 2, transition: 'all 0.3s', cursor: 'default', '&:hover': { boxShadow: '0 8px 30px rgba(255, 184, 3, 0.38)', borderColor: '#FFB703',color: '#100E85',transform: 'translateY(-4px) scale(1.03)' } }}>
          <Typography variant="h5" sx={{ mb: 1, fontWeight: 'bold', color: '#100E85' }}>
            Our Mission
          </Typography>
          <ul>
            {missionData.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </Box>
  <Box sx={{ p: 2, border: "1px solid #eee", borderRadius: 2, transition: 'all 0.3s', cursor: 'default', '&:hover': { boxShadow: '0 8px 30px rgba(255, 184, 3, 0.38)', borderColor: '#FFB703',color: '#100E85',transform: 'translateY(-4px) scale(1.03)' } }}>
          <Typography variant="h5" sx={{ mb: 1, fontWeight: 'bold', color: '#100E85' }}>
            Our Principles
          </Typography>
          <ul>
            {principlesData.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </Box>
  <Box sx={{ p: 2, border: "1px solid #eee", borderRadius: 2, transition: 'all 0.3s', cursor: 'default', '&:hover': { boxShadow: '0 8px 30px rgba(255,183,3,0.35)', borderColor: '#FFB703', color: '#100E85',transform: 'translateY(-4px) scale(1.03)' } }}>
          <Typography variant="h5" sx={{ mb: 1, fontWeight: 'bold', color: '#100E85' }}>
            Our Values
          </Typography>
          <ul>
            {valuesData.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </Box>
      </Box>

      {/* Approach Section */}
      <Box sx={{ mb: { xs: 4, md: 8 } }}>
        <Typography
          variant="h4"
          sx={{ mb: 3, color: '#FFB703', fontWeight: 'bold', textAlign: 'center', background: 'none', textShadow: 'none', WebkitBackgroundClip: 'unset', WebkitTextFillColor: 'unset' }}
        >
          Our Approach
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" },
            gap: 3,
          }}
        >
          {approachData.map((box, idx) => (
            <Box
              key={idx}
              sx={{
                p: 2,
                border: "1px solid #eee",
                borderRadius: 2,
                textAlign: "center",
                transition: 'all 0.3s',
                cursor: 'default',
                '&:hover': {
                  boxShadow: '0 8px 30px rgba(255,183,3,0.35)',
                  color: '#100E85',
                  borderColor: '#FFB703',
                  transform: 'translateY(-4px) scale(1.03)',
                },
              }}
            >
              {box.icon}
              <Typography variant="h6" sx={{ mt: 1, mb: 1, fontWeight: 'bold', color: '#100E85' }}>
                {box.title}
              </Typography>
              <Typography variant="body2">{box.desc}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Our Dental Services Section */}
      <Box sx={{ mb: { xs: 4, md: 8 } }}>
        <Typography
          variant="h4"
          sx={{ mb: 3, color: '#1976d2', fontWeight: 'bold', textAlign: 'center' }}
        >
          Our Dental Services
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
            gap: 3,
          }}
        >
          {dentalServices.map((service, idx) => (
            <Box
              key={idx}
              sx={{
                p: 2,
                border: '1px solid #eee',
                borderRadius: 2,
                background: 'white',
                boxShadow: '0 4px 15px rgba(25,118,210,0.1)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                '&:hover': {
                  boxShadow: '0 8px 30px rgba(25,118,210,0.35)',
                  borderColor: '#1976d2',
                  transform: 'translateY(-4px) scale(1.03)',
                },
              }}
            >
              <Box sx={{ color: '#1976d2', mb: 2 }}>{service.icon}</Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1976d2', mb: 1 }}>{service.title}</Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>{service.description}</Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {service.features.map((f, i) => (
                  <Box key={i} sx={{ px: 1.5, py: 0.5, background: '#e3f2fd', color: '#1976d2', borderRadius: 1, fontSize: 13 }}>{f}</Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Different Section */}
      <Box sx={{ mb: { xs: 4, md: 8 } }}>
        <Typography
          variant="h4"
          sx={{ mb: 3, color: '#FFB703', fontWeight: 'bold', textAlign: 'center', background: 'none', textShadow: 'none', WebkitBackgroundClip: 'unset', WebkitTextFillColor: 'unset' }}
        >
          What Makes Us Different
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 3,
          }}
        >
          {differentData.map((item, idx) => (
            <Box
              key={idx}
              sx={{
                p: 2,
                border: "1px solid #eee",
                borderRadius: 2,
                transition: 'all 0.3s',
                cursor: 'default',
                '&:hover': {
                  boxShadow: '0 12px 40px 0 rgba(255,183,3,0.35), 0 2px 10px 0 rgba(16,14,133,0.10)',
                  borderColor: '#FFB703',
                  borderTop: '6px solid #FFB703',
                  color: '#100E85',
                  transform: 'translateY(-4px) scale(1.03)',
                },
              }}
            >
              {item.icon}
              <Typography
                variant="h6"
                sx={{ mt: 1, color: '#100E85', fontWeight: 'bold' }}
              >
                {item.title}
              </Typography>
              <Typography variant="body2">{item.desc}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Animated Stats Section */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 6, mb: 6, flexWrap: 'wrap' }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h3" sx={{ color: '#100E85', fontWeight: 'bold' }}>{learners}+</Typography>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Learners</Typography>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h3" sx={{ color: '#100E85', fontWeight: 'bold' }}>{projects}+</Typography>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Real Time Projects</Typography>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h3" sx={{ color: '#100E85', fontWeight: 'bold' }}>{courses}+</Typography>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>GEN AI Courses</Typography>
        </Box>
      </Box>

      {/* Services Section */}
      <Box sx={{ mb: { xs: 4, md: 8 } }}>
        <Typography
          variant="h4"
          sx={{ mb: 3, color: '#FFB703', fontWeight: 'bold', textAlign: 'center', background: 'none', textShadow: 'none', WebkitBackgroundClip: 'unset', WebkitTextFillColor: 'unset' }}
        >
          Our Services
        </Typography>
        <Box
          ref={servicesRef}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            overflow: "hidden",
            position: "relative",
          }}
        >
          {services.map((service, idx) => {
            // Alternating layout: even boxes have image on left, odd boxes on right
            const isImageLeft = idx % 2 === 0;
            const isVisible = visibleBoxes[idx];
            const imageOffset = isVisible ? 0 : (isImageLeft ? -200 : 200);
            const textOffset = isVisible ? 0 : (isImageLeft ? 200 : -200);

            return (
              <Box
                key={idx}
                data-index={idx}
                ref={(el) => (itemRefs.current[idx] = el)}
                sx={{
                  p: { xs: 3, md: 4 },
                  border: "1px solid #eee",
                  borderRadius: 3,
                  background: "rgba(255,255,255,0.7)",
                  backdropFilter: 'blur(12px)',
                  boxShadow: "0 8px 32px 0 rgba(16,14,133,0.10), 0 1.5px 8px 0 rgba(255,183,3,0.10)",
                  width: "100%",
                  minHeight: { xs: "220px", md: "260px" },
                  display: "grid",
                  gridTemplateColumns: isImageLeft 
                    ? { xs: '1fr', md: '300px 1fr' } 
                    : { xs: '1fr', md: '1fr 300px' },
                  alignItems: "center",
                  gap: { xs: 3, md: 6 },
                  opacity: 1,
                }}
              >
                {/* Image: starts from one end and moves to center */}
                <Box
                  sx={{
                    transform: `translateX(${imageOffset}px)`,
                    transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                    display: 'flex',
                    justifyContent: 'center',
                    order: isImageLeft ? 1 : 2,
                    overflow: 'hidden',
                  }}
                >
                  <Box
                    component="img"
                    src={service.image}
                    alt={`${service.title} illustration`}
                    sx={{
                      width: { xs: '80%', md: '100%' },
                      maxWidth: 300,
                      height: { xs: '150px', md: '200px' },
                      borderRadius: 2,
                      objectFit: 'cover',
                    }}
                  />
                </Box>

                {/* Text: starts from opposite end and moves to center */}
                <Box
                  sx={{
                    transform: `translateX(${textOffset}px)`,
                    transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                    order: isImageLeft ? 2 : 1,
                    overflow: 'hidden',
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{ 
                      color: '#100E85', 
                      fontWeight: 'bold',
                      fontSize: { xs: 22, md: 28 },
                      mb: 1.5
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: '#333',
                      lineHeight: 1.8,
                      fontSize: { xs: 15, md: 16 }
                    }}
                  >
                    {service.description}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>



      {/* Partners Section */}
      <Box sx={{ textAlign: "center" }}>
        <Typography
          variant="h4"
          sx={{ mb: 3, color: '#FFB703', fontWeight: 'bold', textAlign: 'center', background: 'none', textShadow: 'none', WebkitBackgroundClip: 'unset', WebkitTextFillColor: 'unset' }}
        >
          Our Hiring Partners
        </Typography>
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            minHeight: 80,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            id="partner-scroll"
            sx={{
              display: 'flex',
              overflowX: 'auto',
              gap: 3,
              scrollBehavior: 'smooth',
              width: '100%',
              scrollbarWidth: 'none', // Firefox
              msOverflowStyle: 'none', // IE/Edge
              '&::-webkit-scrollbar': { display: 'none' }, // Chrome/Safari
            }}
          >
            {partners.map((partner, idx) => (
              <Box
                key={idx}
                sx={{
                  width: 160,
                  minWidth: 160,
                  height: 100,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 2,
                  border: '1px solid #eee',
                  background: '#fff',
                  transition: 'all 0.3s',
                  cursor: 'default',
                  p: 1,
                  m: 0,
                  flex: '0 0 auto',
                  boxSizing: 'border-box',
                  '&:hover': {
                    borderColor: '#FFB703',
                    transform: 'scale(0.9)',
                  },
                }}
              >
                {partner.src ? (
                  <Box
                    component="img"
                    src={partner.src}
                    alt={partner.alt}
                    sx={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                      m: 0,
                    }}
                  />
                ) : (
                  <Typography variant="body2" sx={{ color: '#aaa', fontWeight: 500 }}>
                    {partner.alt}
                  </Typography>
                )}
              </Box>
            ))}
          </Box>
          {/* Arrows only if overflow */}
          <IconButton
            onClick={() => {
              const el = document.getElementById('partner-scroll');
              if (el) el.scrollBy({ left: -150, behavior: 'smooth' });
            }}
            size="large"
            sx={{
              position: 'absolute',
              left: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 2,
              background: '#fff',
              boxShadow: 1,
              display: { xs: 'flex', sm: 'flex' },
              '&:hover': { background: '#FFB703', color: '#100E85' },
              opacity: 0.8,
            }}
            aria-label="Previous"
          >
            <ArrowBackIosNewIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              const el = document.getElementById('partner-scroll');
              if (el) el.scrollBy({ left: 150, behavior: 'smooth' });
            }}
            size="large"
            sx={{
              position: 'absolute',
              right: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 2,
              background: '#fff',
              boxShadow: 1,
              display: { xs: 'flex', sm: 'flex' },
              '&:hover': { background: '#FFB703', color: '#100E85' },
              opacity: 0.8,
            }}
            aria-label="Next"
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default About;