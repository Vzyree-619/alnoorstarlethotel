import Link from 'next/link';
import DashSideBar from '../DashSideBar/DashSideBar';
import styles from './management.module.css';

export default function DashboardManagement() {
  return (
    <section className={styles.management}>
      <div className={styles.managementGrid}>
        <Link href={'/'} className={styles.linkBox}>
          Family Suite
        </Link>
        <Link href={'/'} className={styles.linkBox}>
          Luxury Suite
        </Link>
        <Link href={'/'} className={styles.linkBox}>
          Executive Suite
        </Link>
        <Link href={'/'} className={styles.linkBox}>
          Executive Lite
        </Link>
      </div>
    </section>
  );
}
