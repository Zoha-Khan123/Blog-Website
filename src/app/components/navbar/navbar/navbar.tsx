import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import ThemeToggle from '../theme-toggle/theme-toggle'
import AuthLinks from '../auth-links/auth-links'

const Navbar = () => {
  return (
    <div className={styles.container}>
 <div className={styles.social}>
    <Image src="/facebook.png" alt="Image" width={24} height={24}></Image>
    <Image src="/instagram.png" alt="Image" width={24} height={24}></Image>
    <Image src="/tiktok.png" alt="Image" width={24} height={24}></Image>
    <Image src="/youtube.png" alt="Image" width={24} height={24}></Image>
 </div>
 <div className={styles.logo}>lamablog</div>
 <div className={styles.links}>
    <ThemeToggle />
    <Link href='/' className={styles.link}>Home</Link>
    <Link href='/' className={styles.link}>Contact</Link>
    <Link href='/' className={styles.link}>About</Link>
    <AuthLinks />
    <Link href='/' ></Link>
 </div>



    </div>
  )
}

export default Navbar