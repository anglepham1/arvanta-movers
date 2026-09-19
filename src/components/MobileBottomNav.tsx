import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import HomeIcon from '@mui/icons-material/Home';
import BuildIcon from '@mui/icons-material/Build';
import InfoIcon from '@mui/icons-material/Info';
import PhoneIcon from '@mui/icons-material/Phone';

const navItems = [
  { key: 'home', path: '/', icon: <HomeIcon /> },
  { key: 'services', path: '/services', icon: <BuildIcon /> },
  { key: 'about', path: '/about', icon: <InfoIcon /> },
  { key: 'contact', path: '/contact', icon: <PhoneIcon /> },
];

export default function MobileBottomNav() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const currentIndex = navItems.findIndex((item) => item.path === location.pathname);

  return (
    <Paper
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 'appBar',
        display: { xs: 'block', md: 'none' },
      }}
      elevation={8}
    >
      <BottomNavigation
        value={currentIndex >= 0 ? currentIndex : 0}
        onChange={(_, newValue) => {
          navigate(navItems[newValue].path);
        }}
        showLabels
        sx={{
          '& .Mui-selected': { color: 'primary.main' },
        }}
      >
        {navItems.map((item) => (
          <BottomNavigationAction
            key={item.key}
            label={t(`nav.${item.key}`)}
            icon={item.icon}
          />
        ))}
      </BottomNavigation>
    </Paper>
  );
}
