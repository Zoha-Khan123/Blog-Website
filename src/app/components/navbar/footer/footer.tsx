import Link from 'next/link'
import styles from './footer.module.css'
import Image from 'next/image'  

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/homepage.jpeg" alt="Image" width={50} height={50}></Image>
          <h1 className={styles.logoText}>Lamablog</h1>
          </div>

          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nihil hic sunt mollitia minima dolore voluptates quia. Asperiores, enim. Expedita quidem veniam tempora quo veritatis!</p>
         <div className={styles.icon}>
              <Image src="/facebook.png" alt="Image" width={24} height={24}></Image>
              <Image src="/instagram.png" alt="Image" width={24} height={24}></Image>
              <Image src="/tiktok.png" alt="Image" width={24} height={24}></Image>
              <Image src="/youtube.png" alt="Image" width={24} height={24}></Image>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">Aout</Link>
          <Link href="/">Contact</Link>
        </div>

        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>

        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>

      </div>
    </div>
  )
}

export default Footer