import DashHeader from '../DashHeader/DashHeader';
import DashSideBar from '../DashSideBar/DashSideBar';
import styles from './reservationDates.module.css';

export default function ReservationDate() {
  return (
    <section className={styles.reservationDates}>
      <DashHeader />
      <div className={styles.reservationDatesContainer}>
        <DashSideBar />
      </div>
    </section>
  );
}
