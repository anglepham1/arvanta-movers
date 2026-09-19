import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FlagIcon from '@mui/icons-material/Flag';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TimelineIcon from '@mui/icons-material/Timeline';
import { openWhatsApp } from '../utils/whatsapp';

const team = [
  { name: 'Ishaan Vedant', role: 'Founder & Managing Director', bio: 'A logistics professional with over 15 years of experience in relocation operations and supply-chain management.', img: '/team-ishaan.webp' },
  { name: 'Mehul Sarin', role: 'Operations Head', bio: 'Oversees interstate transportation, fleet scheduling, and service quality.', img: '/team-mehul.webp' },
  { name: 'Tanish Raghav', role: 'Customer Relations Manager', bio: 'Handles customer support, move coordination, and escalation management.', img: '/team-tanish.webp' },
  { name: 'Devika Khosla', role: 'Quality Assurance Lead', bio: 'Monitors packing standards, delivery compliance, and customer satisfaction.', img: '/team-devika.webp' },
];

const stats = [
  { value: '12+', label: 'Years Experience' },
  { value: '18,500+', label: 'Relocations' },
  { value: '65+', label: 'Specialists' },
  { value: '40+', label: 'Vehicles' },
  { value: '98%', label: 'On-Time' },
  { value: '120+', label: 'Cities' },
];

const milestones = [
  { year: '2014', event: 'Founded in Delhi with 2 vehicles and a small team' },
  { year: '2016', event: 'Expanded to cover full Delhi NCR region' },
  { year: '2018', event: 'Launched interstate relocation services' },
  { year: '2019', event: 'Fleet expanded to 25+ vehicles' },
  { year: '2021', event: 'Introduced vehicle transportation services' },
  { year: '2023', event: 'Reached 15,000+ successful relocations' },
  { year: '2024', event: 'Opened new warehouse facility, serving 120+ cities' },
];

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <Box>
      {/* Hero */}
      <Box sx={{ bgcolor: 'secondary.main', color: 'white', py: { xs: 5, md: 7 }, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h3" gutterBottom>
            {t('about.title')}
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.8, fontWeight: 400 }}>
            {t('about.subtitle')}
          </Typography>
        </Container>
      </Box>

      {/* Story */}
      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 7 } }}>
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h4" gutterBottom color="primary">
              {t('about.story.title')}
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              {t('about.story.p1')}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {t('about.story.p2')}
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component="img"
              src="/about-fleet.webp"
              alt="Arvanta Fleet"
              sx={{ width: '100%', borderRadius: 3, boxShadow: 4 }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* Mission & Vision */}
      <Box sx={{ bgcolor: 'grey.50', py: { xs: 5, md: 7 } }}>
        <Container maxWidth="md">
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Paper sx={{ p: 4, height: '100%', textAlign: 'center' }}>
                <FlagIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                <Typography variant="h5" gutterBottom>
                  {t('about.mission.title')}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {t('about.mission.text')}
                </Typography>
              </Paper>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Paper sx={{ p: 4, height: '100%', textAlign: 'center' }}>
                <VisibilityIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                <Typography variant="h5" gutterBottom>
                  {t('about.vision.title')}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {t('about.vision.text')}
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats */}
      <Box sx={{ py: { xs: 5, md: 7 }, bgcolor: 'primary.main', color: 'white' }}>
        <Container maxWidth="lg">
          <Grid container spacing={3} justifyContent="center">
            {stats.map((stat) => (
              <Grid key={stat.label} size={{ xs: 4, sm: 4, md: 2 }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h4" sx={{ fontWeight: 700 }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="caption" sx={{ opacity: 0.8 }}>
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Team */}
      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 7 } }}>
        <Typography variant="h4" align="center" gutterBottom>
          {t('team.title')}
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 5 }}>
          {t('team.subtitle')}
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {team.map((member) => (
            <Grid key={member.name} size={{ xs: 12, sm: 6, md: 3 }}>
              <Card sx={{ textAlign: 'center', p: 3, height: '100%' }}>
                <Avatar
                  src={member.img}
                  alt={member.name}
                  sx={{ width: 100, height: 100, mx: 'auto', mb: 2 }}
                />
                <Typography variant="h6">{member.name}</Typography>
                <Typography variant="subtitle2" color="primary" gutterBottom>
                  {member.role}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {member.bio}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Timeline */}
      <Box sx={{ bgcolor: 'grey.50', py: { xs: 5, md: 7 } }}>
        <Container maxWidth="md">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 4, justifyContent: 'center' }}>
            <TimelineIcon sx={{ color: 'primary.main' }} />
            <Typography variant="h4">Our Journey</Typography>
          </Box>
          <Stack spacing={2}>
            {milestones.map((m) => (
              <Paper key={m.year} sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar sx={{ bgcolor: 'primary.main', fontWeight: 700, width: 56, height: 56 }}>
                  {m.year}
                </Avatar>
                <Typography variant="body1">{m.event}</Typography>
              </Paper>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* Fleet */}
      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 7 } }}>
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h4" gutterBottom color="primary">
              Our Fleet & Facilities
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              We operate a fleet of 40+ dedicated transport vehicles ranging from mini trucks for local moves to large container trucks for interstate relocations. All vehicles are GPS-enabled for real-time tracking.
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Our warehouse facilities in Delhi offer secure, monitored storage with inventory management systems. Climate-controlled units are available for sensitive items like electronics and artwork.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component="img"
              src="/hero-truck.webp"
              alt="Fleet"
              sx={{ width: '100%', borderRadius: 3, boxShadow: 4 }}
            />
          </Grid>
        </Grid>
      </Container>

      <Divider />

      {/* CTA */}
      <Box sx={{ py: 6, textAlign: 'center' }}>
        <Container maxWidth="sm">
          <Typography variant="h5" gutterBottom>
            {t('cta.talkToExpert')}
          </Typography>
          <Button
            variant="contained"
            size="large"
            startIcon={<WhatsAppIcon />}
            onClick={() => openWhatsApp()}
            sx={{ mt: 2 }}
          >
            {t('hero.cta')}
          </Button>
        </Container>
      </Box>
    </Box>
  );
}
