import { pgEnum } from "drizzle-orm/pg-core";

export const enquiryEnum = pgEnum('purpose_of_enquiry_enum', [
    '482 Visa',
    '407 Visa',
    'Student Visa',
    'Skills Assessment',
    'Student Enquiry',
    'Migration Enquiry',
    '186 Visa',
    'General Consultation',
    'PR Pathways',
    'Other'
]);