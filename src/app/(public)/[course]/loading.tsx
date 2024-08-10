import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {

  return (
    <>
      <main className="space-y-6 p-4 pb-24 mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tighter md:text-4xl w-full">Fetching notes...</h1>
        <div className="mx-auto w-full">
          <input
            type="text"
            className="w-full rounded-md h-8 px-2 border border-border"
            placeholder="Search notes here.."
          />
        </div>
        <ul className="mx-auto w-full divide-y divide-border">
          {Array(8)
            .fill(0)
            .map((_, index) => (
              <li key={index} className="pl-4 pr-2 py-2
            flex justify-between items-center
            ">
                <div>
                  <Skeleton className="h-6 w-24 lg:w-80" />
                  <br />
                  <Skeleton className="h-3 w-12 lg:w-32 -mt-5" />
                </div>
                <Skeleton className="h-8 w-24" />
              </li>
            ))}
        </ul>
      </main>
    </>
  )
}
