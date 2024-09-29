// src/app/actions/signInAction.ts
"use server";

import { signIn } from "@/lib/auth";
import { signOut } from "@/lib/auth"

// Server-side action to handle the sign-in
export async function handleGoogleSignIn() {
  await signIn("google", { redirectTo: "/professor" });
}

export async function handleSignOut() {
  await signOut();
}
