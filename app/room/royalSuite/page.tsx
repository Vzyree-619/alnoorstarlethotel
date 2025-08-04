import { ReactElement } from 'react';
import { GiKnifeFork } from 'react-icons/gi';
import { PiTelevisionSimple } from 'react-icons/pi';
import { BiBath } from 'react-icons/bi';
import { IoBedOutline } from 'react-icons/io5';
import { FaWifi } from 'react-icons/fa6';
import { TbAirConditioning } from 'react-icons/tb';
import RoomSuit from '@/app/Components/RoomSuit/RoomSuit';
import styles from '../roomSuit.module.css';
import { MdOutlineHealthAndSafety } from 'react-icons/md';
import Review from '@/app/Components/Review/Review';

interface rightImages {
  rightImage: string;
  leftImage: string;
}
interface safetyItemProp {
  title: string;
  icon: ReactElement;
}

interface offerItemProp {
  title: string;
  icon: ReactElement;
}

const offerItem: offerItemProp[] = [
  {
    icon: <PiTelevisionSimple />,
    title: 'Television ',
  },
  {
    icon: <BiBath />,
    title: '2 Bathrooms',
  },
  {
    icon: <TbAirConditioning />,
    title: 'Air Conditioner',
  },
  {
    icon: <FaWifi />,
    title: 'Free Wifi',
  },
  {
    icon: <IoBedOutline />,
    title: '2 Bedrooms',
  },
];

const safetyItem: safetyItemProp[] = [
  {
    icon: <MdOutlineHealthAndSafety />,
    title: 'Daily Cleaning',
  },
  {
    icon: <MdOutlineHealthAndSafety />,
    title: 'Fire Extinguishers ',
  },
  {
    icon: <MdOutlineHealthAndSafety />,
    title: 'Disinfections and Sterilizations',
  },
  {
    icon: <MdOutlineHealthAndSafety />,
    title: 'Smoke Detectors',
  },
];

const rightImages = [
  {
    image: '/royalSuite/img1.png',
  },
  {
    image: '/royalSuite/img2.png',
  },
];

const leftImages = [
  {
    image: '/royalSuite/img3.png',
  },
  {
    image: '/royalSuite/img4.png',
  },
];
export default function roomSuit() {
  return (
    <>
      <RoomSuit
        images='/royalSuite/img5.png'
        rightImages={rightImages}
        leftImages={leftImages}
        para='Here are some pictures of Royal Suite!'
        mainTitle='Royal Suite'
        price='32,000'
      />
      <div className={styles.container}>
        <div className={styles.offer}>
          <div className={styles.offerContainer}>
            <h3>Offered Amenities</h3>
            <div className={styles.offerGrid}>
              {offerItem.map((item, index) => (
                <div key={index} className={styles.offerItem}>
                  <span className={styles.offerIcon}>{item.icon}</span>
                  <span>{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.safety}>
          <div className={styles.safetyContainer}>
            <h3>Safety and Hygiene</h3>
            <div className={styles.safetyGrid}>
              {safetyItem.map((item, index) => (
                <div key={index} className={styles.safetyItem}>
                  <span className={styles.safetyIcon}>{item.icon}</span>
                  <span>{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Review />
      </div>
    </>
  );
}
