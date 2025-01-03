import styles from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Card = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imageConatiner}>
        <Image src="/homepage.jpeg" alt="Image" fill className={styles.image}></Image>
      </div>
      <div className={styles.textContainer}>
      <div className={styles.detail}>
        <span className={styles.date}>03.01.2024 - </span>
        <span className={styles.category}>Culture</span>
      </div>
      <Link href="/">
      <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
      </Link>
      <p className={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque libero quas, quae quis beatae harum ratione quia tenetur, a accusamus expedita at, in aut architecto quam aspernatur placeat optio tempora?</p>
    <Link href="/" className={styles.link}>Read More</Link>
    </div>
    </div>
  )
}

export default Card