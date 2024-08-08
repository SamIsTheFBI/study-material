import { Button } from "@/components/ui/button";
import computerscience_3 from "@/data/computerscience_3";
import { FaGoogleDrive } from "react-icons/fa6";

export default function Page({ params }: { params: { course: string } }) {
  return (
    <>
      <main className="space-y-6 p-4 pb-24 mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tighter md:text-4xl w-full">Browsing through {params.course} notes...</h1>
        <div className="mx-auto w-full">
          <input type="text" className="w-full rounded-md h-8 px-2 border border-border" placeholder="Search here.." />
        </div>
        <ul className="mx-auto divide-y divide-border">
          {computerscience_3.map((notes) => (
            <li
              key={Math.random()}
              className="pl-4 pr-2 py-2
            flex justify-between items-center
            ">
              <div>
                <span>{notes.title}</span>
                <br />
                <span className="text-muted-foreground text-sm">{notes.uploader}</span>
              </div>
              <div className="flex gap-x-2">
                <Button variant="outline" className="h-8">
                  <FaGoogleDrive />
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}
