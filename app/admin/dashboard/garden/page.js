import Link from 'next/link';
import styles from '../styles.module.css';
import DashHeader from '../../DashHeader/DashHeader';
import DashSideBar from '../../DashSideBar/DashSideBar';
import Image from 'next/image';

export default function DashboardManagement() {
  return (
    <section className={styles.dashboard}>
      <DashHeader />
      <div className={styles.dashboardContainer}>
        <div className={styles.dashboardRow}>
          <DashSideBar />
          <div className={styles.dashboardColumn}>
            <h1>Garden</h1>
            <div className={styles.dashboardBox}>
              <h1>Image</h1>
              <div className={styles.grid}>
                <Link
                  className={`${styles.linkBox} ${styles.upload}`}
                  href={'/admin/dashboard/garden/upload'}
                >
                  <Image
                    src='/icon.png'
                    height={50}
                    width={50}
                    alt='Upload Image'
                  />
                  <span>Click to add Image</span>
                </Link>
                <span className={styles.linkBox}>
                  <Image
                    src={'/uploadGarden/uploadImg1.png'}
                    width={500}
                    height={500}
                    alt='Image'
                    className={styles.img}
                  />
                </span>
                <span className={styles.linkBox}>
                  <Image
                    src={'/uploadGarden/uploadImg2.png'}
                    width={500}
                    height={500}
                    alt='Image'
                    className={styles.img}
                  />
                </span>
                <span className={styles.linkBox}>
                  <Image
                    src={'/uploadGarden/uploadImg3.png'}
                    width={500}
                    height={500}
                    alt='Image'
                    className={styles.img}
                  />
                </span>
                <span className={styles.linkBox}>
                  <Image
                    src={'/uploadGarden/uploadImg4.png'}
                    width={500}
                    height={500}
                    alt='Image'
                    className={styles.img}
                  />
                </span>
                <span className={styles.linkBox}>
                  <Image
                    src={'/uploadGarden/uploadImg5.png'}
                    width={500}
                    height={500}
                    alt='Image'
                    className={styles.img}
                  />
                </span>
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
