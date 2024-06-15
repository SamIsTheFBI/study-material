import Link from "next/link";
import Navbar from "./navbar";
import ThemeChanger from "./theme-changer";
import SheetMenu from "./sheet-menu";

export default function Header() {
  return (
    <header className="bg-background shadow-sm h-12 w-full border-b border-border">
      <div className="max-w-7xl w-full mx-auto p-4 flex h-12 items-center space-x-4 justify-between sm:space-x-0">
        <Link href="/" className="font-bold text-xl">
          FBK.
        </Link>
        <div className="flex max-sm:hidden items-center gap-6 justify-between">
          <Navbar />
        </div>
        <div>
          <ThemeChanger />
          <SheetMenu />
        </div>
      </div>
    </header>
  )
}
