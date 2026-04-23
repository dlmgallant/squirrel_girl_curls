import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hot Girl Macros',
  description:
    'Fitness and macro coaching by Paige Rosenberg. Real-life habit coaching, confidence, and nutrition support.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
