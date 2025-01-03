import React from 'react'
import styles from './homepage.module.css'
import Featured from './components/navbar/featured/featured'
import CategoryList from './components/navbar/category-list/category-list'
import CardList from './components/navbar/card-list/card-list'
import Menu from './components/navbar/menu/menu'


const page = () => {
  return (
    <div className={styles.container}>
      <Featured/>
      <CategoryList/>
      <div className={styles.content}>
        <CardList/>
        <Menu/>
    </div>
    </div>
  )
}

export default page