import BgImage from '../Components/BgImage/BgImage';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Header bgColor='white' />
      <BgImage title='Rooms' bgImage='/roomBg.png' />
      {children}
      <Footer />
    </section>
  );
}
