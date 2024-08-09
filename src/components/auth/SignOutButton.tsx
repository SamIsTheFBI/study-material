"use client"

import { signOutAction } from "@/server/actions/authActions"
import { Button } from "../ui/button"
import { useFormStatus } from "react-dom";

export default function SignOutButton() {
  return (
    <Button variant="destructive" onClick={async () => await signOutAction()}>Sign Out</Button>
  )
}
