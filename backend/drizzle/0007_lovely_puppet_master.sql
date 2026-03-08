CREATE TYPE "public"."registration_status" AS ENUM('confirmed', 'cancelled');--> statement-breakpoint
CREATE TABLE "event_registrations" (
	"id" serial PRIMARY KEY NOT NULL,
	"event_id" integer NOT NULL,
	"member_id" uuid NOT NULL,
	"status" "registration_status" DEFAULT 'confirmed' NOT NULL,
	"payment_intent_id" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "posts" ADD COLUMN "capacity" integer;--> statement-breakpoint
ALTER TABLE "event_registrations" ADD CONSTRAINT "event_registrations_event_id_posts_id_fk" FOREIGN KEY ("event_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "event_registrations" ADD CONSTRAINT "event_registrations_member_id_profiles_id_fk" FOREIGN KEY ("member_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;