import Image from 'next/image';
import BgImage from '../Components/BgImage/BgImage';
import Header from '../Components/Header/Header';
import styles from './gallery.module.css';
import Footer from '../Components/Footer/Footer';

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
          <div className={styles.photoColumn}>
            <h1>Garden</h1>
            <div className={styles.photoGrid}>
              <div className={styles.photoBox}>
                <Image
                  className={styles.galleryImg}
                  src={'/gallery/img1.png'}
                  width={600}
                  height={600}
                  alt='Gallery Image'
                />
              </div>
              <div className={styles.photoBox}>
                <Image
                  className={styles.galleryImg}
                  src={'/garden/Frame29003.png'}
                  width={600}
                  height={600}
                  alt='Gallery Image'
                />
              </div>
              <div className={styles.photoBox}>
                <Image
                  className={styles.galleryImg}
                  src={'/garden/Frame29002.png'}
                  width={600}
                  height={600}
                  alt='Gallery Image'
                />
              </div>
              <div className={styles.photoBox}>
                <Image
                  className={styles.galleryImg}
                  src={'/gallery/img1.png'}
                  width={600}
                  height={600}
                  alt='Gallery Image'
                />
              </div>
              <div className={styles.photoBox}>
                <Image
                  className={styles.galleryImg}
                  src={'/garden/Frame29002.png'}
                  width={600}
                  height={600}
                  alt='Gallery Image'
                />
              </div>
              <div className={styles.photoBox}>
                <Image
                  className={styles.galleryImg}
                  src={'/garden/Frame29003.png'}
                  width={600}
                  height={600}
                  alt='Gallery Image'
                />
              </div>
            </div>
          </div>
          <div className={styles.photoColumn}>
            <h1>Room</h1>
            <div className={styles.photoGrid}>
              <div className={styles.photoBox}>
                <Image
                  className={styles.galleryImg}
                  src={'/roomImg2.png'}
                  width={600}
                  height={600}
                  alt='Gallery Image'
                />
              </div>
              <div className={styles.photoBox}>
                <Image
                  className={styles.galleryImg}
                  src={'/roomImg1.png'}
                  width={600}
                  height={600}
                  alt='Gallery Image'
                />
              </div>
              <div className={styles.photoBox}>
                <Image
                  className={styles.galleryImg}
                  src={'/gallery/img5.png'}
                  width={600}
                  height={600}
                  alt='Gallery Image'
                />
              </div>
              <div className={styles.photoBox}>
                <Image
                  className={styles.galleryImg}
                  src={'/roomImg3.png'}
                  width={600}
                  height={600}
                  alt='Gallery Image'
                />
              </div>
              <div className={styles.photoBox}>
                <Image
                  className={styles.galleryImg}
                  src={'/gallery/img7.png'}
                  width={600}
                  height={600}
                  alt='Gallery Image'
                />
              </div>
              <div className={styles.photoBox}>
                <Image
                  className={styles.galleryImg}
                  src={'/roomImg4.png'}
                  width={600}
                  height={600}
                  alt='Gallery Image'
                />
              </div>
              <div className={styles.photoBox}>
                <Image
                  className={styles.galleryImg}
                  src={'/luxurySuiteImg/img3.png'}
                  width={600}
                  height={600}
                  alt='Gallery Image'
                />
              </div>
              <div className={styles.photoBox}>
                <Image
                  className={styles.galleryImg}
                  src={'/gallery/img9.png'}
                  width={600}
                  height={600}
                  alt='Gallery Image'
                />
              </div>
              <div className={styles.photoBox}>
                <Image
                  className={styles.galleryImg}
                  src={'/gallery/img10.png'}
                  width={600}
                  height={600}
                  alt='Gallery Image'
                />
              </div>
            </div>
          </div>
          <div className={styles.photoColumn}>
            <h1>Dinning</h1>
            <div className={styles.photoGrid}>
              <div className={styles.photoBox}>
                <Image
                  className={styles.galleryImg}
                  src={'/gallery/img12.png'}
                  width={600}
                  height={600}
                  alt='Gallery Image'
                />
              </div>
              <div className={styles.photoBox}>
                <Image
                  className={styles.galleryImg}
                  src={'/gallery/img11.png'}
                  width={600}
                  height={600}
                  alt='Gallery Image'
                />
              </div>
              <div className={styles.photoBox}>
                <Image
                  className={styles.galleryImg}
                  src={'/gallery/img12.png'}
                  width={600}
                  height={600}
                  alt='Gallery Image'
                />
              </div>
              <div className={styles.photoBox}>
                <Image
                  className={styles.galleryImg}
                  src={'/gallery/img11.png'}
                  width={600}
                  height={600}
                  alt='Gallery Image'
                />
              </div>
              <div className={styles.photoBox}>
                <Image
                  className={styles.galleryImg}
                  src={'/gallery/img12.png'}
                  width={600}
                  height={600}
                  alt='Gallery Image'
                />
              </div>
              <div className={styles.photoBox}>
                <Image
                  className={styles.galleryImg}
                  src={'/gallery/img11.png'}
                  width={600}
                  height={600}
                  alt='Gallery Image'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
