import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { openWhatsApp } from '../utils/whatsapp';

const testimonials = [
  { name: 'Niyati Ahuja', location: 'South Delhi', text: 'Arvanta Movers handled our apartment relocation smoothly. The packing quality was impressive and everything arrived on schedule.', rating: 5 },
  { name: 'Pranay Talreja', location: 'Gurgaon', text: 'The team coordinated our move from Gurgaon to Pune efficiently. Communication remained clear throughout the process.', rating: 5 },
  { name: 'Abeer Nanda', location: 'Noida', text: 'Our office relocation was completed over a weekend with minimal disruption. Highly organized team.', rating: 5 },
  { name: 'Ridhima Vohra', location: 'Faridabad', text: 'Very professional staff and transparent pricing. The movers were punctual and careful with fragile items.', rating: 5 },
  { name: 'Keshav Malhotra', location: 'Dwarka', text: 'From quotation to delivery, the process was straightforward and stress-free. I would recommend them for interstate shifting.', rating: 5 },
  { name: 'Shreya Chaturvedi', location: 'Ghaziabad', text: 'The packing crew was courteous and efficient. Every carton was labeled properly which made unpacking easier.', rating: 4 },
];

export default function TestimonialsPage() {
  const { t } = useTranslation();

  return (
    <Box>
      {/* Hero */}
      <Box sx={{ bgcolor: 'secondary.main', color: 'white', py: { xs: 5, md: 7 }, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h3" gutterBottom>
            {t('testimonials.title')}
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.8, fontWeight: 400 }}>
            {t('testimonials.subtitle')}
          </Typography>
        </Container>
      </Box>

      {/* Rating Summary */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <Paper sx={{ p: 4, textAlign: 'center', mb: 5, bgcolor: 'grey.50' }}>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            {t('testimonials.overallRating')}
          </Typography>
          <Typography variant="h2" color="primary" sx={{ fontWeight: 700 }}>
            4.8
          </Typography>
          <Rating value={4.8} precision={0.1} readOnly size="large" sx={{ mb: 1 }} />
          <Typography variant="body2" color="text.secondary">
            Based on 18,500+ relocations
          </Typography>
        </Paper>

        {/* Testimonials Grid */}
        <Grid container spacing={3}>
          {testimonials.map((item) => (
            <Grid key={item.name} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card sx={{ height: '100%', p: 3, position: 'relative' }}>
                <FormatQuoteIcon
                  sx={{ position: 'absolute', top: 12, right: 12, color: 'grey.200', fontSize: 48 }}
                />
                <CardContent sx={{ p: 0 }}>
                  <Rating value={item.rating} readOnly size="small" sx={{ mb: 2 }} />
                  <Typography variant="body1" sx={{ mb: 3, fontStyle: 'italic', color: 'text.secondary', lineHeight: 1.7 }}>
                    "{item.text}"
                  </Typography>
                  <Stack direction="row" alignItems="center" spacing={1.5}>
                    <Avatar sx={{ bgcolor: 'primary.main' }}>
                      {item.name[0]}
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle2">{item.name}</Typography>
                      <Typography variant="caption" color="text.secondary">{item.location}</Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA */}
      <Box sx={{ py: 6, bgcolor: 'grey.50', textAlign: 'center' }}>
        <Container maxWidth="sm">
          <Typography variant="h5" gutterBottom>
            Ready to experience our service?
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Join thousands of satisfied customers who trust Arvanta Movers.
          </Typography>
          <Button
            variant="contained"
            size="large"
            startIcon={<WhatsAppIcon />}
            onClick={() => openWhatsApp()}
          >
            {t('cta.getFreeQuote')}
          </Button>
        </Container>
      </Box>
    </Box>
  );
}
