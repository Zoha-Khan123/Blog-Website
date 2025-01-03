import React from "react";
import styles from "./menupost.module.css";
import Link from "next/link";
import Image from "next/image";
interface MenuPostProps {
    withImage: boolean;
    }

const MenuPost: React.FC<MenuPostProps> = ({ withImage }) => {
  return (
    <>
      <div className={styles.items}>
        {/* 1st */}
        <Link href="" className={styles.item}>
          {withImage && (
            <div className={styles.imageContainer}>
              <Image
                src="/homepage.jpeg"
                alt="Image"
                fill
                className={styles.image}
              ></Image>
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              Travel
            </span>
            <h5 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </h5>
            <div className={styles.detail}>
              <span className={styles.username}>Jhon Doe</span>
              <span className={styles.date}>- 03.01.2025</span>
            </div>
          </div>
        </Link>

        {/* 2nd */}
        <Link href="" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image
              src="/homepage.jpeg"
              alt="Image"
              fill
              className={styles.image}
            ></Image>
          </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.culture}`}>
              Culture
            </span>
            <h5 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </h5>
            <div className={styles.detail}>
              <span className={styles.username}>Jhon Doe</span>
              <span className={styles.date}>- 03.01.2025</span>
            </div>
          </div>
        </Link>

        {/* 3rd */}
        <Link href="" className={styles.item}>
             {withImage && (
          <div className={styles.imageContainer}>
            <Image
              src="/homepage.jpeg"
              alt="Image"
              fill
              className={styles.image}
            ></Image>
          </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.food}`}>Food</span>
            <h5 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </h5>
            <div className={styles.detail}>
              <span className={styles.username}>Jhon Doe</span>
              <span className={styles.date}>- 03.01.2025</span>
            </div>
          </div>
        </Link>

        {/* 4th */}
        <Link href="" className={styles.item}>
             {withImage && (
          <div className={styles.imageContainer}>
            <Image
              src="/homepage.jpeg"
              alt="Image"
              fill
              className={styles.image}
            ></Image>
          </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.fashion}`}>
              Fashion
            </span>
            <h5 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </h5>
            <div className={styles.detail}>
              <span className={styles.username}>Jhon Doe</span>
              <span className={styles.date}>- 03.01.2025</span>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default MenuPost;
