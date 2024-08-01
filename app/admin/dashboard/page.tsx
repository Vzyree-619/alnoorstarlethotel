import Link from 'next/link';
import DashSideBar from '../DashSideBar/DashSideBar';
import DashHeader from '../DashHeader/DashHeader';
import styles from './dashboard.module.css';

export default function DashboardManagement() {
  return (
    <section className={styles.dashboard}>
      <DashHeader />
      <div className={styles.dashboardContainer}>
        <div className={styles.dashboardRow}>
          <DashSideBar />
          <div className={styles.dashboardColumn}>
            <h1>Room Management</h1>
            <div className={styles.dashboardGrid}>
              {/* <Link href={'/'} className={styles.linkBox}>
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
              </Link> */}
              <div className={styles.linkBox}>Garden</div>
              <div className={styles.linkBox}>Dinning</div>
              <div className={styles.linkBox}>Rooom</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
