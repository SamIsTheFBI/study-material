import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="inline-flex gap-x-6">
      <Link className="font-medium text-sm text-muted-foreground hover:text-foreground" href="/">Home</Link>
      <Link className="font-medium text-sm text-muted-foreground hover:text-foreground" href="/changelog">Changelog</Link>
      <Link className="font-medium text-sm text-muted-foreground hover:text-foreground" href="/about">About</Link>
    </nav>
  )
}
