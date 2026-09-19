import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { openWhatsApp } from '../utils/whatsapp';

const faqKeys = ['packing', 'insurance', 'booking', 'weekend', 'tracking', 'office', 'cost', 'cancel'];

export default function FaqPage() {
  const { t } = useTranslation();

  return (
    <Box>
      {/* Hero */}
      <Box sx={{ bgcolor: 'secondary.main', color: 'white', py: { xs: 5, md: 7 }, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h3" gutterBottom>
            {t('faq.title')}
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.8, fontWeight: 400 }}>
            {t('faq.subtitle')}
          </Typography>
        </Container>
      </Box>

      {/* FAQ List */}
      <Container maxWidth="md" sx={{ py: { xs: 4, md: 6 } }}>
        {faqKeys.map((key) => (
          <Accordion key={key} sx={{ mb: 1 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                {t(`faq.items.${key}.q`)}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                {t(`faq.items.${key}.a`)}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>

      {/* Still have questions */}
      <Box sx={{ py: 6, bgcolor: 'grey.50' }}>
        <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
          <Paper sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom>
              {t('faq.stillQuestions')}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Our team is available 7 days a week to answer your queries.
            </Typography>
            <Button
              variant="contained"
              size="large"
              startIcon={<WhatsAppIcon />}
              onClick={() => openWhatsApp({ message: 'I have a question about your services.' })}
              sx={{ bgcolor: '#25D366', '&:hover': { bgcolor: '#1DA851' } }}
            >
              {t('faq.askWhatsapp')}
            </Button>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
}
