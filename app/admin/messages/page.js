import { Link } from 'lucide-react';
import { getMessages } from '@/lib/sendMessage';
import DashHeader from '../DashHeader/DashHeader';
import DashSideBar from '../DashSideBar/DashSideBar';
import styles from './message.module.css';



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
            {data1.map((content, index) => (
            <div
            key={index}
            className={`${styles.title} ${styles.content}`}
          >
            <div className={styles.contentDiv}>
              Name:
            <span>  {`${content.firstName} ${content.secondName}`}</span>
            </div>
            {/* <span>{contents.secondName}</span> */}
            <textarea name="" id="" disabled>{content.description}</textarea>
            <div className={styles.contentDiv}>Email:  <span>{content.emailAddress}</span></div>
            <div className={styles.contentDiv}>Number:  <span>{content.contactNumber}</span></div>
            {/* <div className={styles.contentDiv}>Guest:  <span>{contents.guests}</span></div> */}
            {/* <div className={styles.contentDiv}>Room Type:  <span>{contents.roomtype}</span></div> */}
            {/* <div className={styles.contentDiv}>Check-In-Date:  <span>12-OCT-2024</span></div> */}
            {/* <div className={styles.contentDiv}>Check-Out-Date:  <span>13-OCT-2024</span></div> */}
          </div>
            ))}
            {/* <div className={styles.name}></div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
