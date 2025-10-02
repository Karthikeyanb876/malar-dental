// src/components/pages/cardStyles.js

const cardStyles = {
  height: '320px',
  border: '1px solid #eee',
  borderRadius: 3,
  cursor: 'pointer',
  backgroundColor: 'white',
  boxShadow: '0 4px 15px rgba(25,118,210,0.1)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'stretch',
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

export default cardStyles;
