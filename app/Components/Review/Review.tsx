import { FaStar } from 'react-icons/fa6';
import styles from './review.module.css';
import Image from 'next/image';
import Link from 'next/link';

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
                <div className={styles.radiusImg}>
                  <Image
                    src={'/reviewImg1.png'}
                    width={50}
                    height={50}
                    alt='Image'
                  />
                </div>
                <div className={styles.text}>
                  <h2>Adnan Shafiq</h2>
                </div>
              </div>
              <p>Above Average stay.</p>
            </div>
            <div className={styles.item}>
              <div className={styles.itemProfile}>
                <div className={styles.radiusImg}>
                  <Image
                    src={'/reviewImg2.png'}
                    width={50}
                    height={50}
                    alt='Image'
                  />
                </div>
                <div className={styles.text}>
                  <h2>Mohsin Azam</h2>
                </div>
              </div>
              <p>Best in Town.</p>
            </div>
            <div className={styles.item}>
              <div className={styles.itemProfile}>
                <div className={styles.radiusImg}>
                  <Image
                    src={'/reviewImg3.png'}
                    width={50}
                    height={50}
                    alt='Image'
                  />
                </div>
                <div className={styles.text}>
                  <h2>Mohid Frost</h2>
                </div>
              </div>
              <p>
                One of the best hotels you can stay in Skardu. Best Staff
                services, awesome view!
              </p>
            </div>
            <div className={styles.item}>
              <div className={styles.itemProfile}>
                <div className={styles.radiusImg}>
                  {' '}
                  <Image
                    src={'/reviewImg4.png'}
                    width={50}
                    height={50}
                    alt='Image'
                  />
                </div>
                <div className={styles.text}>
                  <h2>Fida Ali Vzyree</h2>
                </div>
              </div>
              <p>
                Extraordinary rooms with professional staff. Totally worth the
                money.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.reviewBox4}>
          <Link
            href={
              'https://www.google.com/search?q=al+noor+starlet+hotel+skardu&rlz=1C1UEAD_en-GBPK1072PK1072&oq=al+noor+starlet+hotel+skardu&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxiABBiKBTIMCAAQIxgnGIAEGIoFMhMIARAuGK8BGMcBGIAEGJgFGJkFMgYIAhAjGCcyBwgDEAAYgAQyBwgEEAAYgAQyCggFEAAYgAQYogQyCggGEAAYgAQYogQyCggHEAAYgAQYogQyCggIEAAYgAQYogQyCggJEAAYgAQYogTSAQg1MjI3ajBqMagCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x38e465d4c9dc060f:0x64dcff5826cd3e15,1,,,,'
            }
            className={styles.link}
            target='blank'
          >
            Show All Reviews
          </Link>
        </div>
      </div>
    </section>
  );
}
