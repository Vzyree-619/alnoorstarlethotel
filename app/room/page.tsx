'use client';

import RoomCard from '../Components/RoomCard/RoomCard';
import styles from './room.module.css';
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
import { useState } from 'react';

export default function Gallery() {
  const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);

  return (
    <>
      <main className={styles.roomMain}>
        <section className={styles.formContainer}>
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
              <Button className={styles.checkButton}>Check Availability</Button>
            </div>
          </form>
        </section>
        {/* <section className={styles.mainRoom}> */}
        <section className={styles.roomCard}>
          <RoomCard />
        </section>
        {/* </section> */}
      </main>
    </>
  );
}
