import NoteItem from "@/components/layout/note-item";
import NoteList from "@/components/layout/note-list";
import { getNotesByBranchCode } from "@/server/actions/noteSharingActions";

export default async function Page({ params }: { params: { course: string } }) {
  const branchNotes = await getNotesByBranchCode(params.course)
  console.log(branchNotes)

  return (
    <>
      <main className="space-y-6 p-4 pb-24 mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tighter md:text-4xl w-full">Browsing through {} notes...</h1>
        <NoteList branchNotes={branchNotes} />
      </main>
    </>
  )
}
