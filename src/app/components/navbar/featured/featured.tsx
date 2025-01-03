import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b className={styles.bold}>Hey, lama dev here!</b> Discover my stories
        and creatives ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image
            src="/homepage.jpeg"
            alt="Image"
            fill
            className={styles.image}
          ></Image>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            quasi rem eum ipsum natus repudiandae sapiente a odio esse libero?
            Optio iusto non tenetur necessitatibus! Et sit quia deleniti qui?
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
