<<<<<<< HEAD
import { Link } from 'lucide-react';
import { getMessages } from '@/lib/sendMessage';
=======
>>>>>>> dc645b4daf2c641633b5880980c16c77f10a59d3
import DashHeader from '../DashHeader/DashHeader';
import DashSideBar from '../DashSideBar/DashSideBar';
import styles from './message.module.css';

interface MessageProp {
  name: string;
  subject: string;
}

const messages: MessageProp[] = [
  { name: 'Ahmad Ali', subject: 'General Inquiry' },
  { name: 'Ahmad Ali', subject: 'General Inquiry' },
  { name: 'Ahmad Ali', subject: 'General Inquiry' },
  { name: 'Ahmad Ali', subject: 'General Inquiry' },
  { name: 'Ahmad Ali', subject: 'General Inquiry' },
  { name: 'Ahmad Ali', subject: 'General Inquiry' },
];

<<<<<<< HEAD
 

 export default async function ReservationDate() {
  const data1 =  await getMessages()
 console.log(data1)
=======
export default function Message() {
>>>>>>> dc645b4daf2c641633b5880980c16c77f10a59d3
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
              <span>Subject</span>
            </div>
<<<<<<< HEAD

            {data1.map((content, index) => (
              <div key={index} className={`${styles.title} ${styles.content}`}>
                <span>{`${content.firstName} ${content.secondName}`}</span>
                <span>{content.message1}</span>
                <div>
                
                  <button>See Message</button>
=======
            <div className={styles.contentBox}>
              {messages.map((content, index) => (
                <div
                  key={index}
                  className={`${styles.title} ${styles.content}`}
                >
                  <span>{content.name}</span>
                  <span>{content.subject}</span>
                  <div>
                    <button>See Message</button>
                  </div>
>>>>>>> dc645b4daf2c641633b5880980c16c77f10a59d3
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
