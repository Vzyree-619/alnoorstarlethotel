'use client';

import Link from 'next/link';
import styles from './dashHeader.module.css';
import Image from 'next/image';
import { ImCross } from 'react-icons/im';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';

export default function DashHeader() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleLinkClick = () => {
    setNavbarOpen(false);
  };

  return (
    <header className={styles.dashHeader}>
      <Link href={'/'}>
        <Image
          src={'/logo.png'}
          alt='logo'
          className={styles.logo}
          width={464}
          height={75}
        />
      </Link>
      <div className={styles.profileName}>
        <span>Admin</span>
        <div className={styles.avatar}>
          <Image src={'/avatar.png'} width={50} height={50} alt='Avatar' />
        </div>
      </div>
      <button
        className={styles.menuButton}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <ImCross /> : <GiHamburgerMenu />}
      </button>
    </header>
  );
}
