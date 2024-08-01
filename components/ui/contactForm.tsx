'use client';
import styles from '@/app/Components/contactForm/contactForm.module.css';
import SubmitContactForm from './submitcontactForm';
import { useFormState } from 'react-dom';
export default function ContactForm({ action }) {
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
          <div className={styles.textarea}>
            <label className='' htmlFor=''>
              Message
            </label>
            <textarea
              required
              name='description'
              id=''
              placeholder='Write your message...'
            ></textarea>
            <SubmitContactForm />
            {state.errors && (
              <ul className='form-errors'>
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
