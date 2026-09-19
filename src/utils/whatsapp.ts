const WHATSAPP_NUMBER = '919289934130';

interface WhatsAppParams {
  service?: string;
  name?: string;
  phone?: string;
  fromCity?: string;
  toCity?: string;
  date?: string;
  message?: string;
}

export function buildWhatsAppUrl(params: WhatsAppParams = {}): string {
  let text = 'Hi Arvanta Movers,\n\n';

  if (params.service) {
    text += `I am interested in: ${params.service}\n\n`;
  }

  if (params.name) text += `Name: ${params.name}\n`;
  if (params.phone) text += `Phone: ${params.phone}\n`;
  if (params.fromCity) text += `Moving From: ${params.fromCity}\n`;
  if (params.toCity) text += `Moving To: ${params.toCity}\n`;
  if (params.date) text += `Preferred Date: ${params.date}\n`;
  if (params.message) text += `\nDetails: ${params.message}\n`;

  if (!params.service && !params.name) {
    text += 'I would like to get a free quote for my relocation.\n';
  }

  text += '\nPlease provide a quote. Thank you!';

  const encoded = encodeURIComponent(text);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export function openWhatsApp(params: WhatsAppParams = {}): void {
  window.open(buildWhatsAppUrl(params), '_blank');
}
