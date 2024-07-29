import Image from 'next/image';
import BgImage from '../Components/BgImage/BgImage';
import Header from '../Components/Header/Header';
import styles from './gallery.module.css';

const galleryImage = [
  {
    image: '/gallery/img9.png',
    hover: 'Executive Suite',
  },
  {
    image: '/gallery/img8.png',
    hover: 'Executive Suite',
  },
  {
    image: '/gallery/img2.png',
    hover: 'Executive Suite',
  },
  {
    image: '/gallery/img3.png',
    hover: 'Executive Suite',
  },
  {
    image: '/gallery/img5.png',
    hover: 'Executive Suite',
  },
  {
    image: '/gallery/img8.png',
    hover: 'Executive Suite',
  },
  {
    image: '/gallery/img1.png',
    hover: 'Executive Suite',
  },
  {
    image: '/gallery/img10.png',
    hover: 'Executive Suite',
  },
  {
    image: '/gallery/img8.png',
    hover: 'Executive Suite',
  },
  {
    image: '/gallery/img4.png',
    hover: 'Executive Suite',
  },
  {
    image: '/gallery/img4.png',
    hover: 'Executive Suite',
  },
];

export default function Gallery() {
  return (
    <section className={styles.gallery}>
      <Header bgColor='white' />
      <BgImage title='Gallery' bgImage='/roomBg.png' />
      <div className={styles.galleryContainer}>
        <span>
          Discover the elegance and charm of our hotel in stunning visuals of
          our rooms, dining, and surroundings.
        </span>
        <div className={styles.photoContainer}>
          {galleryImage.map((image, index) => (
            <Image
              className={styles.galleryImage}
              src={image.image}
              key={index}
              width={200}
              height={200}
              alt='Gallery Images'
            />
          ))}
        </div>
      </div>
    </section>
  );
}
