// src/app/layout.js
import './globals.css';
import { Playfair_Display, Montserrat } from 'next/font/google';
import Providers from './providers';

// Konfigurasi Font Google Sheets
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-playfair',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-montserrat',
});

export const metadata = {
  title: 'Tampaksiring: Pusaka Alam dan Petualangan Abadi',
  description: 'Website Desa Wisata Tampaksiring',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${playfair.variable} ${montserrat.variable}`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}