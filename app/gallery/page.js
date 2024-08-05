import Image from 'next/image';
import BgImage from '../Components/BgImage/BgImage';
import Header from '../Components/Header/Header';
import styles from './gallery.module.css';
import Footer from '../Components/Footer/Footer';
import { getDiningImage } from '@/lib/sendDiningImg';
import { getGardenImage } from '@/lib/sendNightImg';
import { getNightImage } from '@/lib/sendNightImg';
import { getRoomImage } from '@/lib/sendRoomImg';

const GardenImage = [
  {
    image: '/roomImg2.png',
  },
  {
    image: '/garden/Frame29003.png',
  },
  {
    image: '/garden/Frame29002.png',
  },
  {
    image: '/gallery/img1.png',
  },
  {
    image: '/garden/Frame29002.png',
  },
  {
    image: '/garden/Frame29003.png',
  },
];

const RoomImage = [
  {
    image: '/roomImg2.png',
  },
  {
    image: '/roomImg1.png',
  },
  {
    image: '/gallery/img5.png',
  },
  {
    image: '/roomImg3.png',
  },
  {
    image: '/gallery/img7.png',
  },
  {
    image: '/roomImg4.png',
  },
  {
    image: '/luxurySuiteImg/img3.png',
  },
  {
    image: '/gallery/img9.png',
  },
  {
    image: '/gallery/img10.png',
  },
];

const DinningImage = [
  {
    image: '/gallery/img12.png',
  },
  {
    image: '/gallery/img11.png',
  },
  {
    image: '/gallery/img12.png',
  },
  {
    image: '/gallery/img11.png',
  },
  {
    image: '/gallery/img12.png',
  },
  {
    image: '/gallery/img11.png',
  },
];

const GalleryImage = [
  {
    image: '/gallery/img1.png',
  },
  {
    image: '/gallery/img1.png',
  },
  {
    image: '/gallery/img1.png',
  },
];

export default async function Gallery() {
  const diningImage = await getDiningImage();
  const nightImage = await getNightImage();
  // const roomImage = await getRoomImage()
  // const gardenImage = await getGardenImage()
  console.log(diningImage);
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
          <div className={styles.photoColumn}>
            <h1>Garden</h1>
            <div className={styles.photoGrid}>
              {GardenImage.map((image, index) => (
                <div key={index} className={styles.photoBox}>
                  <Image
                    className={styles.galleryImg}
                    src={image.image}
                    width={600}
                    height={600}
                    alt='Gallery Image'
                  />
                </div>
              ))}
            </div>
          </div>
          <div className={styles.photoColumn}>
            <h1>Room</h1>
            <div className={styles.photoGrid}>
              {RoomImage.map((image, index) => (
                <div key={index} className={styles.photoBox}>
                  <Image
                    className={styles.galleryImg}
                    src={image.image}
                    width={600}
                    height={600}
                    alt='Gallery Image'
                  />
                </div>
              ))}
            </div>
          </div>
          <div className={styles.photoColumn}>
            <h1>Night</h1>
            <div className={styles.photoGrid}>
              {nightImage.map((images, index) => (
                <div key={index} className={styles.photoBox}>
                  <Image
                    className={styles.galleryImg}
                    src={images.image_url}
                    width={600}
                    height={600}
                    alt='Gallery Image'
                  />
                </div>
              ))}
            </div>
          </div>
          <div className={styles.photoColumn}>
            <h1>Dining</h1>
            <div className={styles.photoGrid}>
              {diningImage.map((images, index) => (
                <div key={index} className={styles.photoBox}>
                  <Image
                    className={styles.galleryImg}
                    src={images.image_url}
                    width={600}
                    height={600}
                    alt='Gallery Image'
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
