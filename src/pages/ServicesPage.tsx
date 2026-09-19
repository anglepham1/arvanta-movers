import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import BusinessIcon from '@mui/icons-material/Business';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { openWhatsApp } from '../utils/whatsapp';

const services = [
  { key: 'household', icon: <HomeWorkIcon sx={{ fontSize: 48 }} />, img: '/service-household.webp', features: ['Full packing & unpacking', 'Furniture disassembly & reassembly', 'Fragile item handling', 'Same-day local service'] },
  { key: 'office', icon: <BusinessIcon sx={{ fontSize: 48 }} />, img: '/service-office.webp', features: ['IT equipment handling', 'Weekend relocation planning', 'Workstation setup', 'Document archiving'] },
  { key: 'local', icon: <LocalShippingIcon sx={{ fontSize: 48 }} />, img: '/service-local.webp', features: ['Same-day delivery', 'Delhi NCR coverage', 'Mini trucks available', 'Affordable pricing'] },
  { key: 'interstate', icon: <SwapHorizIcon sx={{ fontSize: 48 }} />, img: '/hero-truck.webp', features: ['GPS tracking', 'Door-to-door delivery', '120+ cities covered', 'Regular status updates'] },
  { key: 'car', icon: <DirectionsCarIcon sx={{ fontSize: 48 }} />, img: '/service-car.webp', features: ['Open & enclosed carriers', 'Full transit insurance', 'Door-to-door pickup', 'Zero-damage guarantee'] },
  { key: 'bike', icon: <TwoWheelerIcon sx={{ fontSize: 48 }} />, img: '/service-bike.webp', features: ['Custom crating', 'Mirror & panel protection', 'Tracked delivery', 'Pan-India service'] },
  { key: 'warehouse', icon: <WarehouseIcon sx={{ fontSize: 48 }} />, img: '/service-warehouse.webp', features: ['24/7 security', 'Climate control', 'Inventory management', 'Flexible duration'] },
  { key: 'packing', icon: <Inventory2Icon sx={{ fontSize: 48 }} />, img: '/service-packing.webp', features: ['Multi-layer protection', 'Labeled cartons', 'Fragile specialists', 'Unpacking assistance'] },
];

export default function ServicesPage() {
  const { t } = useTranslation();

  return (
    <Box>
      {/* Hero */}
      <Box sx={{ bgcolor: 'secondary.main', color: 'white', py: { xs: 5, md: 7 }, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h3" gutterBottom>
            {t('services.title')}
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.8, fontWeight: 400 }}>
            {t('services.subtitle')}
          </Typography>
        </Container>
      </Box>

      {/* Services */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        {services.map((service, index) => (
          <Card
            key={service.key}
            id={service.key}
            sx={{ mb: 4, overflow: 'hidden' }}
          >
            <Grid container direction={index % 2 === 0 ? 'row' : 'row-reverse'}>
              <Grid size={{ xs: 12, md: 5 }}>
                <CardMedia
                  component="img"
                  image={service.img}
                  alt={t(`services.${service.key}.title`)}
                  sx={{ height: { xs: 200, md: '100%' }, objectFit: 'cover' }}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 7 }}>
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <Box sx={{ color: 'primary.main' }}>{service.icon}</Box>
                    <Typography variant="h5">
                      {t(`services.${service.key}.title`)}
                    </Typography>
                  </Box>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                    {t(`services.${service.key}.description`)}
                  </Typography>
                  <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: 3 }}>
                    {service.features.map((f) => (
                      <Chip
                        key={f}
                        icon={<CheckCircleIcon />}
                        label={f}
                        size="small"
                        variant="outlined"
                        color="success"
                      />
                    ))}
                  </Stack>
                  <Button
                    variant="contained"
                    startIcon={<WhatsAppIcon />}
                    onClick={() => openWhatsApp({ service: t(`services.${service.key}.title`) })}
                  >
                    {t('services.enquireNow')}
                  </Button>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        ))}
      </Container>

      {/* CTA */}
      <Box sx={{ py: 6, bgcolor: 'primary.main', color: 'white', textAlign: 'center' }}>
        <Container maxWidth="sm">
          <Typography variant="h5" gutterBottom>
            {t('cta.getFreeQuote')}
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.9, mb: 3 }}>
            {t('hero.subtitle')}
          </Typography>
          <Button
            variant="contained"
            size="large"
            startIcon={<WhatsAppIcon />}
            onClick={() => openWhatsApp()}
            sx={{ bgcolor: '#25D366', '&:hover': { bgcolor: '#1DA851' } }}
          >
            {t('hero.cta')}
          </Button>
        </Container>
      </Box>
    </Box>
  );
}
