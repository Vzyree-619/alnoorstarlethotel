import Link from 'next/link';
import styles from './thankYou.module.css';

interface ThankYouProp {
  title: string;
  para: string;
}

export default function ThankYou({ title, para }: ThankYouProp) {
  return (
    // <div className={styles.container}>
    <div className={styles.box}>
      <div className={styles.border}>
        <h1>{title}</h1>
        <p>{para}</p>
        <Link href='/' className={styles.ok}>OK</Link>
      </div>
    </div>
    // </div>
  );
}
