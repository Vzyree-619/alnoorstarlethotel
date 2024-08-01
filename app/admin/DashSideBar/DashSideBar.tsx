import NavLink from '../NavLink/NavLink';
import styles from './dashSideBar.module.css';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MdMenu } from 'react-icons/md';

export default function DashSideBar() {
  return (
    <>
      <div className={styles.responsive}>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <MdMenu />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {/* <DropdownMenuLabel></DropdownMenuLabel> */}
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <NavLink href={'/admin/dashboard'}>Rooms</NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem>
              {' '}
              <NavLink href={'/admin/reservation_requests'}>
                Reservation Requests
              </NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <NavLink href={'/admin/messages'}>Messages</NavLink>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className={styles.dashSideBar}>
        <nav>
          <NavLink href={'/admin/dashboard'}>Rooms</NavLink>
          <NavLink href={'/admin/reservation_requests'}>
            Reservation Requests
          </NavLink>
          <NavLink href={'/admin/messages'}>Messages</NavLink>
        </nav>
        <button className={styles.logOut}>LogOut</button>
      </div>
    </>
  );
}
