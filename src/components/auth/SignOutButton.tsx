"use client"

import { signOutAction } from "@/server/actions/authActions"
import { Button } from "../ui/button"

export default function SignOutButton() {
  return (
    <Button
      variant="destructive"
      onClick={async () => { await signOutAction() }}
    >
      Sign Out
    </Button>
  )
}
