import Link from 'next/link'
import styles from './category-list.module.css'
import Image from 'next/image'

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
      <Link href="/blog?cat=style" className={`${styles.category} ${styles.style}`}>
      <Image src="/food.png" alt="Image" width={32} height={32} className={styles.image}></Image>
      Style
      </Link>

      <Link href="/blog?cat=style" className={`${styles.category} ${styles.fashion}`}>
      <Image src="/food.png" alt="Image" width={32} height={32} className={styles.image}></Image>
      Fashion
      </Link>
      
       <Link href="/blog?cat=style" className={`${styles.category} ${styles.food}`}>
      <Image src="/food.png" alt="Image" width={32} height={32} className={styles.image}></Image>
      Food
      </Link>
      
       <Link href="/blog?cat=style" className={`${styles.category} ${styles.travel}`}>
      <Image src="/food.png" alt="Image" width={32} height={32} className={styles.image}></Image>
      Travel
      </Link>
      
       <Link href="/blog?cat=style" className={`${styles.category} ${styles.culture}`}>
      <Image src="/food.png" alt="Image" width={32} height={32} className={styles.image}></Image>
      Culture
      </Link>
      
       <Link href="/blog?cat=style" className={`${styles.category} ${styles.coding}`}>
      <Image src="/food.png" alt="Image" width={32} height={32} className={styles.image}></Image>
      Coding
      </Link>
      </div>
      </div>
  )
}

export default CategoryList