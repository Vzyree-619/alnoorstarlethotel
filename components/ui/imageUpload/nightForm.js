"use client"
import Link from 'next/link';
import styles from '@/app/admin/dashboard/upload.module.css';
import { ImageUp } from 'lucide-react';
import Image from 'next/image';
import DashSideBar from '@/app/admin/DashSideBar/DashSideBar';
import DashHeader from '@/app/admin/DashHeader/DashHeader';
import SubmitImage from './submitImage';
import { useFormState } from 'react';

export default function NightImage({action}){
    const [state, formAction] = useFormState(action, {});
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
                <form action={formAction}>
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