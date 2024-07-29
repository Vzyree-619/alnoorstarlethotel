import Header from './Components/Header/Header';
import styles from './page.module.css';

export default function notFound() {
  return (
    <>
      <Header bgColor='transparent' />
      <div className={styles.notFound}>
        <h1>Page Not Found</h1>
      </div>
    </>
  );
}
