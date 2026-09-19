import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

const serviceLinks = [
  { key: 'household', path: '/services' },
  { key: 'office', path: '/services' },
  { key: 'local', path: '/services' },
  { key: 'interstate', path: '/services' },
  { key: 'car', path: '/services' },
  { key: 'warehouse', path: '/services' },
];

const quickLinks = [
  { key: 'home', path: '/' },
  { key: 'about', path: '/about' },
  { key: 'areas', path: '/areas' },
  { key: 'testimonials', path: '/testimonials' },
  { key: 'faq', path: '/faq' },
  { key: 'contact', path: '/contact' },
];

export default function Footer() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'secondary.main',
        color: 'white',
        pt: 6,
        pb: { xs: 10, md: 4 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Box component="img" src="/logo.webp" alt="Arvanta" sx={{ height: 36, filter: 'brightness(2)' }} />
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                Arvanta Movers
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ opacity: 0.8, mb: 2 }}>
              {t('footer.tagline')}
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.7 }}>
              {t('footer.address')}
            </Typography>
            <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
              <IconButton href="tel:9289934130" sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.1)' }}>
                <PhoneIcon />
              </IconButton>
              <IconButton href="https://wa.me/919289934130" target="_blank" sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.1)' }}>
                <WhatsAppIcon />
              </IconButton>
              <IconButton href="mailto:care@arvantamovers.in" sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.1)' }}>
                <EmailIcon />
              </IconButton>
            </Box>
          </Grid>

          <Grid size={{ xs: 6, md: 2 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2 }}>
              {t('footer.quickLinks')}
            </Typography>
            {quickLinks.map((item) => (
              <Link
                key={item.key}
                component="button"
                variant="body2"
                onClick={() => navigate(item.path)}
                sx={{ display: 'block', color: 'rgba(255,255,255,0.8)', mb: 1, textAlign: 'left' }}
                underline="hover"
              >
                {t(`nav.${item.key}`)}
              </Link>
            ))}
          </Grid>

          <Grid size={{ xs: 6, md: 3 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2 }}>
              {t('footer.services')}
            </Typography>
            {serviceLinks.map((item) => (
              <Link
                key={item.key}
                component="button"
                variant="body2"
                onClick={() => navigate(item.path)}
                sx={{ display: 'block', color: 'rgba(255,255,255,0.8)', mb: 1, textAlign: 'left' }}
                underline="hover"
              >
                {t(`services.${item.key}.title`)}
              </Link>
            ))}
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2 }}>
              {t('footer.contactUs')}
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8, mb: 1 }}>
              {t('contact.info.phone')}: 9289934130
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8, mb: 1 }}>
              {t('contact.info.email')}: care@arvantamovers.in
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              {t('contact.info.hours')}: {t('contact.info.hoursValue')}
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3, borderColor: 'rgba(255,255,255,0.15)' }} />

        <Typography variant="body2" align="center" sx={{ opacity: 0.6 }}>
          &copy; {new Date().getFullYear()} {t('footer.company')} {t('footer.rights')}
        </Typography>
      </Container>
    </Box>
  );
}
