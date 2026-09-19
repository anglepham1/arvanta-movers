import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Rating from '@mui/material/Rating';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BusinessIcon from '@mui/icons-material/Business';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import VerifiedIcon from '@mui/icons-material/Verified';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ShieldIcon from '@mui/icons-material/Shield';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import { openWhatsApp } from '../utils/whatsapp';

const serviceItems = [
  { key: 'household', icon: <HomeWorkIcon sx={{ fontSize: 40 }} />, img: '/service-household.webp' },
  { key: 'office', icon: <BusinessIcon sx={{ fontSize: 40 }} />, img: '/service-office.webp' },
  { key: 'local', icon: <LocalShippingIcon sx={{ fontSize: 40 }} />, img: '/service-local.webp' },
  { key: 'interstate', icon: <SwapHorizIcon sx={{ fontSize: 40 }} />, img: '/hero-truck.webp' },
  { key: 'car', icon: <DirectionsCarIcon sx={{ fontSize: 40 }} />, img: '/service-car.webp' },
  { key: 'bike', icon: <TwoWheelerIcon sx={{ fontSize: 40 }} />, img: '/service-bike.webp' },
  { key: 'warehouse', icon: <WarehouseIcon sx={{ fontSize: 40 }} />, img: '/service-warehouse.webp' },
  { key: 'packing', icon: <Inventory2Icon sx={{ fontSize: 40 }} />, img: '/service-packing.webp' },
];

const whyUsIcons = [
  <SupportAgentIcon />, <Inventory2Icon />, <GpsFixedIcon />, <PriceCheckIcon />,
  <VerifiedIcon />, <AccessTimeIcon />, <ShieldIcon />, <ShieldIcon />,
  <SupportAgentIcon />, <LocalShippingIcon />,
];

const whyUsKeys = [
  'coordinators', 'packingTeams', 'gps', 'transparent', 'noHidden',
  'timely', 'damage', 'insurance', 'support', 'coverage',
];

const testimonials = [
  { name: 'Niyati Ahuja', location: 'South Delhi', text: 'Arvanta Movers handled our apartment relocation smoothly. The packing quality was impressive and everything arrived on schedule.' },
  { name: 'Pranay Talreja', location: 'Gurgaon', text: 'The team coordinated our move from Gurgaon to Pune efficiently. Communication remained clear throughout the process.' },
  { name: 'Abeer Nanda', location: 'Noida', text: 'Our office relocation was completed over a weekend with minimal disruption. Highly organized team.' },
  { name: 'Ridhima Vohra', location: 'Faridabad', text: 'Very professional staff and transparent pricing. The movers were punctual and careful with fragile items.' },
  { name: 'Keshav Malhotra', location: 'Dwarka', text: 'From quotation to delivery, the process was straightforward and stress-free. I would recommend them for interstate shifting.' },
  { name: 'Shreya Chaturvedi', location: 'Ghaziabad', text: 'The packing crew was courteous and efficient. Every carton was labeled properly which made unpacking easier.' },
];

const team = [
  { name: 'Ishaan Vedant', role: 'Founder & MD', img: '/team-ishaan.webp' },
  { name: 'Mehul Sarin', role: 'Operations Head', img: '/team-mehul.webp' },
  { name: 'Tanish Raghav', role: 'Customer Relations', img: '/team-tanish.webp' },
  { name: 'Devika Khosla', role: 'Quality Assurance', img: '/team-devika.webp' },
];

const stats = [
  { value: '12+', key: 'years' },
  { value: '18,500+', key: 'relocations' },
  { value: '65+', key: 'specialists' },
  { value: '40+', key: 'vehicles' },
  { value: '98%', key: 'onTime' },
  { value: '4.8/5', key: 'rating' },
  { value: '120+', key: 'cities' },
];

const heroImages = [
  '/service-household.webp',
  '/service-office.webp',
  '/service-local.webp',
  '/service-car.webp',
  '/service-warehouse.webp',
  '/hero-truck.webp',
];

