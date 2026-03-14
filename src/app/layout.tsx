import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import PWA from "@/components/PWA"; // Assure-toi que le chemin est correct

export const metadata: Metadata = {
  title: 'Toulouse Play Games',
  description: 'The premier board game community in Toulouse.',
  manifest: '/manifest.json', // Indispensable pour la PWA
  themeColor: '#E0FFFF',     // La couleur de la barre d'état sur mobile
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'TPG Sport',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link 
          rel="preconnect" 
          href="https://fonts.gstatic.com" 
          crossOrigin="anonymous" 
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        {/* Le composant PWA gère l'enregistrement du Service Worker côté client */}
        <PWA /> 
        
        {children}
        
        <Toaster />
      </body>
    </html>
  );
}