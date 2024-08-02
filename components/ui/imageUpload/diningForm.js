



'use client';

import Link from 'next/link';
import styles from  '@/app/admin/dashboard/upload.module.css';
import { ImageUp } from 'lucide-react';
import Image from 'next/image';
import DashSideBar from '@/app/admin/DashSideBar/DashSideBar';
import DashHeader from '@/app/admin/DashHeader/DashHeader';

<<<<<<< HEAD
import SubmitImage from './submitImage';
import { useFormState } from 'react-dom';
=======

import { useFormState } from 'react-dom';
import SubmitImage from './submitImage';


>>>>>>> efc30f0731400b2545a06a6a60480a0c855c7609
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
<<<<<<< HEAD
            <form action={formAction}>
            <label htmlFor='' className={styles.addImage}>
<<<<<<< HEAD:app/admin/dashboard/garden/upload/page.tsx
              <input type='file' name='ImageGarden' id='' />
              Upload
=======
              <input type='file' name='ImageDining' id='' />
              
              
>>>>>>> 6eb562e4195b8a3f0ef7dcc50f607858a18c3646:components/ui/imageUpload/diningForm.js
            </label>
             <SubmitImage/>
=======
<<<<<<<< HEAD:app/admin/dashboard/dinning/upload/page.tsx
            <form action="">
            <label htmlFor='' className={styles.addImage}>
              <input type='file' name='ImageDining' id='' />
              Upload
              <button>upload</button>
            </label>
========
            <form action=''>
            <label htmlFor='' className={styles.addImage}>
              <input type='file' name='ImageDining' id='' />
              
              
            </label>
             <SubmitImage/>
>>>>>>>> efc30f0731400b2545a06a6a60480a0c855c7609:components/ui/imageUpload/diningForm.js
>>>>>>> efc30f0731400b2545a06a6a60480a0c855c7609
            </form>
            {/* <button> */}
            
            {/* </button> */}
            {/* <div className={styles.dashboardGrid}></div> */}
          </div>
        </div>
      </div>
    </section>
  );

}