import { Link } from 'lucide-react';
import { getMessages } from '@/lib/sendMessage';
import DashHeader from '../DashHeader/DashHeader';
import DashSideBar from '../DashSideBar/DashSideBar';
import styles from './message.module.css';

interface messageProp {
  name: String;
  subject: String;
}

export default async function ReservationDate() {
  const data1 = await getMessages();
  console.log(data1);
  return (
    <section className={styles.message}>
      <DashHeader />
      <div className={styles.messageContainer}>
        <DashSideBar />{' '}
        <div className={styles.messageColumn}>
          <h1>Messages</h1>
          <div className={styles.messageBox}>
            <div className={styles.title}>
              <span>Name</span>
              <span>Subject</span>
            </div>

            {data1.map((content, index) => (
              <div key={index} className={`${styles.title} ${styles.content}`}>
                <span>{`${content.firstName} ${content.secondName}`}</span>
                <span>{content.description}</span>
                <span>{content.email}</span>
                <div>{/* <button>See Message</button> */}</div>
              </div>
            ))}
            {/* <div className={styles.name}></div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
