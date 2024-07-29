import styles from './map.module.css';

export default function Map() {
  return (
    <section className={styles.map}>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13025.90216420798!2d75.5921667!3d35.2941637!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e465d4c9dc060f%3A0x64dcff5826cd3e15!2sAl%20Noor%20Starlet%20Hotel!5e0!3m2!1sen!2s!4v1721832887406!5m2!1sen!2s'
        width='600'
        height='450'
      ></iframe>
    </section>
  );
}
