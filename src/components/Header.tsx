import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import BuildIcon from '@mui/icons-material/Build';
import InfoIcon from '@mui/icons-material/Info';
import MapIcon from '@mui/icons-material/Map';
import StarIcon from '@mui/icons-material/Star';
import PhoneIcon from '@mui/icons-material/Phone';
import HelpIcon from '@mui/icons-material/Help';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { openWhatsApp } from '../utils/whatsapp';

const navItems = [
  { key: 'home', path: '/', icon: <HomeIcon /> },
  { key: 'services', path: '/services', icon: <BuildIcon /> },
  { key: 'about', path: '/about', icon: <InfoIcon /> },
  { key: 'areas', path: '/areas', icon: <MapIcon /> },
  { key: 'testimonials', path: '/testimonials', icon: <StarIcon /> },
  { key: 'contact', path: '/contact', icon: <PhoneIcon /> },
  { key: 'faq', path: '/faq', icon: <HelpIcon /> },
];

export default function Header() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleLangChange = (_: React.MouseEvent<HTMLElement>, newLang: string | null) => {
    if (newLang) {
      i18n.changeLanguage(newLang);
      localStorage.setItem('arvanta-lang', newLang);
    }
  };

  return (
    <>
      <AppBar position="sticky" color="inherit" sx={{ bgcolor: 'background.paper' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }} onClick={() => navigate('/')}>
            <Box component="img" src="/logo.webp" alt="Arvanta Movers" sx={{ height: 36 }} />
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main', lineHeight: 1.1, fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                Arvanta Movers
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary', lineHeight: 1, display: { xs: 'none', sm: 'block' } }}>
                {t('hero.tagline')}
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5, alignItems: 'center' }}>
            {navItems.map((item) => (
              <Button
                key={item.key}
                size="small"
                onClick={() => navigate(item.path)}
                sx={{
                  color: location.pathname === item.path ? 'primary.main' : 'text.secondary',
                  fontWeight: location.pathname === item.path ? 700 : 500,
                }}
              >
                {t(`nav.${item.key}`)}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <ToggleButtonGroup
              value={i18n.language}
              exclusive
              onChange={handleLangChange}
              size="small"
              sx={{ height: 32 }}
            >
              <ToggleButton value="en" sx={{ px: 1, py: 0.25, fontSize: '0.75rem' }}>EN</ToggleButton>
              <ToggleButton value="hi" sx={{ px: 1, py: 0.25, fontSize: '0.75rem' }}>HI</ToggleButton>
            </ToggleButtonGroup>

            <Button
              variant="contained"
              size="small"
              startIcon={<WhatsAppIcon />}
              onClick={() => openWhatsApp()}
              sx={{ display: { xs: 'none', sm: 'flex' } }}
            >
              {t('nav.getQuote')}
            </Button>

            <IconButton
              onClick={() => setDrawerOpen(true)}
              sx={{ display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 280, pt: 2 }}>
          <Box sx={{ px: 2, pb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box component="img" src="/logo.webp" alt="Arvanta" sx={{ height: 32 }} />
            <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>
              Arvanta Movers
            </Typography>
          </Box>
          <Divider />
          <List>
            {navItems.map((item) => (
              <ListItem key={item.key} disablePadding>
                <ListItemButton
                  selected={location.pathname === item.path}
                  onClick={() => { navigate(item.path); setDrawerOpen(false); }}
                >
                  <ListItemIcon sx={{ color: location.pathname === item.path ? 'primary.main' : 'text.secondary' }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={t(`nav.${item.key}`)} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <Box sx={{ p: 2 }}>
            <Button
              variant="contained"
              fullWidth
              startIcon={<WhatsAppIcon />}
              onClick={() => openWhatsApp()}
            >
              {t('nav.getQuote')}
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
