"use client"

import SubmitBooking from './bookingsubmit';
import Image from 'next/image';
import Header from '@/app/Components/Header/Header';
import styles from '@/app/booking/booking.module.css';
import Facilities from '@/app/Components/Facilities/Facilities';
import AccordionPage from '@/app/Components/Accordian/Accordian';
import React, { useState } from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useFormState } from 'react-dom';
import {
  FaFacebook,
  FaPhone,
  FaSquareFacebook,
  FaWhatsapp,
} from 'react-icons/fa6';
import Link from 'next/link';
export default function bookingForm({ action }) {
  const [state, formAction] = useFormState(action, {});
  

  // const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  // const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);
  return (
    <section className={styles.booking}>
      <Header bgColor='transparent' />
      <div className={styles.bookingContainer}>
        <h1>Booking</h1>
        <span className={styles.span}>Enter Your Information</span>
        <form action={formAction} className={styles.form}>
          <div>
            <label  htmlFor='firstName'>First Name:</label>
            <input name='firstName' required type='text' />
          </div>
          <div>
            <label htmlFor='lastName'>Last Name:</label>
            <input name='lastName' required type='text' />
          </div>
          <div>
            {/* <label htmlFor=''>Check In:</label>
            <Popover>
              <PopoverTrigger 
                className={`${styles.input} ${styles.checkInDate}`}
                asChild
              >
                <Button
                  variant={'outline'}
                  className={
                    'input w-[180px] justify-start text-left font-normal'
                  }
                >
                  <CalendarIcon className='mr-2 h-4 w-4' />
                  {checkInDate ? (
                    format(checkInDate, 'PPP')
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className='w-auto p-0'>
                <Calendar required
                  mode='single'
                  selected={checkInDate || undefined}
                  onSelect={(date) => setCheckInDate(date || null)}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div>
            <label htmlFor=''>Check Out:</label> */}
            {/* <Popover>
              <PopoverTrigger
                className={`${styles.input} ${styles.checkOutDate}`}
                asChild 
              >
                <Button
                  variant={'outline'}
                  className={
                    'input w-[180px] justify-start text-left font-normal'
                  }
                >
                  <CalendarIcon className='mr-2 h-4 w-4' />
                  {checkOutDate   ? (
                    format(checkOutDate, 'PPP')
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className='w-auto p-0'>
                <Calendar  required
                  mode='single'
                  selected={checkOutDate || undefined}
                  onSelect={(date) => setCheckOutDate(date || null)}
                  initialFocus
                />
              </PopoverContent>
            </Popover> */}
          </div>
          <div>
            <label htmlFor=''>Whatsapp No:</label>
            <input required type='number' name='Number' />
          </div>
          <div>
            <label htmlFor=''>No of Guests:</label>
            <input required type='number' name='guests' />
          </div>
          <div>
            <label htmlFor=''>Email Address:</label>
            <input required type='email'  name='emailAdd'/>
          </div>
          <div>
            <label  htmlFor=''>Guest:</label>
            <Select name='roomtype' required>
              <SelectTrigger className={styles.guest}>
                <SelectValue placeholder='Room Type' />
              </SelectTrigger>
              <SelectContent >
                <SelectItem  value='1'>Family Suite</SelectItem>
                <SelectItem value='2'>Executive Suite</SelectItem>
                <SelectItem value='3'>Executive Lite</SelectItem>
                <SelectItem value='4'>Luxury Suite</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className={styles.message}>
            <label htmlFor=''>Any message or specific request!</label>
            <textarea name='description' id=''></textarea>
          </div>
          <div className={styles.buttonDiv}>
            <SubmitBooking/>
          </div>
          <div className={styles.iconDiv}>
            {/* <button className={styles.bookNow}>Book Now</button> */}
            <Link href={'https://wa.me/03334441547'}>
              <FaWhatsapp />
            </Link>
            <Link
              href={'https://www.facebook.com/alnoorguesthouseskardu'}
              target='blank'
            >
              <FaSquareFacebook />
            </Link>
            <Link href={''}>
              <FaPhone />
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
