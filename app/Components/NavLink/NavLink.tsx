'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../Header/header.module.css';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link href={href} className={isActive ? styles.active : ''}>
      {children}
    </Link>
  );
}
