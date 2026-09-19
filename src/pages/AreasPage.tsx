import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { openWhatsApp } from '../utils/whatsapp';

const ncrCities = ['Delhi', 'Gurgaon', 'Noida', 'Greater Noida', 'Faridabad', 'Ghaziabad'];

const interstateRoutes = [
  { from: 'Delhi', to: 'Mumbai', distance: '~1,400 km', time: '3-4 days' },
  { from: 'Delhi', to: 'Pune', distance: '~1,500 km', time: '3-4 days' },
  { from: 'Delhi', to: 'Bengaluru', distance: '~2,150 km', time: '4-5 days' },
  { from: 'Delhi', to: 'Hyderabad', distance: '~1,500 km', time: '3-4 days' },
  { from: 'Delhi', to: 'Chennai', distance: '~2,200 km', time: '4-5 days' },
  { from: 'Delhi', to: 'Ahmedabad', distance: '~950 km', time: '2-3 days' },
  { from: 'Delhi', to: 'Jaipur', distance: '~280 km', time: '1 day' },
  { from: 'Delhi', to: 'Chandigarh', distance: '~250 km', time: '1 day' },
  { from: 'Delhi', to: 'Lucknow', distance: '~550 km', time: '1-2 days' },
  { from: 'Delhi', to: 'Kolkata', distance: '~1,500 km', time: '3-4 days' },
  { from: 'Delhi', to: 'Indore', distance: '~800 km', time: '2-3 days' },
  { from: 'Delhi', to: 'Bhopal', distance: '~780 km', time: '2-3 days' },
];

export default function AreasPage() {
  const { t } = useTranslation();

  return (
    <Box>
      {/* Hero */}
      <Box sx={{ bgcolor: 'secondary.main', color: 'white', py: { xs: 5, md: 7 }, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h3" gutterBottom>
            {t('areas.title')}
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.8, fontWeight: 400 }}>
            {t('areas.subtitle')}
          </Typography>
        </Container>
      </Box>

      {/* Delhi NCR */}
      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 7 } }}>
        <Typography variant="h4" gutterBottom color="primary">
          <LocationOnIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
          {t('areas.delhiNcr')}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Quick and efficient local relocation services across Delhi NCR with same-day and next-day options.
        </Typography>
        <Grid container spacing={3}>
          {ncrCities.map((city) => (
            <Grid key={city} size={{ xs: 6, sm: 4, md: 2 }}>
              <Card
                sx={{
                  textAlign: 'center',
                  p: 2,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  '&:hover': { borderColor: 'primary.main', transform: 'translateY(-2px)' },
                }}
                variant="outlined"
                onClick={() => openWhatsApp({ service: `Local Shifting in ${city}`, fromCity: city })}
              >
                <LocationOnIcon sx={{ color: 'primary.main', mb: 1 }} />
                <Typography variant="subtitle2">{city}</Typography>
                <Button size="small" sx={{ mt: 1, fontSize: '0.7rem' }}>
                  {t('areas.getQuoteFor')}
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Interstate */}
      <Box sx={{ bgcolor: 'grey.50', py: { xs: 5, md: 7 } }}>
        <Container maxWidth="lg">
          <Typography variant="h4" gutterBottom color="primary">
            <ArrowForwardIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
            {t('areas.interstate')}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            Long-distance relocation services with GPS-tracked transportation and regular status updates.
          </Typography>
          <Grid container spacing={2}>
            {interstateRoutes.map((route) => (
              <Grid key={route.to} size={{ xs: 12, sm: 6, md: 4 }}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
                      <Chip label={route.from} size="small" color="primary" />
                      <ArrowForwardIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                      <Chip label={route.to} size="small" variant="outlined" />
                    </Stack>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                      Distance: {route.distance} | Transit: {route.time}
                    </Typography>
                    <Button
                      size="small"
                      startIcon={<WhatsAppIcon />}
                      onClick={() => openWhatsApp({ service: 'Interstate Relocation', fromCity: route.from, toCity: route.to })}
                      variant="outlined"
                      fullWidth
                    >
                      {t('areas.getQuoteFor')}
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Pan-India */}
      <Box sx={{ py: { xs: 5, md: 7 } }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom color="primary">
            {t('areas.panIndia')}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            {t('areas.panIndiaDesc')}
          </Typography>
          <Paper sx={{ p: 3, bgcolor: 'primary.main', color: 'white', borderRadius: 3 }}>
            <Typography variant="h3" sx={{ fontWeight: 700 }}>120+</Typography>
            <Typography variant="h6">{t('stats.cities')}</Typography>
          </Paper>
          <Button
            variant="contained"
            size="large"
            startIcon={<WhatsAppIcon />}
            onClick={() => openWhatsApp({ service: 'Interstate Relocation' })}
            sx={{ mt: 4 }}
          >
            {t('cta.getFreeQuote')}
          </Button>
        </Container>
      </Box>
    </Box>
  );
}
