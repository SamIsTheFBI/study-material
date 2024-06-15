import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"
import { LuGithub, LuLogIn } from "react-icons/lu"
import { RxHamburgerMenu } from "react-icons/rx"

export default function SheetMenu() {
  return (
    <Sheet>
      <SheetTrigger className="sm:hidden p-2 border border-border rounded-md"><RxHamburgerMenu /></SheetTrigger>
      <SheetContent>
        <SheetHeader className="mt-6">
          <div className="flex gap-x-4 p-2 border border-foreground/30 rounded-md">
            <div className="size-16 bg-secondary rounded-md inline-block"></div>
            <div className="grid text-left items-center">
              <Link href="/" className="inline-block font-bold">FBK.</Link>
              <Link className="text-xs inline-flex items-center gap-x-2 border border-secondary rounded-sm px-1" href="/">
                <LuGithub />Source Code</Link>
            </div>
          </div>
        </SheetHeader>
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col divide-y mt-2">
            <Link href="/" className="hover:bg-secondary px-4 py-2 flex justify-start items-center gap-x-4">NavItem</Link>
            <Link href="/" className="hover:bg-secondary px-4 py-2 flex justify-start items-center gap-x-4">NavItem</Link>
            <Link href="/" className="hover:bg-secondary px-4 py-2 flex justify-start items-center gap-x-4">NavItem</Link>
            <Link href="/" className="hover:bg-secondary px-4 py-2 flex justify-start items-center gap-x-4">NavItem</Link>
          </div>
          <div>
            <div className="w-full mb-24">
              <div className="flex justify-between gap-x-4 px-2 py-4 ">
                <Link href="/sign-in" className="hover:bg-secondary text-left flex justify-start items-center gap-x-4 w-full  px-4 py-2">
                  <LuLogIn />
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