export default function HomePage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextImage, 4000);
    return () => clearInterval(interval);
  }, [nextImage]);

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          minHeight: { xs: '85vh', md: '70vh' },
          display: 'flex',
          alignItems: 'center',
          background: 'linear-gradient(135deg, rgba(27,42,74,0.92) 0%, rgba(230,81,0,0.85) 100%)',
          overflow: 'hidden',
        }}
      >
        {heroImages.map((src, index) => (
          <Box
            key={src}
            component="img"
            src={src}
            alt=""
            sx={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: 0,
              opacity: index === currentImage ? 0.3 : 0,
              transition: 'opacity 1.2s ease-in-out',
            }}
          />
        ))}
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: 6 }}>
          <Box sx={{ maxWidth: 650 }}>
            <Chip
              label="Since 2014"
              sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white', mb: 2, fontWeight: 600 }}
            />
            <Typography variant="h2" sx={{ color: 'white', mb: 2, fontSize: { xs: '2rem', md: '3.2rem' } }}>
              {t('hero.tagline')}
            </Typography>
            <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.9)', mb: 4, fontWeight: 400, lineHeight: 1.6 }}>
              {t('hero.subtitle')}
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button
                variant="contained"
                size="large"
                startIcon={<WhatsAppIcon />}
                onClick={() => openWhatsApp()}
                sx={{ bgcolor: '#25D366', '&:hover': { bgcolor: '#1DA851' }, px: 4 }}
              >
                {t('hero.cta')}
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => navigate('/services')}
                sx={{ borderColor: 'white', color: 'white', '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' } }}
              >
                {t('hero.ctaSecondary')}
              </Button>
              <Button
                variant="text"
                size="large"
                startIcon={<PhoneIcon />}
                href="tel:9289934130"
                sx={{ color: 'white' }}
              >
                {t('hero.callNow')}
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* Stats Bar */}
      <Box sx={{ bgcolor: 'secondary.main', py: 3, overflow: 'auto' }}>
        <Container maxWidth="lg">
          <Stack
            direction="row"
            spacing={3}
            sx={{ justifyContent: { md: 'center' }, minWidth: 'max-content', px: 2 }}
          >
            {stats.map((stat) => (
              <Box key={stat.key} sx={{ textAlign: 'center', minWidth: 90 }}>
                <Typography variant="h5" sx={{ color: 'primary.light', fontWeight: 700 }}>
                  {stat.value}
                </Typography>
                <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                  {t(`stats.${stat.key}`)}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* Services Section */}
      <Box sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" gutterBottom>
            {t('services.title')}
          </Typography>
          <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 5, maxWidth: 600, mx: 'auto' }}>
            {t('services.subtitle')}
          </Typography>
          <Grid container spacing={3}>
            {serviceItems.map((item) => (
              <Grid key={item.key} size={{ xs: 6, sm: 6, md: 3 }}>
                <Card
                  sx={{
                    height: '100%',
                    cursor: 'pointer',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    '&:hover': { transform: 'translateY(-4px)', boxShadow: 6 },
                  }}
                  onClick={() => navigate('/services')}
                >
                  <CardMedia
                    component="img"
                    height="120"
                    image={item.img}
                    alt={t(`services.${item.key}.title`)}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ textAlign: 'center', p: 2 }}>
                    <Box sx={{ color: 'primary.main', mb: 1 }}>{item.icon}</Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                      {t(`services.${item.key}.title`)}
                    </Typography>
                    <Typography variant="caption" color="text.secondary" sx={{ display: { xs: 'none', sm: 'block' } }}>
                      {t(`services.${item.key}.short`)}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button variant="outlined" endIcon={<ArrowForwardIcon />} onClick={() => navigate('/services')}>
              {t('services.viewAll')}
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Why Choose Us */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" gutterBottom>
            {t('whyUs.title')}
          </Typography>
          <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 5 }}>
            {t('whyUs.subtitle')}
          </Typography>
          <Grid container spacing={2}>
            {whyUsKeys.map((key, i) => (
              <Grid key={key} size={{ xs: 6, sm: 4, md: 2.4 }}>
                <Paper
                  sx={{
                    p: 2,
                    textAlign: 'center',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 1,
                  }}
                  elevation={0}
                  variant="outlined"
                >
                  <Box sx={{ color: 'primary.main' }}>{whyUsIcons[i]}</Box>
                  <Typography variant="caption" sx={{ fontWeight: 500 }}>
                    {t(`whyUs.items.${key}`)}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button variant="text" endIcon={<ArrowForwardIcon />} onClick={() => navigate('/about')}>
              {t('whyUs.viewMore')}
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Process Section */}
      <Box sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" gutterBottom>
            {t('process.title')}
          </Typography>
          <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 5 }}>
            {t('process.subtitle')}
          </Typography>
          <Grid container spacing={2}>
            {['quote', 'assessment', 'packing', 'transport', 'delivery', 'completion'].map((step, i) => (
              <Grid key={step} size={{ xs: 6, sm: 4, md: 2 }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Avatar
                    sx={{
                      bgcolor: 'primary.main',
                      width: 48,
                      height: 48,
                      mx: 'auto',
                      mb: 1,
                      fontWeight: 700,
                    }}
                  >
                    {i + 1}
                  </Avatar>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                    {t(`process.steps.${step}.title`)}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {t(`process.steps.${step}.desc`)}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Service Areas */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" gutterBottom>
            {t('areas.title')}
          </Typography>
          <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 4 }}>
            {t('areas.subtitle')}
          </Typography>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Paper sx={{ p: 3, height: '100%' }}>
                <Typography variant="h6" gutterBottom sx={{ color: 'primary.main' }}>
                  {t('areas.delhiNcr')}
                </Typography>
                <Stack direction="row" flexWrap="wrap" gap={1}>
                  {['Delhi', 'Gurgaon', 'Noida', 'Greater Noida', 'Faridabad', 'Ghaziabad'].map((city) => (
                    <Chip key={city} label={city} variant="outlined" size="small" />
                  ))}
                </Stack>
              </Paper>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Paper sx={{ p: 3, height: '100%' }}>
                <Typography variant="h6" gutterBottom sx={{ color: 'primary.main' }}>
                  {t('areas.interstate')}
                </Typography>
                <Stack direction="row" flexWrap="wrap" gap={1}>
                  {['Mumbai', 'Pune', 'Bengaluru', 'Hyderabad', 'Chennai', 'Ahmedabad', 'Jaipur', 'Chandigarh', 'Lucknow', 'Kolkata', 'Indore', 'Bhopal'].map((city) => (
                    <Chip key={city} label={`Delhi → ${city}`} size="small" color="primary" variant="outlined" />
                  ))}
                </Stack>
              </Paper>
            </Grid>
          </Grid>
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button variant="outlined" endIcon={<ArrowForwardIcon />} onClick={() => navigate('/areas')}>
              {t('areas.viewAll')}
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Testimonials */}
      <Box sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" gutterBottom>
            {t('testimonials.title')}
          </Typography>
          <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 5 }}>
            {t('testimonials.subtitle')}
          </Typography>
          <Grid container spacing={3}>
            {testimonials.slice(0, 3).map((item) => (
              <Grid key={item.name} size={{ xs: 12, sm: 6, md: 4 }}>
                <Card sx={{ height: '100%', p: 3 }}>
                  <Rating value={5} readOnly size="small" sx={{ mb: 2 }} />
                  <Typography variant="body2" sx={{ mb: 2, fontStyle: 'italic', color: 'text.secondary' }}>
                    "{item.text}"
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Avatar sx={{ bgcolor: 'primary.main', width: 32, height: 32 }}>
                      {item.name[0]}
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle2">{item.name}</Typography>
                      <Typography variant="caption" color="text.secondary">{item.location}</Typography>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button variant="text" endIcon={<ArrowForwardIcon />} onClick={() => navigate('/testimonials')}>
              {t('testimonials.viewAll')}
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Team Preview */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" gutterBottom>
            {t('team.title')}
          </Typography>
          <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 5 }}>
            {t('team.subtitle')}
          </Typography>
          <Stack direction="row" spacing={3} justifyContent="center" flexWrap="wrap" useFlexGap>
            {team.map((member) => (
              <Box key={member.name} sx={{ textAlign: 'center', width: { xs: 140, sm: 160 } }}>
                <Avatar
                  src={member.img}
                  alt={member.name}
                  sx={{ width: 80, height: 80, mx: 'auto', mb: 1 }}
                />
                <Typography variant="subtitle2">{member.name}</Typography>
                <Typography variant="caption" color="text.secondary">{member.role}</Typography>
              </Box>
            ))}
          </Stack>
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button variant="text" endIcon={<ArrowForwardIcon />} onClick={() => navigate('/about')}>
              {t('team.viewMore')}
            </Button>
          </Box>
        </Container>
      </Box>

      {/* FAQ Preview */}
      <Box sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="md">
          <Typography variant="h4" align="center" gutterBottom>
            {t('faq.title')}
          </Typography>
          <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 4 }}>
            {t('faq.subtitle')}
          </Typography>
          {['packing', 'insurance', 'booking'].map((key) => (
            <Accordion key={key} sx={{ mb: 1 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="subtitle2">{t(`faq.items.${key}.q`)}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" color="text.secondary">
                  {t(`faq.items.${key}.a`)}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
          <Box sx={{ textAlign: 'center', mt: 3 }}>
            <Button variant="text" endIcon={<ArrowForwardIcon />} onClick={() => navigate('/faq')}>
              {t('faq.viewAll')}
            </Button>
          </Box>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          background: 'linear-gradient(135deg, #E65100 0%, #1B2A4A 100%)',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="h4" gutterBottom>
            {t('cta.getFreeQuote')}
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.9, mb: 4 }}>
            {t('hero.subtitle')}
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <Button
              variant="contained"
              size="large"
              startIcon={<WhatsAppIcon />}
              onClick={() => openWhatsApp()}
              sx={{ bgcolor: '#25D366', '&:hover': { bgcolor: '#1DA851' } }}
            >
              {t('hero.cta')}
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<PhoneIcon />}
              href="tel:9289934130"
              sx={{ borderColor: 'white', color: 'white', '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' } }}
            >
              {t('hero.callNow')}
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Trust Indicators */}
      <Box sx={{ py: 4, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Stack
            direction="row"
            spacing={4}
            justifyContent="center"
            flexWrap="wrap"
            useFlexGap
            sx={{ textAlign: 'center' }}
          >
            <Box>
              <Typography variant="h6" color="primary">4.8/5</Typography>
              <Typography variant="caption" color="text.secondary">{t('stats.rating')}</Typography>
            </Box>
            <Box>
              <Typography variant="h6" color="primary">18,500+</Typography>
              <Typography variant="caption" color="text.secondary">{t('stats.relocations')}</Typography>
            </Box>
            <Box>
              <Typography variant="h6" color="primary">120+</Typography>
              <Typography variant="caption" color="text.secondary">{t('stats.cities')}</Typography>
            </Box>
            <Box>
              <Typography variant="h6" color="primary">98%</Typography>
              <Typography variant="caption" color="text.secondary">{t('stats.onTime')}</Typography>
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
