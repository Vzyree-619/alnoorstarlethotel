import styles from './dashSideBar.module.css';
import NavLink from '../NavLink/NavLink';

export default function DashSideBar() {
  return (
    <div className={styles.dashSideBar}>
      <nav>
        <NavLink href={'/admin/dashboard'}>Rooms</NavLink>
        <NavLink href={'/admin/reservation_requests'}>
          Reservation Requests
        </NavLink>
        <NavLink href={'/admin/reservationDates'}>Reservation Dates</NavLink>
        <NavLink href={'/messages'}>Messages</NavLink>
      </nav>
      <button className={styles.logOut}>LogOut</button>
    </div>
  );
}
