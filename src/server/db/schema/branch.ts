import { integer, pgTable, text, uuid } from "drizzle-orm/pg-core";

export const branches = pgTable("branch", {
  id: uuid("id").defaultRandom().notNull(),
  branchName: text("branch_name").notNull(),
  branchCode: text("branch_code").notNull().primaryKey(),
  year: integer("year").notNull(),
})
