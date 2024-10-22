CREATE TYPE "public"."purpose_of_enquiry_enum" AS ENUM('482 Visa', '407 Visa', 'Student Visa', 'Skills Assessment', 'Student Enquiry', 'Migration Enquiry', '186 Visa', 'General Consultation', 'PR Pathways', 'Other');--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "general_enquiry" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"full_name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"country" varchar(255) NOT NULL,
	"phone_number" varchar(50) NOT NULL,
	"purpose_of_enquiry" "purpose_of_enquiry_enum" NOT NULL,
	"follow_up_dates" date[] DEFAULT '{}',
	"remarks" varchar(500),
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
