import Link from 'next/link';
import styles from '../../upload.module.css';
import { ImageUp } from 'lucide-react';
import Image from 'next/image';
import DashSideBar from '@/app/admin/DashSideBar/DashSideBar';
import DashHeader from '@/app/admin/DashHeader/DashHeader';

export default function DashboardManagement() {
  return (
    <section className={styles.dashboard}>
      <DashHeader />
      <div className={styles.dashboardContainer}>
        <div className={styles.dashboardRow}>
          <DashSideBar />
          <div className={styles.dashboardColumn}>
            <h1>Room</h1>
            <div className={styles.uploadDiv}>
              <span>
                {/* <ImageUp /> */}
                <Image
                  src={'/icon.png'}
                  width={100}
                  height={100}
                  alt='Upload Image'
                />
              </span>
              <h2>Drag & drop to upload</h2>
            </div>
            {/* <button> */}
            <label htmlFor='' className={styles.addImage}>
              <input type='file' name='Image' id='' />
              Upload
            </label>
            {/* </button> */}
            {/* <div className={styles.dashboardGrid}></div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
