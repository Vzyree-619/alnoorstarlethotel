'use client';

import styles from '@/app/admin/dashboard/upload.module.css';
import Image from 'next/image';
import DashSideBar from '@/app/admin/DashSideBar/DashSideBar';
import DashHeader from '@/app/admin/DashHeader/DashHeader';

import { useFormState } from 'react-dom';
import DinningImageSubmit from './diningImageSubmit';
import GardenImageSubmit from './gardenImageSubmit';

export default function DiningImage({ action }) {
  const [state, formAction] = useFormState(action, {});
  return (
    <section className={styles.dashboard}>
      <DashHeader />
      <div className={styles.dashboardContainer}>
        <div className={styles.dashboardRow}>
          <DashSideBar />
          <div className={styles.dashboardColumn}>
            <h1>Garden</h1>
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
              <h2>Image Upload</h2>
            </div>
            <form className={styles.formUploadImage} action={formAction}>
              <label htmlFor='' className={styles.addImage}>
                <input
                  type='file'
                  placeholder='Choose Image'
                  name='ImageGarden'
                  id=''
                />

                {/* <input type='file' name='ImageDining' id='' /> */}
              </label>
              <GardenImageSubmit />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
