"use server"

import { db } from "@/server/db"
import { setAuthCookie } from "../auth/utils";
import { lucia, validateRequest } from "../auth/lucia";
import { redirect } from "next/navigation";
import { users } from "../db/schema/auth";
import { eq } from "drizzle-orm";

interface ActionResult {
  error: string;
}

export async function signOutAction(): Promise<ActionResult> {
  const { session } = await validateRequest();
  if (!session) {
    return {
      error: "Unauthorized",
    };
  }

  await lucia.invalidateSession(session.id);

  const sessionCookie = lucia.createBlankSessionCookie();
  setAuthCookie(sessionCookie);
  console.log("Redirect kar")
  redirect("/")
}

export async function getPfpByUserId(userId: string) {
  const res = await db.select({ googlePfp: users.googlePfp }).from(users).where(eq(users.id, userId))
  return res[0]
}
