'use client'

import React, { useState } from "react";
import styles from "./auth-links.module.css";
import Link from "next/link";
import { signOut } from "@/auth/authSetup";
import { useSession } from "next-auth/react";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession(); // This will provide the current session data

  // You can get the status directly from session
  const status = session ? "authenticated" : "unauthenticated"; // Use session to determine status

  // Wrap signOut in an anonymous function or a named handler
  const handleSignOut = () => {
    signOut(); // Call signOut within the handler
  };

  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/write">Write</Link>
          <span className={styles.link} onClick={handleSignOut}>Logout</span>
        </>
      )}

      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>

      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Homepage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {status === "unauthenticated" ? (
            <Link href="/login" className={styles.link}>
              Login
            </Link>
          ) : (
            <>
              <Link href="/write" className={styles.link}>
                Write
              </Link>
              <span className={styles.link} onClick={handleSignOut}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
