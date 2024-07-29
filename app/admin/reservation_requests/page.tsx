import Link from 'next/link';
import DashHeader from '../DashHeader/DashHeader';
import DashSideBar from '../DashSideBar/DashSideBar';
import styles from './reservation_requests.module.css';

export default function DashReservation() {
  return (
    <section className={styles.dashboard}>
      <DashHeader />
      <div className={styles.dashboardContainer}>
        <div className={styles.dashboardRow}>
          <DashSideBar />
          <div className={styles.dashboardColumn}>
            <h1>Reservation Requests</h1>
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
      </div>
    </section>
  );
}
