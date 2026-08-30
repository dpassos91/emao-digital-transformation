import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const trialLessonRequests = sqliteTable("trial_lesson_requests", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  contactName: text("contact_name").notNull(),
  phone: text("phone").notNull(),
  email: text("email").notNull(),
  studentProfile: text("student_profile").notNull(),
  studentAge: integer("student_age").notNull(),
  interest: text("interest").notNull(),
  availability: text("availability"),
  message: text("message"),
  status: text("status").notNull().default("new"),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
});
