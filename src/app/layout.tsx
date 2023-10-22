import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './reset.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ChatGPT-MR',
  description: 'ChatGPT MR team experiment prototype',
  icons: {
    icon: '/favicon.ico',
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <head />
    <body className={inter.className}>{children}</body>
  </html>
);

export default RootLayout;
