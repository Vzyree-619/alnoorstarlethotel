import DashHeader from './DashHeader/DashHeader';
import DashboardManagement from './Management/Management';
import styles from './dashboard.module.css';

export default function Dashboard() {
  return (
    <section className={styles.dashboard}>
      <div className={styles.dashboardContainer}>
        <h1>Room Management</h1>
        <DashboardManagement />
      </div>
    </section>
  );
}
