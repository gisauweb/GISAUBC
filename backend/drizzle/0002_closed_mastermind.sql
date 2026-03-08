CREATE TABLE "member_merch" (
	"id" serial PRIMARY KEY NOT NULL,
	"member_id" uuid,
	"merch_id" text,
	"purchased_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "merch" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"price" numeric(10, 2) NOT NULL
);
--> statement-breakpoint
ALTER TABLE "profiles" RENAME COLUMN "looking_forward" TO "recommendation";--> statement-breakpoint
ALTER TABLE "profiles" ALTER COLUMN "year_of_study" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "profiles" ADD COLUMN "email" text NOT NULL;--> statement-breakpoint
ALTER TABLE "profiles" ADD COLUMN "has_payed" boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE "member_merch" ADD CONSTRAINT "member_merch_member_id_profiles_id_fk" FOREIGN KEY ("member_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "member_merch" ADD CONSTRAINT "member_merch_merch_id_merch_id_fk" FOREIGN KEY ("merch_id") REFERENCES "public"."merch"("id") ON DELETE cascade ON UPDATE no action;