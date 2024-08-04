'use client';

import styles from '@/app/admin/dashboard/upload.module.css';
import Link from 'next/link';
import { useFormStatus } from 'react-dom';

export default function DinningImageSubmit() {
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
