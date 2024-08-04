'use client';

import Link from 'next/link';
import { useFormStatus } from 'react-dom';
import styles from '@/app/admin/dashboard/upload.module.css';

export default function GardenImageSubmit() {
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
