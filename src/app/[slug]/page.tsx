import Comments from "../components/navbar/comments/comments";
import Menu from "../components/navbar/menu/menu";
import styles from "./single-page.module.css";
import Image from "next/image";

const SinglePage = () => {
  return (
    <>
      <div className={styles.container}>
      <div className={styles.infoContainer}>

<div className={styles.mainInfoContainer}>

        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <div className={styles.users}>
            <div className={styles.userImageContainer}>
              <Image
                src={"/homepage.jpeg"}
                alt="Image"
                fill
                className={styles.avator}
              ></Image>
            </div>
            <div className={styles.userTextContainer}>
            <span className={styles.username}>William Randolph</span>
            <span className={styles.date}>03.01.2025</span>
          </div>

          
          </div>
          
              </div>

              <div className={styles.imageContainer}>
            <Image
              src={"/homepage.jpeg"}
              alt="Image"
              fill
              className={styles.image}
              ></Image>
          </div>
          </div>
        
        <div className={styles.content}>
          <div className={styles.post}>
          <div className={styles.description}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui labore fugiat quos, dolorem quibusdam nisi autem inventore officia ea cupiditate, molestias omnis explicabo, illo doloremque.</p>
            <h4>Lorem ipsum dolor sit amet.</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui labore fugiat quos, dolorem quibusdam nisi autem inventore officia ea cupiditate, molestias omnis explicabo, illo doloremque.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui labore fugiat quos, dolorem quibusdam nisi autem inventore officia ea cupiditate, molestias omnis explicabo, illo doloremque.</p>

             </div>

             <div className={styles.comment}>
<Comments/>
             </div>
             </div>
          <Menu />
        </div>


      </div>
      </div>
    </>
  );
};

export default SinglePage;
