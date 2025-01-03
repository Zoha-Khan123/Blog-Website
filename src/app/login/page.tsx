"use client";
import React from "react";
import { handleGoogleSignIn } from "@/auth/serverActions";
import { signIn } from "next-auth/react";
import styles from "./login.module.css"

function Page() {
  return (
    <div>
      <div className="text-center mb-2">Login with OAuth</div>
      <div className="flex flex-col bg-gray-900 rounded-md max-w-[300px] p-5 gap-2 mx-auto">
        <form action={handleGoogleSignIn}>
          <button
            type="submit"
            className={styles.socialButton}
          >
            Login with Google
          </button>
        </form>
        <button
          className={styles.socialButton}
          onClick={() => signIn("github", { callbackUrl: "/my-account" })}
        >
          Login with GitHub
        </button>
      </div>
    </div>
  );
}

export default Page;
