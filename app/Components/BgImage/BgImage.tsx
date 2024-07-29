import styles from './bgImage.module.css';

interface BgImageProp {
  bgImage: string;
  title: string;
}

export default function BgImage({ bgImage, title }: BgImageProp) {
  return (
    <section
      className={styles.bgImage}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h1>{title}</h1>
    </section>
  );
}
