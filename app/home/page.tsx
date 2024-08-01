'use client';

import Image from 'next/image';
import Header from '../Components/Header/Header';
import styles from './home.module.css';
import Facilities from '../Components/Facilities/Facilities';
import AccordionPage from '../Components/Accordian/Accordian';
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
import Footer from '../Components/Footer/Footer';
import Link from 'next/link';

export default function Home() {
  const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);

  return (
    <main>
      <section className={styles.home}>
        <div className={styles.container}>
          <Header bgColor='transparent' />
          <div className={styles.center}>
            <div className={styles.content}>
              <div className={styles.contentInnerText}>
                <h1>
                  AL Noor <br /> Starlet Hotel
                </h1>
                <p>Experience the Starlet Shine!</p>
              </div>
              <form action=''>
                <div>
                  <label htmlFor=''>Check In</label>
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
                      <Calendar
                        mode='single'
                        selected={checkInDate || undefined}
                        onSelect={(date) => setCheckInDate(date || null)}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div>
                  <label htmlFor=''>Check Out</label>
                  <Popover>
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
                        {checkOutDate ? (
                          format(checkOutDate, 'PPP')
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className='w-auto p-0'>
                      <Calendar
                        mode='single'
                        selected={checkOutDate || undefined}
                        onSelect={(date) => setCheckOutDate(date || null)}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div>
                  <label htmlFor=''>Guest</label>
                  <Select>
                    <SelectTrigger className={styles.guest}>
                      <SelectValue placeholder='Select' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='1'>1</SelectItem>
                      <SelectItem value='2'>2</SelectItem>
                      <SelectItem value='3'>3</SelectItem>
                      <SelectItem value='4'>4</SelectItem>
                      <SelectItem value='5'>5</SelectItem>
                      <SelectItem value='6'>6</SelectItem>
                      <SelectItem value='7'>7</SelectItem>
                      <SelectItem value='8'>8</SelectItem>
                      <SelectItem value='9'>9</SelectItem>
                      <SelectItem value='10'>10</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  {/* <Button>Check Availability</Button> */}
                  <Link className={styles.checkButton} href='/room'>
                    Check Availability
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.gallery}>
        <h1 className={styles.title}>Why Choose Al Noor Starlet Hotel?</h1>
        <div className={styles.galleryContainer}>
          <div className={styles.galleryContent}>
            <div className={styles.contentText}>
              <h1>Stunning Views</h1>
              <p>
                Enjoy breathtaking views from our rooms and common areas.
                Whether it's a cityscape, garden, or scenic landscape, the
                picturesque vistas add a touch of tranquility to your stay.
              </p>
            </div>
            <div className={styles.contentImg}>
              <Image
                src={'/galleryImg1.png'}
                alt='Img'
                width={420}
                height={320}
                className={styles.galleryImg}
              />
            </div>
          </div>
          <div className={`${styles.galleryContent} ${styles.leftContent}`}>
            <div className={styles.contentText}>
              <h1>Exceptional Staff and Reception</h1>
              <p>
                From the moment you step into Al Noor Starlet Hotel, you'll be
                greeted by our friendly and professional reception team. Our
                staff is available 24/7 to assist with check-ins, travel
                arrangements, and any special requests, ensuring your stay is as
                comfortable and hassle-free as possible.
              </p>
            </div>
            <div className={styles.contentImg}>
              <Image
                src={'/galleryImg2.png'}
                alt='Img'
                width={420}
                height={320}
                className={styles.galleryImg}
              />
            </div>
          </div>
          <div className={styles.galleryContent}>
            <div className={styles.contentText}>
              <h1>Luxurious Rooms</h1>
              <p>
                Experience exceptional comfort in our elegantly designed rooms,
                featuring plush bedding and modern amenities to ensure a restful
                stay. Choose from a variety of room types, each offering unique
                features to suit your needs, from spacious suites to cozy single
                rooms.
              </p>
            </div>
            <div className={styles.contentImg}>
              <Image
                src={'/galleryImg3.png'}
                alt='Img'
                width={420}
                height={320}
                className={styles.galleryImg}
              />
            </div>
          </div>
        </div>
      </section>
      <AccordionPage />
      <Facilities />
      <Footer />
    </main>
  );
}
