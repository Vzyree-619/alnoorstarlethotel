import { BiSolidPhoneCall } from 'react-icons/bi';
import Header from '../Components/Header/Header';
import styles from './contact.module.css';
import { MdLocationPin } from 'react-icons/md';
import { IoMailSharp } from 'react-icons/io5';
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaXTwitter,
} from 'react-icons/fa6';
import ContactForm from '../Components/contactForm/contactForm';
import Map from '../Components/map/Map';

export default function Contact() {
  return (
    <>
      <Header bgColor='white' />
      <section className={styles.contact}>
        <div className={styles.contactContainer}>
          <h1 className={styles.mainTitle}>Contact Us</h1>
          <div className={styles.contactRow}>
            <div className={styles.box}>
              <div className={styles.boxText}>
                <h1>Contact Information</h1>
                <p>Say something to start a live chat!</p>
              </div>
              <div className={styles.boxAbout}>
                <div className={styles.aboutItem}>
                  <BiSolidPhoneCall />
                  <span>+1012 3456 789</span>
                </div>
                <div className={styles.aboutItem}>
                  <IoMailSharp />
                  <span>info@alnoorstarlethotel.com</span>
                </div>
                <div className={styles.aboutItem}>
                  <MdLocationPin />
                  <span>
                    Near Global Filling Station, 411 Airport Road Skardu
                  </span>
                </div>
              </div>
              <div className={styles.circles}>
                <div></div>
                <div></div>
              </div>
              <div className={styles.contactIcon}>
                <div className={styles.icon}>
                  {/* <FaXTwitter /> */}
                  <FaWhatsapp />
                </div>
                <div className={styles.icon}>
                  <FaInstagram />
                </div>
                <div className={styles.icon}>
                  <FaFacebookF />
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
          <h1 className={styles.mainTitle}>Our Location</h1>
          <Map />
        </div>
      </section>
    </>
  );
}
