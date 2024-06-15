import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="inline-flex gap-x-6">
      <Link className="font-medium text-muted-foreground hover:text-foreground" href="/">NavItem</Link>
      <Link className="font-medium text-muted-foreground hover:text-foreground" href="/">NavItem</Link>
      <Link className="font-medium text-muted-foreground hover:text-foreground" href="/">NavItem</Link>
      <Link className="font-medium text-muted-foreground hover:text-foreground" href="/">NavItem</Link>
    </nav>
  )
}
