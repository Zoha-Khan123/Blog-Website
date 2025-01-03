"use server";

import { signIn } from "@/auth/authSetup";

export async function handleGoogleSignIn() {
  await signIn("google", { callbackUrl: "/my-account" });
}

