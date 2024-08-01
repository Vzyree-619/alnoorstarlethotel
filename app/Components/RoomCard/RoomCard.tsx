import Image from 'next/image';
import styles from './roomCard.module.css';
import Link from 'next/link';
import { IoIosStar, IoIosStarHalf } from 'react-icons/io';
import { ReactElement } from 'react';
import { FaStarHalfAlt } from 'react-icons/fa';

interface RoomProp {
  roomImage: string;
  roomTitle: string;
  roomPrice: string;
  roomBeds: string;
  buttons: string[];
  icons: ReactElement[];
  href: string;
}

const roomData: RoomProp[] = [
  {
    roomImage: '/roomImg1.png',
    roomTitle: 'Family Suite',
    roomPrice: '28,000',
    roomBeds: '3 Beds (1 Master + 2 Single Bed)',
    buttons: [
      'Breakfast Included',
      'Air Conditioned',
      '4 Adults',
      'Free Cancellation',
      'Private Bathroom',
      'Kitchen',
    ],
    icons: [
      <IoIosStar key='star1' />,
      <IoIosStar key='star2' />,
      <IoIosStar key='star3' />,
      <IoIosStar key='star4' />,
      <FaStarHalfAlt key='star5' />,
    ],
    href: '/room/familySuite',
  },
  {
    roomImage: '/roomImg2.png',
    roomTitle: 'Luxury Suite',
    roomPrice: '23,000',
    roomBeds: '1 Bed (1 Master Bed)',
    buttons: [
      'Breakfast Included',
      'Air Conditioned',
      '2 Adults',
      'Free Cancellation',
      'Private Bathroom',
    ],
    icons: [
      <IoIosStar key='star1' />,
      <IoIosStar key='star2' />,
      <IoIosStar key='star3' />,
      <IoIosStar key='star4' />,
      <FaStarHalfAlt key='star5' />,
    ],
    href: '/room/luxurySuite',
  },
  {
    roomImage: '/roomImg3.png',
    roomTitle: 'Executive Suite',
    roomPrice: '23,000',
    roomBeds: '2 Bed (1 Master + 1 Single Bed) ',
    buttons: [
      'Breakfast Included',
      'Air Conditioned',
      '3 Adults',
      'Free Cancellation',
      'Private Bathroom',
    ],
    icons: [
      <IoIosStar key='star1' />,
      <IoIosStar key='star2' />,
      <IoIosStar key='star3' />,
      <IoIosStar key='star4' />,
      <FaStarHalfAlt key='star5' />,
    ],
    href: '/room/executiveSuite',
  },
  {
    roomImage: '/roomImg4.png',
    roomTitle: 'Executive Lite',
    roomPrice: '13,000',
    roomBeds: '2 Bed (1 Master + 1 Single Bed) ',
    buttons: [
      'Breakfast Included',
      'Without AC',
      '3 Adults',
      'Free Cancellation',
      'Private Bathroom',
    ],
    icons: [
      <IoIosStar key='star1' />,
      <IoIosStar key='star2' />,
      <IoIosStar key='star3' />,
      <IoIosStar key='star4' />,
      <FaStarHalfAlt key='star5' />,
    ],
    href: '/room/executiveLite',
  },
];

export default function RoomCard() {
  return (
    <div className={styles.roomColumn}>
      {roomData.map((roomContent, index) => (
        <div className={styles.roomRows} key={index}>
          <div className={styles.rowImg}>
            <Image
              src={roomContent.roomImage}
              width={350}
              height={325}
              alt='Room Image'
            />
          </div>
          <div className={styles.column}>
            <div className={styles.firstColumn}>
              {/* <div className={styles.first}> */}
              <Link href={roomContent.href} className={styles.title}>
                {roomContent.roomTitle}
              </Link>
              <Link href={'/booking'} className={styles.button}>Book Now</Link>
              {/* </div> */}
              {/* <div className={styles.second}> */}
              <h3>
                PKR {roomContent.roomPrice} <sub>Per Night</sub>
              </h3>
              <p>{roomContent.roomBeds}</p>
              {/* </div> */}
            </div>
            <div className={styles.secondColumn}>
              {roomContent.buttons.map((button, idx) => (
                <button
                  key={idx}
                  className={`${idx > 0 ? styles.transparentButton : ''} ${
                    styles.button
                  }`}
                >
                  {button}
                </button>
              ))}
            </div>
            <div className={styles.thirdColumn}>
              <h3>
                <b>Rating:</b>
                {roomContent.icons.map((icon, idx) => (
                  <span key={idx}>{icon}</span>
                ))}
              </h3>
              <Link href={roomContent.href} className={styles.detailsButton}>
                More Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
