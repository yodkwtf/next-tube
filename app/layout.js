import Header from './components/Header';
import './globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '600', '700'],
  styles: ['italic'],
  subsets: ['latin-ext'],
});

export const metadata = {
  title: 'Yodkwtf Academy',
  description: 'Learn to code with Yodkwtf Academy',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
