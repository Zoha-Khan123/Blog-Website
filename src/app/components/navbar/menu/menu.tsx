import React from "react";
import styles from "./menu.module.css";
import MenuPost from "@/app/menu-post/menupost";
import MenuCategories from "@/app/menu-categories/menu-categories";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's host"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPost withImage={false} />

      {/* ---------- Second Part ---------------------- */}
      <h2 className={styles.subtitle}>Discover by topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories/>
     

      {/* ---------- Third Part --------------------- */}
      
            <h2 className={styles.subtitle}>Choosen by the editor</h2>
            <h1 className={styles.title}>Editor Pick</h1>
            <MenuPost withImage={true} />
    </div>
  );
};

export default Menu;
