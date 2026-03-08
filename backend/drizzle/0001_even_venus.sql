CREATE TYPE "public"."membership_type" AS ENUM('full', 'half');--> statement-breakpoint
DROP TYPE "public"."user_role";--> statement-breakpoint
CREATE TYPE "public"."user_role" AS ENUM('member', 'admin');--> statement-breakpoint
ALTER TABLE "profiles" ADD COLUMN "faculty" text DEFAULT '' NOT NULL;--> statement-breakpoint
ALTER TABLE "profiles" ADD COLUMN "membership_type" "membership_type" DEFAULT 'full' NOT NULL;--> statement-breakpoint
ALTER TABLE "profiles" ADD COLUMN "year_of_study" text DEFAULT '' NOT NULL;--> statement-breakpoint
ALTER TABLE "profiles" ADD COLUMN "looking_forward" text DEFAULT '' NOT NULL;--> statement-breakpoint
ALTER TABLE "profiles" ADD COLUMN "role" "user_role" DEFAULT 'member' NOT NULL; 