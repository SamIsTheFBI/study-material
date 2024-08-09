import Link from "next/link";
import Navbar from "./navbar";
import ThemeChanger from "./theme-changer";
import SheetMenu from "./sheet-menu";
import { getUserAuth } from "@/server/auth/utils";

export default async function Header() {
  const session = await getUserAuth()
  return (
    <header className="fixed backdrop-blur-sm shadow-sm h-12 w-full border-b border-border z-50">
      <div className="max-w-7xl w-full mx-auto p-4 flex h-12 items-center space-x-4 justify-between sm:space-x-0">
        <SheetMenu />
        <Link href="/" className="font-bold text-xl">
          PadhaiKarle.
        </Link>
        <div className="flex max-sm:hidden items-center gap-6 justify-between">
          <Navbar />
        </div>
        <div className="flex items-center gap-x-2">
          <ThemeChanger />
          {session?.session &&
            <Link
              href="/dashboard"
              className="text-sm max-lg:hidden font-medium text-muted-foreground hover:text-foreground">
              Dashboard
            </Link>
            ||
            <Link
              href="/sign-in"
              className="text-sm max-lg:hidden font-medium text-muted-foreground hover:text-foreground">
              Sign In
            </Link>
          }
        </div>
      </div>
    </header>
  )
}
