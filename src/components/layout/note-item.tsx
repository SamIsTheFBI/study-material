import Link from "next/link";
import { FaGoogleDrive } from "react-icons/fa6";
import { RiLinksFill } from "react-icons/ri";
import { Button } from "../ui/button";
import { SiMega } from "react-icons/si";

type Note = {
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
}

export default function NoteItem({ noteItem }: { noteItem: Note }) {
  return (
    <li
      key={noteItem.note.id}
      className="pl-4 pr-2 py-2
            flex justify-between items-center
            ">
      <div>
        <span>{noteItem.note.title}</span>
        <br />
        <span className="text-muted-foreground text-sm">{noteItem.user?.name}</span>
      </div>
      <div className="flex gap-x-2">
        <Button variant="outline" className="h-8" asChild>
          <Link href={noteItem.note.publicLink} className="flex gap-x-3" target="_blank">
            Download
            {
              noteItem.note.publicLink.includes('mega.nz') &&
              <SiMega />
              || noteItem.note.publicLink.includes('drive.google.com') &&
              <FaGoogleDrive />
              ||
              <RiLinksFill />
            }
          </Link>
        </Button>
      </div>
    </li>
  )
}
