ALTER TABLE "profiles" DROP CONSTRAINT "profiles_first_name_unique";--> statement-breakpoint
ALTER TABLE "profiles" DROP CONSTRAINT "profiles_last_name_unique";--> statement-breakpoint
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_email_unique" UNIQUE("email");