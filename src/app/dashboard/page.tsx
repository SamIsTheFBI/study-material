import SignOutButton from "@/components/auth/SignOutButton"
import UploadNotesForm from "@/components/dashboard/upload-notes-form"
import { getUserAuth } from "@/server/auth/utils"
import Image from "next/image"

export default async function Page() {
  const { session } = await getUserAuth()

  return (
    <main className="p-4 mx-auto max-w-3xl">
      <div className="flex justify-between items-center flex-wrap gap-y-2">
        <div>
          <h1 className="text-3xl font-bold">
            Hey there, {session?.user.name?.replace(/ .*/, '')} 👋!
          </h1>
          <p className="text-muted-foreground">Signed in as {session?.user.email}.</p>
        </div>
        <SignOutButton />
      </div>
      <div className="py-3 pb-16 lg:pb-20">
        <UploadNotesForm />
      </div>
    </main>
  )
}
