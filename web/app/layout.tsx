import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Strapi Next APP',
  description: 'Playground',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          'bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400'
        }
      >
        {children}
      </body>
    </html>
  );
}
