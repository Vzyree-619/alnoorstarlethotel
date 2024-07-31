"use client";
import styles from "@/app/booking/booking.module.css"

import { useFormStatus } from 'react-dom';

export default function SubmitBooking() {
  const status = useFormStatus();

  if (status.pending) {
    return <p>booking...</p>;
  }

  return (
    <>
    
    <button className={styles.bookNow}>Book Now</button>
    </>
  );

}