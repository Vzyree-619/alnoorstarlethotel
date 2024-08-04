'use client';

import Link from 'next/link';
import styles from '@/app/admin/dashboard/upload.module.css';
import { useFormStatus } from 'react-dom';

export default function NightImageSubmit() {
  const status = useFormStatus();

  if (status.pending) {
    return <p>Adding Image...</p>;
  }

  return (
    <>
       <button  className={styles.submitButton} type='submit'>
        Upload Image
      </button>
    </>
  );
}
