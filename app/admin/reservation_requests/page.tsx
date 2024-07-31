import DashHeader from '../DashHeader/DashHeader';
import DashSideBar from '../DashSideBar/DashSideBar';
import styles from './reservation_requests.module.css';

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

export default function Message() {
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
              {messages.map((content, index) => (
                <div
                  key={index}
                  className={`${styles.title} ${styles.content}`}
                >
                  <span>{content.name}</span>
                  <span>{content.roomType}</span>
                  <span>{content.guests}</span>
                  <span>{content.room}</span>
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
