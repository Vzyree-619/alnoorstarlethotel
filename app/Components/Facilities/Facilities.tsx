import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import styles from './facilities.module.css';

interface Facilities {
  title: string;
  image: string;
}

const facilities = [
  {
    image: '/facilities1.png',
    title: 'Parking',
  },
  {
    image: '/facilities2.png',
    title: 'Pick & Drop',
  },
  {
    image: '/facilities3.png',
    title: 'Dining',
  },
  {
    image: '/facilities4.png',
    title: 'Fast Wifi',
  },
  {
    image: '/facilities5.png',
    title: 'Activities',
  },
];

export default function Facilities() {
  return (
    <section className={styles.facilities}>
      <h1>Facilities</h1>
      <div className={styles.facilitiesGrid}>
        {facilities.map((facility, index) => (
          <div className={styles.facilitiesBox}>
            <Image src={facility.image} width={50} height={50} alt='' />
            <p>{facility.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
