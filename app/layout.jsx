import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/theme.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ClientScripts from '../components/ClientScripts';

export const metadata = {
  title: 'Gram Panchayat',
  description: 'Gram Panchayat Website'
};

export default function RootLayout({ children }) {
  return (
    <html lang="mr">
      <body>
        <Header />
        <ClientScripts /> {/* client-only JS */}
        <main className="container my-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
