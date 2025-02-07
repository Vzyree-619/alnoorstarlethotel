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
import Footer from '../Components/Footer/Footer';
import Link from 'next/link';

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
                  <span>03485367621</span>
                </div>
                <div className={styles.aboutItem}>
                  <IoMailSharp />
                  <span>alnoorstarlethotel@gmail.com</span>
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
                <Link
                  href={'https://wa.me/03334441547'}
                  target='blank'
                  className={styles.icon}
                >
                  {/* <FaXTwitter /> */}
                  <FaWhatsapp />
                </Link>
                <Link
                  href={
                    'https://www.instagram.com/alnoorhotelskardu?fbclid=IwY2xjawEWvIxleHRuA2FlbQIxMAABHXbRncimNfiy18NW4_blFW9KuOwy6wU5OBOSavSqupl8UHEPTF0WjLxioQ_aem_E3iNARyW4SU2KDANqyOaRw'
                  }
                  target='blank'
                  className={styles.icon}
                >
                  <FaInstagram />
                </Link>
                <Link
                  href={'https://www.facebook.com/alnoorguesthouseskardu'}
                  target='blank'
                  className={styles.icon}
                >
                  <FaFacebookF />
                </Link>
              </div>
            </div>
            <ContactForm />
          </div>
          {/* <Link href={}><Link/> */}
          <h1 className={styles.mainTitle}>Our Location</h1>
          <Map />
        </div>
        <Footer />
      </section>
    </>
  );
}
