import Image from 'next/image';
import BgImage from '../Components/BgImage/BgImage';
import Header from '../Components/Header/Header';
import styles from './gallery.module.css';
import Footer from '../Components/Footer/Footer';
import { getDiningImage } from '@/lib/sendDiningImg';
import { getGardenImage } from '@/lib/sendGardenImg';
import { getNightImage } from '@/lib/sendNightImg';
import { getRoomImage } from '@/lib/sendRoomImg';



export default async function Gallery() {
  const diningImage = await getDiningImage();
  const nightImage = await getNightImage();
  const roomImage = await getRoomImage()
  const gardenImage = await getGardenImage()

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
              {gardenImage.map((image, index) => (
                <div key={index} className={styles.photoBox}>
                  <Image
                    className={styles.galleryImg}
                    src={image.image_url}
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
              {roomImage.map((image, index) => (
                <div key={index} className={styles.photoBox}>
                  <Image
                    className={styles.galleryImg}
                    src={image.image_url}
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
