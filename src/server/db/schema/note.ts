import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { users } from "./auth";

export const notes = pgTable("note", {
  id: text("id").primaryKey(),
  uploaderId: text("uploader_id").notNull().references(() => users.id, { onDelete: 'cascade' }),
  publicLink: text("public_link"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
})
