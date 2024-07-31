import Image from 'next/image';
import styles from './footer.module.css';
import Link from 'next/link';
import {
  FaInstagram,
  FaLinkedinIn,
  FaSquareFacebook,
  FaWhatsapp,
  FaXTwitter,
} from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={`${styles.footerContent} ${styles.footerText}`}>
          <Image
            className={styles.logo}
            src={'/footerLogo1.png'}
            height={150}
            width={150}
            alt='Logo'
          />
          <p className={styles.footerPara}>
            Al Noor Starlet Hotel offers luxurious accommodations and
            exceptional hospitality in a serene environment, perfect for a
            relaxing getaway.
          </p>
        </div>
        <div className={`${styles.footerContent} ${styles.footerList}`}>
          <h3>Hotel</h3>
          <Link href={'/contact'}>About Us</Link>
          <Link href={'/contact'}>Legal Information</Link>
          <Link href={'/contact'}>Contact Us</Link>
          <Link href={'/gallery'}>Gallery</Link>
        </div>
        <div className={`${styles.footerContent} ${styles.footerList}`}>
          <h3>Help Center</h3>
          <Link href={'/room'}>Rooms</Link>
          <Link href={'/contact'}>Location Map</Link>
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
            <Link
              href={'https://www.facebook.com/alnoorguesthouseskardu'}
              target='blank'
            >
              <FaSquareFacebook />
            </Link>
            <Link href={'https://wa.me/03334441547'}>
              <FaWhatsapp />
            </Link>
            <Link
              href={
                'https://www.instagram.com/alnoorhotelskardu?fbclid=IwY2xjawEWvIxleHRuA2FlbQIxMAABHXbRncimNfiy18NW4_blFW9KuOwy6wU5OBOSavSqupl8UHEPTF0WjLxioQ_aem_E3iNARyW4SU2KDANqyOaRw'
              }
              target='blank'
            >
              <FaInstagram />
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
