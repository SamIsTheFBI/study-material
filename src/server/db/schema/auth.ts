import { boolean, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { z } from "zod";

export const users = pgTable("user", {
  id: text("id").primaryKey(),
  email: text("email").notNull().unique(),
  googlePfp: text("google_pfp"),
  name: text("name"),
})

export const sessions = pgTable("session", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expiresAt: timestamp("expires_at", {
    withTimezone: true,
    mode: "date",
  }).notNull(),
})

export const authenticationSchema = z.object({
  email: z.string().email().min(5).max(31),
  password: z
    .string()
    .min(4, { message: "must be at least 4 characters long" })
    .max(15, { message: "cannot be more than 15 characters long" }),
});

export const signUpSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email().min(5).max(62),
  password: z
    .string()
    .min(4, { message: "must be at least 4 characters long" })
    .max(15, { message: "cannot be more than 15 characters long" }),
})

export type NameAndUsernameAndPassword = z.infer<typeof signUpSchema>;
export type UsernameAndPassword = z.infer<typeof authenticationSchema>;

export type SelectUsers = typeof users.$inferSelect
export type InsertUsers = typeof users.$inferInsert
