import React from 'react'
import styles from '../comments/comments.module.css';
import Link from "next/link"
import Image from 'next/image';
const Comments = () => {

    const status = 'authenticated'
  return (
    <div className={styles.container}>
<h1 className={styles.title}>Comments</h1>
{status === 'authenticated' ? ( <div className={styles.write}>
    <textarea placeholder='write a comment...' className={styles.input}/>
    <button className={styles.button}>Send</button>
</div>) : (<Link href="/login">Login to write a comment</Link>)}


<div className={styles.comments}>
<div className={styles.comment}>
<div className={styles.user}>
    <Image src="/homepage.jpeg" alt="Image" width={50} height={50} className={styles.image}/>
<div className={styles.userInfo}>
    <span className={styles.username}>Jhon Doe</span>
    <span className={styles.date}>03.01.2025</span>

</div>

</div>

<p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, iusto est voluptatem consequuntur ipsa, nisi commodi quae corporis, similique eligendi doloribus ratione sit quibusdam quis aspernatur ipsam vitae perspiciatis quia.</p>
</div>

<div className={styles.comment}>
<div className={styles.user}>
    <Image src="/homepage.jpeg" alt="Image" width={50} height={50} className={styles.image}/>
<div className={styles.userInfo}>
    <span className={styles.username}>Jhon Doe</span>
    <span className={styles.date}>03.01.2025</span>

</div>

</div>

<p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, iusto est voluptatem consequuntur ipsa, nisi commodi quae corporis, similique eligendi doloribus ratione sit quibusdam quis aspernatur ipsam vitae perspiciatis quia.</p>
</div>

<div className={styles.comment}>
<div className={styles.user}>
    <Image src="/homepage.jpeg" alt="Image" width={50} height={50} className={styles.image}/>
<div className={styles.userInfo}>
    <span className={styles.username}>Jhon Doe</span>
    <span className={styles.date}>03.01.2025</span>

</div>

</div>

<p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, iusto est voluptatem consequuntur ipsa, nisi commodi quae corporis, similique eligendi doloribus ratione sit quibusdam quis aspernatur ipsam vitae perspiciatis quia.</p>
</div>

<div className={styles.comment}>
<div className={styles.user}>
    <Image src="/homepage.jpeg" alt="Image" width={50} height={50} className={styles.image}/>
<div className={styles.userInfo}>
    <span className={styles.username}>Jhon Doe</span>
    <span className={styles.date}>03.01.2025</span>

</div>

</div>

<p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, iusto est voluptatem consequuntur ipsa, nisi commodi quae corporis, similique eligendi doloribus ratione sit quibusdam quis aspernatur ipsam vitae perspiciatis quia.</p>
</div>
</div>
    </div>
  )
}

export default Comments