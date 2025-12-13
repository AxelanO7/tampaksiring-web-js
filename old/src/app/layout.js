// src/app/layout.js
import './globals.css';
import { Playfair_Display, Montserrat } from 'next/font/google';
import Script from 'next/script';
import { Providers } from "./providers"; // Import Provider

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
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" 
        />
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css" 
        />
      </head>
      <body 
        className={`${playfair.variable} ${montserrat.variable}`}
        suppressHydrationWarning={true}
      >
        {/* Bungkus children dengan Providers */}
        <Providers>
            {children}
        </Providers>
        
        <Script 
            src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/js/all.min.js" 
            strategy="lazyOnload" 
        />
      </body>
    </html>
  );
}