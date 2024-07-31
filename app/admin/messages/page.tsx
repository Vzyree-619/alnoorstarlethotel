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
              <span>Subject</span>
            </div>
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
