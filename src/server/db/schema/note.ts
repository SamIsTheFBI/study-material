import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { users } from "./auth";
import { branches } from "./branch";

export const notes = pgTable("note", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: text("title").notNull(),
  uploaderId: text("uploader_id").notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  publicLink: text("public_link").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  branchCode: text("branch_code").notNull()
    .references(() => branches.branchCode, { onDelete: 'set default' })
    .default('all'),
})
