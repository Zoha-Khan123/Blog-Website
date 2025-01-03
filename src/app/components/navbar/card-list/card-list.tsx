import Card from '@/app/card/card'
import Pagination from '../pagination/pagination'
import styles from './card-list.module.css'

const CardList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </div>
    <Pagination/>
    </div>
  )
}

export default CardList