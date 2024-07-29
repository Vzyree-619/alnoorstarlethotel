import Link from 'next/link';
import DashSideBar from '../DashSideBar/DashSideBar';
import DashHeader from '../DashHeader/DashHeader';
import styles from './management.module.css';

export default function DashboardManagement() {
  return (
    <section className={styles.dashboard}>
      <DashHeader />
      <div className={styles.dashboardContainer}>
        <h1>Room Management</h1>
        <div className={styles.dashboardRow}>
          <DashSideBar />
          <div className={styles.dashboardGrid}>
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
        </div>
      </div>
    </section>
  );
}
