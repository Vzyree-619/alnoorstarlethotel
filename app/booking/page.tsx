'use client';

import { BookingSubmission } from "@/actions/action";
import SubmitBooking from "@/components/ui/bookingForm";


export default function Booking() {
  return <SubmitBooking action={BookingSubmission}/>
  
}
