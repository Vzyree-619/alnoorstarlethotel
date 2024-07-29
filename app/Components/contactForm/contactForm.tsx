import styles from './contactForm.module.css';

export default function ContactForm() {
  return (
    <section className={styles.contactForm}>
      <div className={styles.contactForm}>
        <form action=''>
          <div className={styles.inputBox}>
            <label htmlFor=''>First Name</label>
            <input type='text' />
          </div>
          <div className={styles.inputBox}>
            <label htmlFor=''>Last Name</label>
            <input type='text' />
          </div>
          <div className={styles.inputBox}>
            <label htmlFor=''>Email</label>
            <input type='email' />
          </div>
          <div className={styles.inputBox}>
            <label htmlFor=''>Phone Number</label>
            <input type='number' />
          </div>
          <div className={styles.select}>
            <h2>Select Subject</h2>
            <div className={styles.radioContainer}>
              <div className={styles.radioBox}>
                <input name='option' type='radio' />
                <span>General Inquiry</span>
              </div>
              <div className={styles.radioBox}>
                <input name='option' type='radio' />
                <span>Booking</span>
              </div>
              <div className={styles.radioBox}>
                <input name='option' type='radio' />
                <span>Complaint</span>
              </div>
              <div className={styles.radioBox}>
                <input name='option' type='radio' />
                <span>Other</span>
              </div>
            </div>
          </div>
          <div className={styles.textarea}>
            <label htmlFor=''>Message</label>
            <textarea
              name=''
              id=''
              placeholder='Write your message...'
            ></textarea>
            <button>Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
}
