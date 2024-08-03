'use client';

import Link from 'next/link';
import styles from '@/app/admin/dashboard/upload.module.css';
import { ImageUp } from 'lucide-react';
import Image from 'next/image';
import DashSideBar from '@/app/admin/DashSideBar/DashSideBar';
import DashHeader from '@/app/admin/DashHeader/DashHeader';

import { useFormState } from 'react-dom';
import SubmitImage from './submitImage';

export default function DiningImage({ action }) {
  const [state, formAction] = useFormState(action, {});
  return (
    <section className={styles.dashboard}>
      <DashHeader />
      <div className={styles.dashboardContainer}>
        <div className={styles.dashboardRow}>
          <DashSideBar />
          <div className={styles.dashboardColumn}>
            <h1>Dinning</h1>
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
            <form action={formAction}>
              <label htmlFor='' className={styles.addImage}>
                <input type='file' name='ImageGarden' id='' />
                Upload
                <input type='file' name='ImageDining' id='' />
              </label>
              <SubmitImage />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
