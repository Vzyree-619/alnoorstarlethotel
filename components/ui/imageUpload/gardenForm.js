
"use client"
import Link from 'next/link';
import styles from '@/app/admin/dashboard/upload.module.css'
import { ImageUp } from 'lucide-react';
import Image from 'next/image';
import DashSideBar from '@/app/admin/DashSideBar/DashSideBar';
import DashHeader from '@/app/admin/DashHeader/DashHeader';
import SubmitImage from '@/components/ui/imageUpload/submitImage';
import { useFormState } from 'react-dom';

export default function GardenImage({action}){
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

                <form action={formAction}>
                <label htmlFor='' className={styles.addImage}>
                  <input type='file' name='ImageGarden' id='' />
                  
                </label>
                <SubmitImage/>
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