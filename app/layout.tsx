import { Inter } from 'next/font/google';
import './globals.css';
import Footer from './Components/Footer/Footer';
// import { LoadingProvider } from './contexts/LoadingContext'; // Adjusted import path
// import ClientLayout from './Components/ClientLayout/ClientLayout'; // Adjusted import path

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'All Noor',
  description: 'All Noor Guest House',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <LoadingProvider>
    <html lang='en'>
      <body className={inter.className}>
        {/* <ClientLayout> */}
        <main>{children}</main>
        {/* <Footers /> */}
        {/* </ClientLayout> */}
      </body>
    </html>
    // </LoadingProvider>
  );
}
