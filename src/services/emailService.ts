import emailjs from '@emailjs/browser';

// 🔧 KONFIGURACIJA — popuni sa tačnim podacima iz EmailJS naloga
export const EMAIL_CONFIG = {
  SERVICE_ID: 'service_9bbokt4',   // npr. "service_xxxxxxx"
  TEMPLATE_ID: 'template_mago39s', // npr. "template_xxxxxxx"
  PUBLIC_KEY: 'o-lpKYhy8afcNo3kJ', // iz EmailJS → Account → API keys (Public key)
};

// 📤 Tip podataka koje šaljemo EmailJS-u
export interface EmailData {
  from_name: string;   // Ime pošiljaoca
  from_email: string;  // Email pošiljaoca
  phone: string;       // Telefon pošiljaoca
  subject: string;     // Predmet poruke
  message: string;     // Sadržaj poruke
}

// 🚀 Funkcija za slanje emaila
export async function sendEmail(data: EmailData): Promise<boolean> {
  try {
    console.log('📨 Šaljem email sa podacima:', data);

    const response = await emailjs.send(
      EMAIL_CONFIG.SERVICE_ID,
      EMAIL_CONFIG.TEMPLATE_ID,
      data,
      EMAIL_CONFIG.PUBLIC_KEY
    );

    console.log('✅ Email uspešno poslat:', response.status, response.text);
    return response.status === 200;
  } catch (error) {
    console.error('❌ Greška pri slanju emaila:', error);
    return false;
  }
}

// ✉️ Validacija email adrese
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// 📞 Validacija telefona (srpski format, opcioni)
export function isValidPhone(phone: string): boolean {
  if (!phone) return true; // Telefon nije obavezan
  const phoneRegex = /^(\+381|0)[0-9]{8,9}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
}
