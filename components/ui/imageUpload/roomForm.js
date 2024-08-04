'use client';

import Link from 'next/link';
import styles from '@/app/admin/dashboard/upload.module.css';
import { ImageUp } from 'lucide-react';
import Image from 'next/image';
import DashSideBar from '@/app/admin/DashSideBar/DashSideBar';
import DashHeader from '@/app/admin/DashHeader/DashHeader';
import SubmitImage from './diningImageSubmit';
import { useFormState } from 'react-dom';
import RoomImageSubmit from './roomImageSubmit';

export default function RoomImage({ action }) {
  const [state, formAction] = useFormState(action, {});
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
              <h2>Upload Image</h2>
            </div>
            {/* <button> */}
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
              <RoomImageSubmit />
            </form>
            {/* </button> */}
            {/* <div className={styles.dashboardGrid}></div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
