import { pgTable, uuid, varchar, timestamp, date } from "drizzle-orm/pg-core";

export const generalEnquiry = pgTable("general_enquiry", {
    id: uuid('id').primaryKey().defaultRandom(),
    fullName: varchar('full_name', { length: 255 }).notNull(),
    email: varchar('email', { length: 255 }).notNull(),
    country: varchar('country', { length: 255 }).notNull(),
    phoneNumber: varchar('phone_number', { length: 50 }).notNull(),
    purposeOfEnquiry: varchar('purpose_of_enquiry', { length: 255 }),
    followUpDates: date('follow_up_dates').array().default([]), 
    remarks: varchar('remarks', { length: 500 }), 
    createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { mode: "date" })
        .defaultNow()
        .$onUpdateFn(() => new Date())
        .notNull(),
});


export type Enquiry = typeof generalEnquiry.$inferSelect;
export type NewEnquiry = Omit<typeof generalEnquiry.$inferInsert, "follow_up_dates" | "remarks" | "followed_up_by">; 
