import NavLink from '../NavLink/NavLink';
import styles from './mobileTopBar.module.css';

const TopBar: React.FC = () => {
  return (
    <div className={styles.topBar}>
      {/* TopBar content, like a mobile navigation or header */}
      <nav>
        <NavLink href={'/admin/dashboard'}>Rooms</NavLink>
        <NavLink href={'/admin/reservation_requests'}>
          Reservation Requests
        </NavLink>
        <NavLink href={'/admin/reservationDates'}>Reservation Dates</NavLink>
        <NavLink href={'/admin/messages'}>Messages</NavLink>
      </nav>
    </div>
  );
};

export default TopBar;
