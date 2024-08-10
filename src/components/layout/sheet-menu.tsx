import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"
import { getUserAuth } from "@/server/auth/utils"
import Link from "next/link"
import { LuGithub, LuLogIn } from "react-icons/lu"
import { RxHamburgerMenu } from "react-icons/rx"
import SignOutButton from "../auth/SignOutButton"

export default async function SheetMenu() {
  const session = await getUserAuth()
  return (
    <Sheet>
      <SheetTrigger className="sm:hidden p-2 border border-border rounded-md"><RxHamburgerMenu /></SheetTrigger>
      <SheetContent side="left">
        <SheetHeader className="mt-6 text-left">
          <Link href="/" className="text-xl font-bold pl-4 tracking-tighter">PadhaiKarle.</Link>
        </SheetHeader>
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col divide-y mt-2">
            <Link href="/" className="hover:bg-secondary px-4 py-2 flex justify-start items-center gap-x-4">Home</Link>
            <Link href="/changelog" className="hover:bg-secondary px-4 py-2 flex justify-start items-center gap-x-4">Changelog</Link>
            <Link href="/about" className="hover:bg-secondary px-4 py-2 flex justify-start items-center gap-x-4">About</Link>
          </div>
          <div>
            <div className="w-full mb-6">
              <div className="flex justify-between gap-x-4 px-2 py-4 ">
                {session?.session &&
                  <Link href="/dashboard" className="hover:bg-secondary px-4 py-2 flex justify-start items-center gap-x-4">Dashboard</Link>
                  ||
                  <Link href="/sign-in" className="hover:bg-secondary text-left flex justify-start items-center gap-x-4 w-full  px-4 py-2">
                    <LuLogIn />
                    Sign In
                  </Link>
                }
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
