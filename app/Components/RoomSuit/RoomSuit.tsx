import Image from 'next/image';
import styles from './roomSuit.module.css';
import Link from 'next/link';

interface SuitProp {
  mainTitle: string;
  rightImages: { image: string }[];
  leftImages: { image: string }[];
  images: string;
  para: string;
  price: string;
}

export default function RoomSuit({
  price,
  mainTitle,
  para,
  rightImages,
  leftImages,
  images,
}: SuitProp) {
  return (
    <section className={styles.roomSuit}>
      <div className={styles.suitContainer}>
        <h1 className={styles.mainTitle}>{mainTitle}</h1>
        <p>{para}</p>
        <div className={styles.imageGrid}>
          <div className={styles.columnImage1}>
            {rightImages.map((img, index) => (
              <div className={styles.imageBox} key={index}>
                <Image
                  className={styles.boxImg}
                  src={img.image}
                  alt=''
                  width={300}
                  height={300}
                />
              </div>
            ))}
          </div>
          <div className={`${styles.columnImage2} ${styles.columnImage1}`}>
            <div className={styles.imageBox}>
              <Image
                className={styles.boxImg}
                src={images}
                alt=''
                width={300}
                height={300}
              />
            </div>
            <div className={styles.second}>
              <h3>
                PKR {price} <sub>Per Night</sub>
              </h3>
              <Link href={'/booking'} className={styles.button}>
                {' '}
                Reserve Now
              </Link>
            </div>
          </div>
          <div className={styles.columnImage1}>
            {leftImages.map((img, index) => (
              <div className={styles.imageBox} key={index}>
                <Image
                  className={styles.boxImg}
                  src={img.image}
                  alt=''
                  width={300}
                  height={300}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
