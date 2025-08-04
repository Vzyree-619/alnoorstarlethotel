import { LuSendHorizontal } from 'react-icons/lu';
import styles from './newsLetter.module.css';

export default function NewsLetter() {
  return (
    <section className={styles.newsLetter}>
      <div className={styles.newsLetterContainer}>
        <div className={styles.text}>
          <h1>NEWSLETTER</h1>
          <p>Subscribe To our Newsletter</p>
        </div>
        <form action=''>
          <input type='email' placeholder='Your Email' />
          <button>
            <LuSendHorizontal />
          </button>
        </form>
      </div>
    </section>
  );
}
