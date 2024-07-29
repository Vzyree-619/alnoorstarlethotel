import { FaStar } from 'react-icons/fa6';
import styles from './review.module.css';
import Image from 'next/image';

export default function Review() {
  return (
    <section className={styles.review}>
      <div className={styles.reviewContainer}>
        <div className={styles.reviewBox1}>
          Review <FaStar /> 5.0
        </div>
        <div className={styles.reviewBox2}>
          <div>
            Amenities{' '}
            <span className={styles.line1}>
              <hr /> 5.0
            </span>
          </div>
          <div>
            Hygiene{' '}
            <span className={styles.line2}>
              <hr /> 5.0
            </span>
          </div>
          <div>
            Communication{' '}
            <span>
              <hr /> 5.0
            </span>
          </div>
          <div>
            Location of Property{' '}
            <span>
              <hr /> 5.0
            </span>
          </div>
          <div>
            Value for Money{' '}
            <span>
              <hr /> 5.0
            </span>
          </div>
          {/* <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>5</div> */}
        </div>
        <div className={styles.reviewBox3}>
          <div className={styles.box3Container}>
            <div className={styles.item}>
              <div className={styles.itemProfile}>
                <div className={styles.radiusImg}></div>
                <div className={styles.text}>
                  <h2>John Doberman</h2>
                  <span>Mar 12 2020</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className={styles.item}>
              <div className={styles.itemProfile}>
                <div className={styles.radiusImg}></div>
                <div className={styles.text}>
                  <h2>John Doberman</h2>
                  <span>Mar 12 2020</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className={styles.item}>
              <div className={styles.itemProfile}>
                <div className={styles.radiusImg}></div>
                <div className={styles.text}>
                  <h2>John Doberman</h2>
                  <span>Mar 12 2020</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className={styles.item}>
              <div className={styles.itemProfile}>
                <div className={styles.radiusImg}></div>
                <div className={styles.text}>
                  <h2>John Doberman</h2>
                  <span>Mar 12 2020</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.reviewBox4}>
          <button>Show All Reviews</button>
        </div>
      </div>
    </section>
  );
}
