import Link from 'next/link';
import styles from './dashSideBar.module.css';

export default function DashSideBar() {
  return (
    <div className={styles.dashSideBar}>
      <nav>
        <Link href={'/'}>Rooms</Link>
        <Link href={'/dashboard/dashReservatoin'}>Reservation Requests</Link>
        <Link href={'/'}>Reservation Dates</Link>
        <Link href={'/'}>Messages</Link>
      </nav>
      <button className={styles.logOut}>LogOut</button>
    </div>
  );
}
