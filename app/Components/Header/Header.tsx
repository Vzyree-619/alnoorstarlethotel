'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './header.module.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';
import { useState } from 'react';
import NavLink from '../NavLink/NavLink';

interface HeaderProps {
  bgColor: string;
}

export default function Header({ bgColor }: HeaderProps) {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleLinkClick = () => {
    setNavbarOpen(false);
  };

  return (
    <header className={styles.header} style={{ backgroundColor: bgColor }}>
      <Link href={'/'}>
        <Image
          src={'/logo.png'}
          alt='logo'
          className={styles.logo}
          width={464}
          height={75}
        />
      </Link>
      <nav className={`${styles.nav} ${navbarOpen ? styles.open : ''}`}>
        <NavLink href={'/'}>Home</NavLink>
        <NavLink href={'/gallery'}>Gallery</NavLink>
        <NavLink href={'/room'}>Rooms</NavLink>
        <NavLink href={'/contact'}>Contact</NavLink>
        <Link href={'/'} className={styles.button}>
          Book Now
        </Link>
      </nav>
      <button
        className={styles.menuButton}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <ImCross /> : <GiHamburgerMenu />}
      </button>
    </header>
  );
}
