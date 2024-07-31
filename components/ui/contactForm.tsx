"use client"
import styles from '@/app/Components/contactForm/contactForm.module.css';
import SubmitContactForm from './submitcontactForm';
import { useFormState } from 'react-dom';
export default function ContactForm({action}) {
    const [state, formAction] = useFormState(action, {});

  
  return (
    <section className={styles.contactForm}>
      <div className={styles.contactForm}>
        <form action={formAction}>
          <div className={styles.inputBox}>
            <label htmlFor=''>First Name</label>
            <input type='text' name='firstN' required />
          </div>
          <div className={styles.inputBox}>
            <label htmlFor=''>Last Name</label>
            <input type='text' name='secondN' required />
          </div>
          <div className={styles.inputBox}>
            <label htmlFor=''>Email</label>
            <input type='email' name='email' required />
          </div>
          <div className={styles.inputBox}>
            <label htmlFor=''>Phone Number</label>
            <input type='number' name='Number' required />
          </div>
          <div className={styles.select}>
            <h2>Select Subject</h2>
            <select name="option" id="">
              <option value="issue">issue</option> 
              <option value="nothing">issue</option> 
              <option value="great">issue</option> 
            </select>
            {/* <div className={styles.radioContainer}>
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
            </div> */}
          </div>
          <div className={styles.textarea}>
            <label className='' htmlFor=''>Message</label>
            <textarea
            required
              name='Message'
              id=''
              placeholder='Write your message...'
            ></textarea>
            <SubmitContactForm />
            {state.errors && (
          <ul className="form-errors">
            {state.errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
           
            
          </div>
        </form>
      </div>
    </section>
  );
}
