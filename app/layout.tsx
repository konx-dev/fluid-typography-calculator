import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Fluid Typography Calculator',
  description: 'Next.js 14 | TypeScript | TailwindCSS | Shadcn/ui '
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} font-primary`}>
      <body>{children}</body>
    </html>
  );
}
