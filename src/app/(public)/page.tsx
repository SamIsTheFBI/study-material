import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GiSpellBook } from "react-icons/gi";
import { LuArrowRight } from "react-icons/lu";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function Home() {
  return (
    <>
      <main className="space-y-6 p-4">
        <section className="space-y-2 max-w-3xl mx-auto">
          <Link className="inline-flex group items-center rounded-lg bg-muted px-3 py-1 text-xs font-medium" href="/changelog">
            <GiSpellBook />
            <div className="shrink-0 bg-border w-[1px] mx-2 h-4"></div>
            <span>Changelog</span>
            <LuArrowRight className="ml-1 group-hover:ml-2 group-hover:translate-x-1 transition-all" />
          </Link>
          <p className="text-3xl font-bold tracking-tighter md:text-4xl w-full">
            Your one stop solution for sharing college notes.
          </p>
          <p className="text-muted-foreground mx-auto">
            Start by choosing your year from the dock on the bottom of your screen.
          </p>
          <div className="inline-flex flex-wrap items-center gap-3">
            <Button asChild>
              <Link href="/branch">Browse Notes</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/dashboard">
                Start Uploading
              </Link>
            </Button>
          </div>
        </section>
        <section className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-xl tracking-tighter font-bold">Top contributors</h2>
          <Table className="border border-border">
            <TableHeader>
              <TableRow>
                <TableHead className="w-6">#</TableHead>
                <TableHead>Student Name</TableHead>
                <TableHead># shared notes</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>Desh Deepak Kant</TableCell>
                <TableCell>69</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2</TableCell>
                <TableCell>Anmol Kr. Yadav</TableCell>
                <TableCell>50</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>3</TableCell>
                <TableCell>Kadam Sahil</TableCell>
                <TableCell>43</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>4</TableCell>
                <TableCell>Shivam Shekhar Soy</TableCell>
                <TableCell>35</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>
      </main>
    </>
  );
}
