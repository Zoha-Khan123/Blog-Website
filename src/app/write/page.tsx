'use client'
import { LuCirclePlus, LuFiles } from "react-icons/lu";
import styles from "./write.module.css";
import { useState } from "react";
import { FaImage } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.bubble.css'
const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [value,setValue] = useState("")

  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" className={styles.input}/>
      <div className={styles.editor}>
        <button className={styles.button} onClick={()=>setOpen(!open)}>
          <LuCirclePlus />
        </button>
        {open && <div className={styles.add}>
          
        <button className={styles.addButton}>
        <FaImage />
        </button>

        <button className={styles.addButton}>
        <FiUpload />
        </button>

        <button className={styles.addButton}>
        <LuFiles />
        </button>
          
          </div>}

        <ReactQuill className={styles.textArea} theme="bubble" value={value} onChange={setValue} placeholder="Tell your story..."/>
      </div>
      <button className={styles.publish}>Publish</button>
    </div>
  );
};

export default WritePage;
