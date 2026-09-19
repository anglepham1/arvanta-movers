import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MobileBottomNav from '../components/MobileBottomNav';
import { openWhatsApp } from '../utils/whatsapp';

export default function AppLayout() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box component="main" sx={{ flex: 1 }}>
        <Outlet />
      </Box>
      <Footer />
      <MobileBottomNav />
      <Fab
        color="primary"
        onClick={() => openWhatsApp()}
        sx={{
          position: 'fixed',
          bottom: { xs: 72, md: 24 },
          right: 16,
          bgcolor: '#25D366',
          '&:hover': { bgcolor: '#1DA851' },
        }}
      >
        <WhatsAppIcon />
      </Fab>
    </Box>
  );
}
