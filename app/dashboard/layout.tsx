import DashHeader from './DashHeader/DashHeader';
import DashSideBar from './DashSideBar/DashSideBar';
import styles from './dashboard.module.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <section className={styles.dashLayout}>{children}</section>;
}
