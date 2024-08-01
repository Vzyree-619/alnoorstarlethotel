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
              <Link href={'/admin/dashboard/garden'} className={styles.linkBox}>
                Garden
              </Link>
              <Link href={'/admin/dashboard/room'} className={styles.linkBox}>
                Room
              </Link>
              <Link
                href={'/admin/dashboard/dinning'}
                className={styles.linkBox}
              >
                Dinning
              </Link>
              <Link href={'/admin/dashboard/night'} className={styles.linkBox}>
                Night
              </Link>
              {/* <div className={styles.linkBox}>Rooom</div>
              <div className={styles.linkBox}>Dinning</div>
              <div className={styles.linkBox}>Night</div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
