"use client";

import { useFormStatus } from 'react-dom';

export default function SubmitContactForm() {
  const status = useFormStatus();

  if (status.pending) {
    return <p>Sending Message...</p>;
  }

  return (
    <>
    
      <button type='submit'>Send Message</button>
    </>
  );
}