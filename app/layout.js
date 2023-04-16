import Header from './components/Header';
import './globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '600', '700'],
  styles: ['italic'],
  subsets: ['latin-ext'],
});

export const metadata = {
  title: 'NextTube - Yodkwtf Academy',
  description:
    'A simple project built out to test the latest features of Next.js v13. The app shows a list of my YouTube videos using the API route handlers. It also includes data fetching from server components via the GitHub API.',
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
