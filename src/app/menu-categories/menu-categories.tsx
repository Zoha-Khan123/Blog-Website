import React from 'react'
import styles from './menu-categories.module.css'
import Link from 'next/link'

const MenuCategories = () => {
  return (
    <div><div className={styles.categoriesList}>
    <Link href={"/blog?cat=style"}>
      <div className={`${styles.categoryItem} ${styles.style}`}>Styles</div>
    </Link>

    <Link href={"/blog?cat=style"}>
      <div className={`${styles.categoryItem} ${styles.fashion}`}>Fashion</div>
    </Link>

    <Link href={"/blog?cat=style"}>
      <div className={`${styles.categoryItem} ${styles.food}`}>Food</div>
    </Link>

    <Link href={"/blog?cat=style"}>
      <div className={`${styles.categoryItem} ${styles.travel}`}>Travel</div>
    </Link>

    <Link href={"/blog?cat=style"}>
      <div className={`${styles.categoryItem} ${styles.culture}`}>Culture</div>
    </Link>

    <Link href={"/blog?cat=style"}>
      <div className={`${styles.categoryItem} ${styles.coding}`}>Coding</div>
    </Link>
  </div></div>
  )
}

export default MenuCategories