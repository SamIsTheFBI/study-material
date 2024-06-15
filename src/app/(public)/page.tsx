import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GiSpellBook } from "react-icons/gi";
import { LuArrowRight } from "react-icons/lu";

export default function Home() {
  return (
    <>
      <main className="space-y-6 text-center p-4">
        <section className="space-y-4 pt-16">
          <Link className="inline-flex group items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium" href="/changelog">
            <GiSpellBook />
            <div className="shrink-0 bg-border w-[1px] mx-2 h-4"></div>
            <span>Changelog</span>
            <LuArrowRight className="ml-1 group-hover:ml-2 group-hover:translate-x-1 transition-all" />
          </Link>
          <p className="text-3xl font-bold tracking-tighter md:text-5xl">
            A generic template for Nextjs apps.
          </p>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            I am trying to build a starter layout kind of thing for my Nextjs projects. This is going to be cool, trust me bro.
          </p>
          <div className="inline-flex flex-wrap items-center gap-3">
            <Button>Get Started</Button>
            <Button variant="outline">Get Started</Button>
          </div>
        </section>
      </main>
    </>
  );
}
