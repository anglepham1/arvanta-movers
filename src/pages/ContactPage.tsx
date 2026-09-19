import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { openWhatsApp } from '../utils/whatsapp';

const serviceOptions = [
  'Household Shifting',
  'Office Relocation',
  'Local Shifting',
  'Interstate Relocation',
  'Car Transportation',
  'Bike Transportation',
  'Warehouse & Storage',
  'Packing & Unpacking',
];

export default function ContactPage() {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    fromCity: '',
    toCity: '',
    date: '',
    message: '',
  });

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openWhatsApp({
      service: form.service,
      name: form.name,
      phone: form.phone,
      fromCity: form.fromCity,
      toCity: form.toCity,
      date: form.date,
      message: form.message,
    });
  };

  return (
    <Box>
      {/* Hero */}
      <Box sx={{ bgcolor: 'secondary.main', color: 'white', py: { xs: 5, md: 7 }, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h3" gutterBottom>
            {t('contact.title')}
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.8, fontWeight: 400 }}>
            {t('contact.subtitle')}
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        {/* Quick Contact Buttons */}
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 5 }} justifyContent="center">
          <Button
            variant="contained"
            size="large"
            startIcon={<PhoneIcon />}
            href="tel:9289934130"
            sx={{ flex: 1, maxWidth: 250 }}
          >
            {t('contact.callUs')} - 9289934130
          </Button>
          <Button
            variant="contained"
            size="large"
            startIcon={<WhatsAppIcon />}
            onClick={() => openWhatsApp()}
            sx={{ flex: 1, maxWidth: 250, bgcolor: '#25D366', '&:hover': { bgcolor: '#1DA851' } }}
          >
            {t('contact.whatsappUs')}
          </Button>
          <Button
            variant="outlined"
            size="large"
            startIcon={<EmailIcon />}
            href="mailto:care@arvantamovers.in"
            sx={{ flex: 1, maxWidth: 250 }}
          >
            {t('contact.emailUs')}
          </Button>
        </Stack>

        <Grid container spacing={4}>
          {/* Contact Form */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Card>
              <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                <Typography variant="h5" gutterBottom>
                  {t('cta.getFreeQuote')}
                </Typography>
                <Box component="form" onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label={t('contact.form.name')}
                        value={form.name}
                        onChange={handleChange('name')}
                        required
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label={t('contact.form.phone')}
                        value={form.phone}
                        onChange={handleChange('phone')}
                        required
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label={t('contact.form.email')}
                        value={form.email}
                        onChange={handleChange('email')}
                        type="email"
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        select
                        label={t('contact.form.service')}
                        value={form.service}
                        onChange={handleChange('service')}
                        required
                      >
                        {serviceOptions.map((opt) => (
                          <MenuItem key={opt} value={opt}>{opt}</MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label={t('contact.form.fromCity')}
                        value={form.fromCity}
                        onChange={handleChange('fromCity')}
                        required
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label={t('contact.form.toCity')}
                        value={form.toCity}
                        onChange={handleChange('toCity')}
                        required
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label={t('contact.form.date')}
                        value={form.date}
                        onChange={handleChange('date')}
                        type="date"
                        slotProps={{ inputLabel: { shrink: true } }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label={t('contact.form.message')}
                        value={form.message}
                        onChange={handleChange('message')}
                        multiline
                        rows={3}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        fullWidth
                        startIcon={<WhatsAppIcon />}
                        sx={{ bgcolor: '#25D366', '&:hover': { bgcolor: '#1DA851' } }}
                      >
                        {t('contact.form.submit')}
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Contact Info */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={2}>
              <Paper sx={{ p: 3 }}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <PhoneIcon sx={{ color: 'primary.main' }} />
                  <Box>
                    <Typography variant="subtitle2">{t('contact.info.phone')}</Typography>
                    <Typography variant="body2" color="text.secondary">9289934130</Typography>
                  </Box>
                </Stack>
              </Paper>
              <Paper sx={{ p: 3 }}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <WhatsAppIcon sx={{ color: '#25D366' }} />
                  <Box>
                    <Typography variant="subtitle2">{t('contact.info.whatsapp')}</Typography>
                    <Typography variant="body2" color="text.secondary">9289934130</Typography>
                  </Box>
                </Stack>
              </Paper>
              <Paper sx={{ p: 3 }}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <EmailIcon sx={{ color: 'primary.main' }} />
                  <Box>
                    <Typography variant="subtitle2">{t('contact.info.email')}</Typography>
                    <Typography variant="body2" color="text.secondary">care@arvantamovers.in</Typography>
                  </Box>
                </Stack>
              </Paper>
              <Paper sx={{ p: 3 }}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <LocationOnIcon sx={{ color: 'primary.main' }} />
                  <Box>
                    <Typography variant="subtitle2">{t('contact.info.address')}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      B-117, Second Floor, Naraina Industrial Area Phase-I, New Delhi – 110028
                    </Typography>
                  </Box>
                </Stack>
              </Paper>
              <Paper sx={{ p: 3 }}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <AccessTimeIcon sx={{ color: 'primary.main' }} />
                  <Box>
                    <Typography variant="subtitle2">{t('contact.info.hours')}</Typography>
                    <Typography variant="body2" color="text.secondary">{t('contact.info.hoursValue')}</Typography>
                  </Box>
                </Stack>
              </Paper>
            </Stack>

            {/* Map */}
            <Paper sx={{ mt: 2, overflow: 'hidden', borderRadius: 2 }}>
              <Box
                component="iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5!2d77.15!3d28.63!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sNaraina+Industrial+Area!5e0!3m2!1sen!2sin!4v1"
                sx={{ width: '100%', height: 200, border: 0 }}
                loading="lazy"
                title="Office Location"
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
