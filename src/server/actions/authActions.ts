"use server"

import { setAuthCookie } from "../auth/utils";
import { lucia, validateRequest } from "../auth/lucia";
import { redirect } from "next/navigation";

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
  redirect("/");
}
