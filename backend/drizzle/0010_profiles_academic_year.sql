-- Migration: add academic_year to profiles, change PK to surrogate UUID, scope uniqueness per year

-- 1. Drop FK constraints that reference profiles.id
ALTER TABLE "member_merch" DROP CONSTRAINT IF EXISTS "member_merch_member_id_profiles_id_fk";--> statement-breakpoint
ALTER TABLE "event_registrations" DROP CONSTRAINT IF EXISTS "event_registrations_member_id_profiles_id_fk";--> statement-breakpoint

-- 2. Drop old unique constraints
ALTER TABLE "profiles" DROP CONSTRAINT IF EXISTS "profiles_student_id_unique";--> statement-breakpoint
ALTER TABLE "profiles" DROP CONSTRAINT IF EXISTS "profiles_email_unique";--> statement-breakpoint

-- 3. Rename current id (auth UUID) to user_id
ALTER TABLE "profiles" RENAME COLUMN "id" TO "user_id";--> statement-breakpoint

-- 4. Add new surrogate UUID primary key
ALTER TABLE "profiles" DROP CONSTRAINT IF EXISTS "profiles_pkey";--> statement-breakpoint
ALTER TABLE "profiles" ADD COLUMN "id" uuid DEFAULT gen_random_uuid() NOT NULL;--> statement-breakpoint
ALTER TABLE "profiles" ADD PRIMARY KEY ("id");--> statement-breakpoint

-- 5. Add academic_year (default to current year for any existing rows)
ALTER TABLE "profiles" ADD COLUMN "academic_year" text NOT NULL DEFAULT '2026-2027';--> statement-breakpoint

-- 6. New unique constraints (scoped per year)
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_user_year_unique" UNIQUE ("user_id", "academic_year");--> statement-breakpoint
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_student_year_unique" UNIQUE ("student_id", "academic_year");--> statement-breakpoint
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_email_year_unique" UNIQUE ("email", "academic_year");--> statement-breakpoint

-- 7. Remap member_merch.member_id from old auth UUID → new surrogate profiles.id
UPDATE "member_merch" mm
SET "member_id" = p."id"
FROM "profiles" p
WHERE mm."member_id" = p."user_id";--> statement-breakpoint

-- 8. Restore FK on member_merch to the new surrogate profiles.id
ALTER TABLE "member_merch" ADD CONSTRAINT "member_merch_member_id_profiles_id_fk"
  FOREIGN KEY ("member_id") REFERENCES "profiles"("id") ON DELETE CASCADE;

-- 9. event_registrations.member_id now stores auth UUID with no FK
-- (intentionally not re-adding that FK — a user spans multiple academic years)
