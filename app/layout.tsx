import './globals.css';
import type { Metadata } from 'next';
import { Orbitron, Inter } from 'next/font/google';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { LoadingScreen } from '@/components/layout/loading-screen';

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'NEXORY RAM | Elite DDR5 Memory & Gaming PCs',
  description:
    'Unlock extreme performance with NEXORY elite DDR5 RAM and custom gaming configurations built for power users.',
  openGraph: {
    title: 'NEXORY RAM | Elite DDR5 Memory & Gaming PCs',
    description: 'Elite DDR5 RAM and custom gaming configurations built for power users.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${orbitron.variable} ${inter.variable} font-inter antialiased`}>
        <LoadingScreen />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
