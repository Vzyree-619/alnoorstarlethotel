'use client';

import Link from 'next/link';
import Header from '../../Components/Header/Header';
import styles from '../login.module.css';
import Image from 'next/image';
import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <section className={styles.login}>
      <Header bgColor='transparent' />
      <div className={styles.loginContainer}>
        <div className={styles.loginBg}></div>
        <div className={styles.loginForm}>
          <Link href={'/'}>
            <Image src={'/logo.png'} width={300} height={150} alt='Logo' />
          </Link>
          <form action=''>
            <h3>Nice to see you again</h3>
            <input type='email' placeholder='Email or phone number' />
            <div className={styles.passwordInput} style={{}}>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder='Enter your password'
              />
              <span
                onClick={togglePasswordVisibility}
                // style={{
                //   position: 'absolute',
                //   right: '10px',
                //   cursor: 'pointer',
                // }}
              >
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </span>
            </div>
            <span className={styles.forgetPassword}>Forgot password?</span>
            <button className={styles.signInButton}>Sign In</button>
            <button className={styles.googleButton}>
              <Image src={'/search.png'} width={25} height={25} alt='Icon' />
              Or sign in with Google
            </button>
            <span className={styles.last}>
              Dont have an account?
              <Link href={'/api/signIn'}>Sign up now</Link>
            </span>
          </form>
        </div>
      </div>
    </section>
  );
}
