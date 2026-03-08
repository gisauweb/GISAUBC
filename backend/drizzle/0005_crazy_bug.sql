CREATE TABLE "existing_members" (
	"id" serial PRIMARY KEY NOT NULL,
	"student_id" text NOT NULL,
	"academic_year" text DEFAULT '2025-2026' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "existing_members_student_id_unique" UNIQUE("student_id")
);
