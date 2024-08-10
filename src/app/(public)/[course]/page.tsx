import NotFound from "@/components/layout/not-found";
import NoteItem from "@/components/layout/note-item";
import NoteList from "@/components/layout/note-list";
import { getBranchNameByCode } from "@/server/actions/branchActions";
import { getNotesByBranchCode } from "@/server/actions/noteSharingActions";

export default async function Page({ params }: { params: { course: string } }) {
  const branchName = await getBranchNameByCode(params.course)

  if (branchName.length == 0) {
    return <NotFound />
  }

  const branchNotes = await getNotesByBranchCode(params.course)

  return (
    <>
      <main className="space-y-6 p-4 pb-24 mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tighter md:text-4xl w-full">Browsing through {branchName[0].branchName} notes...</h1>
        <NoteList branchNotes={branchNotes} />
      </main>
    </>
  )
}
