"use server"

import { db } from "@/server/db"
import { branches } from "../db/schema/branch"
import { eq } from "drizzle-orm"

export async function getBranchNameByCode(branchCode: string) {
  const res = await db.select()
    .from(branches)
    .where(eq(branches.branchCode, branchCode))
  return res
}
