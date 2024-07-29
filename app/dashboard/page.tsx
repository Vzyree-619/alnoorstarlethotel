import Login from './login/page';
import DashHeader from './DashHeader/DashHeader';
import DashboardManagement from './Management/Management';
import styles from './dashboard.module.css';

export default function Dashboard() {
  return (
    <section className={styles.dashboard}>
      <div className={styles.dashboardContainer}>
        <Login />
      </div>
    </section>
  );
}
