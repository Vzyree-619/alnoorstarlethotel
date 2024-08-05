import Link from 'next/link';
import styles from '../styles.module.css';
import DashHeader from '../../DashHeader/DashHeader';
import DashSideBar from '../../DashSideBar/DashSideBar';
import Image from 'next/image';
import { getDiningImage } from '@/lib/sendDiningImg';
import { deleteImageById } from '@/lib/sendDiningImg';

const dinningUploadImage = [
  {
    src: '/uploadGarden/uploadImg1.png',
  },
  {
    src: '/uploadGarden/uploadImg2.png',
  },
  {
    src: '/uploadGarden/uploadImg3.png',
  },
  {
    src: '/uploadGarden/uploadImg4.png',
  },
  {
    src: '/uploadGarden/uploadImg5.png',
  },
];

export default async function DashboardManagement() {
  let diningImage = await getDiningImage()
  let deleteImage = deleteImageById(index)
  return (
    <section className={styles.dashboard}>
      <DashHeader />
      <div className={styles.dashboardContainer}>
        <div className={styles.dashboardRow}>
          <DashSideBar />
          <div className={styles.dashboardColumn}>
            <h1>Dinning</h1>
            <div className={styles.dashboardBox}>
              <h1>Image</h1>
              <div className={styles.grid}>
                <Link
                  className={`${styles.linkBox} ${styles.upload}`}
                  href={'/admin/dashboard/dinning/upload'}
                >
                  <Image
                    src='/icon.png'
                    height={50}
                    width={50}
                    alt='Upload Image'
                  />
                  <span>Click to add Image</span>
                </Link>

                {diningImage.map((image, index) => (
                  <span key={index} className={styles.linkBox}>
                    <Image
                      src={image.image_url}
                      width={500}
                      height={500}
                      alt='Image'
                      className={styles.img}
                    />
                  </span>
                ))}
                {/* <span className={styles.linkBox}>Image</span>
                <span className={styles.linkBox}>Image</span>
                <span className={styles.linkBox}>Image</span>
                <span className={styles.linkBox}>Image</span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
