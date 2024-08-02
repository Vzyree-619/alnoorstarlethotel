<<<<<<< HEAD
=======
"use client"
>>>>>>> efc30f0731400b2545a06a6a60480a0c855c7609
import Link from 'next/link';
import styles from '@/app/admin/dashboard/upload.module.css';
import { ImageUp } from 'lucide-react';
import Image from 'next/image';
import DashSideBar from '@/app/admin/DashSideBar/DashSideBar';
import DashHeader from '@/app/admin/DashHeader/DashHeader';
import SubmitImage from './submitImage';
<<<<<<< HEAD
import { useFormState } from 'react-dom';

export default function NightImage(){
    const [state, formAction] = useFormState(action, {});
=======
// import { useFormState } from 'react-dom';

export default function NightImage({action}){
    // const [state, formAction] = useFormState(action, {});
>>>>>>> efc30f0731400b2545a06a6a60480a0c855c7609
    return (
        <section className={styles.dashboard}>
          <DashHeader />
          <div className={styles.dashboardContainer}>
            <div className={styles.dashboardRow}>
              <DashSideBar />
              <div className={styles.dashboardColumn}>
                <h1>Night</h1>
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
<<<<<<< HEAD
                <form action={formAction}>
=======
                <form action="">
>>>>>>> efc30f0731400b2545a06a6a60480a0c855c7609
                <label htmlFor='' className={styles.addImage}>
                  <input type='file' name='ImageNight' id='' />
                
                </label>
                
                <SubmitImage/>
            
                </form>
               
                
                {/* </button> */}
                {/* <div className={styles.dashboardGrid}></div> */}
              </div>
            </div>
          </div>
        </section>
      );
}