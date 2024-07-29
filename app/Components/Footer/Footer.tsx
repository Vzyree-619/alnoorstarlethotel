import Image from 'next/image';
import styles from './footer.module.css';
import Link from 'next/link';
import {
  FaInstagram,
  FaLinkedinIn,
  FaSquareFacebook,
  FaXTwitter,
} from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <Image
            className={styles.logo}
            src={'/footerLogo1.png'}
            height={150}
            width={150}
            alt='Logo'
          />
          <p className={styles.footerPara}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
          </p>
        </div>
        <div className={`${styles.footerContent} ${styles.footerList}`}>
          <h3>Hotel</h3>
          <Link href={'/'}>About Us</Link>
          <Link href={'/'}>Legal Information</Link>
          <Link href={'/'}>Contact Us</Link>
          <Link href={'/'}>Gallery</Link>
        </div>
        <div className={`${styles.footerContent} ${styles.footerList}`}>
          <h3>Help Center</h3>
          <Link href={'/'}>Rooms</Link>
          <Link href={'/'}>Location Map</Link>
          <Link href={'/'}>Why Us?</Link>
          <Link href={'/'}>FAQs</Link>
        </div>
        <div className={`${styles.footerContent} ${styles.footerInfo}`}>
          <h3>Contact Info</h3>
          <p>Phone: 1234567890</p>
          <p>Email: info@alnoorstarlethotel.com</p>
          <p className={styles.lineHeight}>
            Location: Near Global Filling Station, Airport road, Skardu
          </p>
          <div className={styles.mediaLink}>
            <Link href={'/'}>
              <FaSquareFacebook />
            </Link>
            <Link href={'/'}>
              <FaXTwitter />
            </Link>
            <Link href={'/'}>
              <FaInstagram />
            </Link>
            <Link href={'/'}>
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p> &copy; 2024 AL Noor Starlet Hotel | All rights reserved</p>
        <p>developed & designed by 619 Technologies</p>
      </div>
    </footer>
  );
}
