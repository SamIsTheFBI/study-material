import Link from "next/link";

export default function NotFound() {
  return (
    <main className="space-y-2 p-4 pb-24 mx-auto max-w-3xl">
      <h1 className="text-6xl font-bold tracking-tighter md:text-7xl w-full">Error 404</h1>
      <p className="w-full pl-1">Sorry we couldn&apos;t find what you were looking for.</p>
      <p className="pt-3 pl-1">Go back to <Link href="/" className="underline underline-offset-4 hover:font-medium">Home page</Link>.</p>
    </main>
  )
}
