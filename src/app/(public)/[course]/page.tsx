import NoteItem from "@/components/layout/note-item";
import { getNotesByBranchCode } from "@/server/actions/noteSharingActions";

export default async function Page({ params }: { params: { course: string } }) {
  const branchNotes = await getNotesByBranchCode(params.course)
  console.log(branchNotes)

  return (
    <>
      <main className="space-y-6 p-4 pb-24 mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tighter md:text-4xl w-full">Browsing through {} notes...</h1>
        <div className="mx-auto w-full">
          <input type="text" className="w-full rounded-md h-8 px-2 border border-border" placeholder="Search here.." />
        </div>
        <ul className="mx-auto w-full divide-y divide-border">
          {branchNotes.map((note) => (
            <NoteItem key={note.note.id} noteItem={note} />
          ))}
        </ul>
      </main>
    </>
  )
}
