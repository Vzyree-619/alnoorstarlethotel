// import Toust from '@/app/Components/Toust/Toust';
import DashHeader from '../DashHeader/DashHeader';
import DashSideBar from '../DashSideBar/DashSideBar';
import styles from './reservation_requests.module.css';
import { getBookings } from '@/lib/sendBooking';





export default async function Message() {
  let bookings = await getBookings()
  return (
    <section className={styles.message}>
      <DashHeader />
      <div className={styles.messageContainer}>
        <DashSideBar />
        <div className={styles.messageColumn}>
          <h1>Reservation Requests</h1>
          <div className={styles.messageBox}>
            {/* <div className={styles.title}>
              <span>Name</span>
              <span>Room Type</span>
              <span>Guests</span>
              <span>Room</span>
              <span>Details</span>
            </div> */}
            <div className={styles.contentBox}>
              {bookings.map((contents, index) => (
                <div
                  key={index}
                  className={`${styles.title} ${styles.content}`}
                >
                  <div className={styles.contentDiv}>
                    Name:
                  <span>  {`${contents.firstName} ${contents.secondName}`}</span>
                  </div>
                  {/* <span>{contents.secondName}</span> */}
                  <textarea name="" id="" disabled>{contents.description}</textarea>
                  <div className={styles.contentDiv}>Email:  <span>{contents.emailAddress}</span></div>
                  <div className={styles.contentDiv}>Number:  <span>{contents.contactNumber}</span></div>
                  <div className={styles.contentDiv}>Guest:  <span>{contents.guests}</span></div>
                  <div className={styles.contentDiv}>Room Type:  <span>{contents.roomtype}</span></div>
                  <div className={styles.contentDiv}>Check-In-Date:  <span>{contents.checkIn}</span></div>
                  <div className={styles.contentDiv}>Check-Out-Date:  <span>{contents.checkOut}</span></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
