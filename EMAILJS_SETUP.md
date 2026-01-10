# EmailJS Integracija - Uputstvo

Kontakt forma je spremna za integraciju sa EmailJS servisom. Pratite korake ispod da povežete formu sa vašim emailom.

## Korak 1: Registracija na EmailJS

1. Idite na https://www.emailjs.com/
2. Kliknite na "Sign Up" i kreirajte nalog
3. Verifikujte vaš email

## Korak 2: Kreiranje Email Servisa

1. U EmailJS dashboard-u idite na **Email Services**
2. Kliknite **Add New Service**
3. Izaberite vaš email provider (npr. Gmail, Outlook)
4. Pratite instrukcije za povezivanje
5. Sačuvajte **Service ID** (npr. "service_abc123")

## Korak 3: Kreiranje Email Template-a

1. U EmailJS dashboard-u idite na **Email Templates**
2. Kliknite **Create New Template**
3. Kopirajte sledeći template uEditor:

```
Predmet: Nova poruka sa sajta - {{subject}}

Ime: {{from_name}}
Email: {{from_email}}
Telefon: {{phone}}
Predmet: {{subject}}

Poruka:
{{message}}

---
Ova poruka je poslata sa kontakt forme na sajtu Lako Sistem.
```

4. Podesite:
   - **To Email**: Vaš email gde želite da primate poruke
   - **From Name**: Lako Sistem Kontakt Forma
   - **Reply To**: {{from_email}}

5. Sačuvajte **Template ID** (npr. "template_xyz456")

## Korak 4: Dobijanje Public Key

1. U EmailJS dashboard-u idite na **Account** -> **General**
2. Kopirajte **Public Key** (npr. "abc123XYZ")

## Korak 5: Instalacija EmailJS Paketa

U terminalu projekta pokrenite:

```bash
npm install @emailjs/browser
```

## Korak 6: Konfiguracija Kredencijala

Otvorite fajl `src/services/emailService.ts` i popunite kredencijale:

```typescript
export const EMAIL_CONFIG = {
  SERVICE_ID: 'vaš_service_id',     // Sa koraka 2
  TEMPLATE_ID: 'vaš_template_id',   // Sa koraka 3
  PUBLIC_KEY: 'vaš_public_key',     // Sa koraka 4
};
```

## Korak 7: Aktivacija EmailJS Funkcionalnosti

U fajlu `src/services/emailService.ts`, odkomnetujte EmailJS kod:

```typescript
export async function sendEmail(data: EmailData): Promise<boolean> {
  try {
    import emailjs from '@emailjs/browser';  // ← Odkomentovati

    const response = await emailjs.send(    // ← Odkomentovati
      EMAIL_CONFIG.SERVICE_ID,              // ← Odkomentovati
      EMAIL_CONFIG.TEMPLATE_ID,             // ← Odkomentovati
      data,                                 // ← Odkomentovati
      EMAIL_CONFIG.PUBLIC_KEY               // ← Odkomentovati
    );                                      // ← Odkomentovati

    console.log('Email uspešno poslat:', response.status);
    return true;

  } catch (error) {
    console.error('Greška pri slanju emaila:', error);
    return false;
  }
}
```

## Korak 8: Testiranje

1. Pokrenite projekat: `npm run dev`
2. Otvorite kontakt formu
3. Popunite i pošaljite test poruku
4. Proverite da li je email stigao na vaš inbox

## Napomene

- **Besplatni plan** EmailJS-a dozvoljava 200 emailova mesečno
- Sve poruke se čuvaju u EmailJS dashboard-u
- Možete dodati više Email Template-a za različite svrhe
- Preporučuje se postavljanje reCAPTCHA zaštite protiv spam-a

## Problemi i Rešenja

### Email ne stiže
- Proverite spam folder
- Uverite se da su svi kredencijali tačni
- Proverite da li ste verifikovali email u EmailJS

### "Service ID not found"
- Proverite da li ste aktivirali Email Service u EmailJS dashboard-u
- Proverite da li ste ukucali tačan Service ID

### CORS greška
- EmailJS Public Key mora biti dodat u projekat
- Proverite da li ste dozvolili domene u EmailJS Account Settings

## Dodatne Opcije

### Automatski Reply Email

U EmailJS template-u možete dodati Auto Reply:
1. Omogućite "Send Auto Reply"
2. Napravite template za automatsku poruku koja će biti poslata pošiljaocu

### Email Tracking

EmailJS omogućava praćenje:
- Koliko je emailova poslato
- Koji su bili neuspešni
- Statistika po template-ima

## Kontakt

Za dodatnu pomoć oko EmailJS integracije:
- Dokumentacija: https://www.emailjs.com/docs/
- Support: https://www.emailjs.com/contact/
