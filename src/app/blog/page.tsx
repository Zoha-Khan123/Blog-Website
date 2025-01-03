import React from 'react'
import styles from './blog.module.css'
import CardList from '../components/navbar/card-list/card-list'
import Menu from '../components/navbar/menu/menu'

const Blog = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Style Blog</h1>
        <div className={styles.content}>
            <CardList></CardList>
            <Menu></Menu>
        </div>
    </div>
  )
}

export default Blog