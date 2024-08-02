
'use client';

import Link from 'next/link';
import { useFormStatus } from 'react-dom';

export default function SubmitImage() {
  const status = useFormStatus();

  if (status.pending) {
    return <p>Adding Image...</p>;
  }

  return (
    <>
      <button type='submit'>Upload Image</button>
    </>
  );
}


