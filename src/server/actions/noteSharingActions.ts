"use server"

import { db } from "@/server/db"
import { notes } from "../db/schema/note";
import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";
import { users } from "../db/schema/auth";
import { branches } from "../db/schema/branch";

type NoteValues = {
  title: string;
  link: string;
  year: "1" | "2" | "3" | "4";
  branch: "all_1" | "civil" | "computerscience" | "electrical" | "ece" | "ei" | "mechanical" | "production";
}

export async function getNotesByUserId(userId: string) {
  const res = await db.select()
    .from(notes)
    .where(eq(notes.uploaderId, userId))
  return res
}

export async function getNotesByBranchCode(branchCode: string) {
  const res = await db.select()
    .from(notes)
    .where(eq(notes.branchCode, branchCode))
    .leftJoin(users, eq(users.id, notes.uploaderId))
    .leftJoin(branches, eq(branches.branchCode, notes.branchCode))
  return res
}

export async function uploadNotesLink(noteValues: NoteValues, userId: string) {
  let branch = noteValues.branch
  if (branch !== "all_1") {
    if (noteValues.year == "1") {
      return {
        error: "Please put 1 in year only when choosing branch as 1st year"
      }
    }
    branch += `_${noteValues.year}`
  }

  console.log(branch)
  try {
    await db.insert(notes).values({
      uploaderId: userId,
      publicLink: noteValues.link,
      createdAt: new Date(),
      branchCode: branch,
      title: noteValues.title,
    })

    revalidatePath('/dashboard')
    return {
      success: true,
    }
  } catch (e) {
    return {
      error: 'An error occurred when trying to upload link...'
    }
  }
}
