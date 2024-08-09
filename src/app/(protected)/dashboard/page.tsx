import SignOutButton from "@/components/auth/SignOutButton"
import UploadNotesForm from "@/components/dashboard/upload-notes-form"
import { Button } from "@/components/ui/button"
import { getPfpByUserId } from "@/server/actions/authActions"
import { getNotesByUserId } from "@/server/actions/noteSharingActions"
import { getUserAuth } from "@/server/auth/utils"
import Image from "next/image"
import Link from "next/link"
import { FaGoogleDrive } from "react-icons/fa6"
import { RiLinksFill } from "react-icons/ri"
import { SiMega } from "react-icons/si"

export default async function Page() {
  const { session } = await getUserAuth()

  if (!session) {
    return (
      <div>404</div>
    )
  }

  const pfp = await getPfpByUserId(session.user.id)
  const notesUploaded = await getNotesByUserId(session.user.id)

  return (
    <main className="p-4 mx-auto max-w-5xl">
      <div className="flex justify-between items-center flex-wrap gap-y-2">
        <div className="flex gap-x-3 max-sm:flex-col">
          {
            pfp.googlePfp &&
            <Image
              src={pfp.googlePfp}
              width={90}
              height={90}
              alt="pfp"
              className="size-16 rounded-lg max-sm:mb-2"
            />
          }
          <div>
            <h1 className="text-3xl font-bold tracking-tighter">
              Hey there, {session?.user.name?.replace(/ .*/, '')}!
            </h1>
            <p className="text-muted-foreground max-sm:text-sm">Signed in as {session?.user.email}.</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" asChild className="sm:hidden">
            <a href="/dashboard#contrib">Your Uploads</a>
          </Button>
          <SignOutButton />
        </div>
      </div>
      <div className="lg:gap-4 max-lg:space-y-4 py-3 lg:flex lg:max-h-[600px]">
        <UploadNotesForm userId={session.user.id} />
        <div className="border border-border lg:max-w-xs w-full rounded-md p-4 shadow-sm lg:max-h-[600px] lg:overflow-y-auto bg-background z-50">
          <h2 className="pb-3">Your contribution: </h2>
          <ul id="contrib" className="divide-y divide-border">
            {notesUploaded.length > 0 && notesUploaded.map((note) => (
              <li
                key={note.id}
                className="pl-4 pr-2 py-2
            flex justify-between items-center
            ">
                <div>
                  <span>{note.title}</span>
                </div>
                <div className="flex gap-x-2">
                  <Button variant="outline" className="h-8" asChild>
                    <Link href={note.publicLink} className="flex gap-x-3" target="_blank">
                      Download
                      {
                        note.publicLink.includes('mega.nz') &&
                        <SiMega />
                        || note.publicLink.includes('drive.google.com') &&
                        <FaGoogleDrive />
                        ||
                        <RiLinksFill />
                      }
                    </Link>
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  )
}
