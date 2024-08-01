import DashHeader from '../DashHeader/DashHeader';
import DashSideBar from '../DashSideBar/DashSideBar';
import styles from './reservation_requests.module.css';
import { getBookings } from '@/lib/sendBooking';

interface MessageProp {
  name: string;
  roomType: string;
  guests: number;
  room: number;
}

const messages: MessageProp[] = [
  {
    name: 'Ahmad Ali',
    roomType: 'Executive',
    guests: 5,
    room: 2,
  },
  {
    name: 'Ahmad Ali',
    roomType: 'Executive',
    guests: 5,
    room: 2,
  },
  {
    name: 'Ahmad Ali',
    roomType: 'Executive',
    guests: 5,
    room: 2,
  },
  {
    name: 'Ahmad Ali',
    roomType: 'Executive',
    guests: 5,
    room: 2,
  },
  {
    name: 'Ahmad Ali',
    roomType: 'Executive',
    guests: 5,
    room: 2,
  },
  {
    name: 'Ahmad Ali',
    roomType: 'Executive',
    guests: 5,
    room: 2,
  },
];

export default async function Message() {
  let bookings = await getBookings()

  return (
    <section className={styles.message}>
      <DashHeader />
      <div className={styles.messageContainer}>
        <DashSideBar />
        <div className={styles.messageColumn}>
          <h1>Messages</h1>
          <div className={styles.messageBox}>
            <div className={styles.title}>
              <span>Name</span>
              <span>Room Type</span>
              <span>Guests</span>
              <span>Room</span>
              <span>Details</span>
            </div>
            <div className={styles.contentBox}>
              {bookings.map((contents, index) => (
                <div
                  key={index}
                  className={`${styles.title} ${styles.content}`}
                >
                  <span>{contents.firstName}</span>
                  <span>{contents.secondName}</span>
                  <span>{contents.guests}</span>
                  <span>{contents.roomtype}</span>
                  <div>
                    <button>More Details</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
