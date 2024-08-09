"use client"

import { useState } from "react";
import NoteItem from "./note-item";

type BranchNotes = {
  user: {
    id: string;
    email: string;
    googlePfp: string | null;
    name: string | null;
  } | null;
  note: {
    id: string;
    title: string;
    uploaderId: string;
    publicLink: string;
    createdAt: Date;
    branchCode: string;
  };
  branch: {
    id: string;
    branchName: string;
    branchCode: string;
    year: number;
  } | null
}[]

export default function NoteList({ branchNotes }: { branchNotes: BranchNotes }) {
  const [search, setSearch] = useState('')
  return (
    <>
      <div className="mx-auto w-full">
        <input
          type="text"
          className="w-full rounded-md h-8 px-2 border border-border"
          placeholder="Search notes here.."
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
      </div>
      <ul className="mx-auto w-full divide-y divide-border">
        {branchNotes.filter((note) => note.note.title.toLowerCase().includes(search)).map((note) => (
          <NoteItem key={note.note.id} noteItem={note} />
        ))}
      </ul>
    </>
  )
}
