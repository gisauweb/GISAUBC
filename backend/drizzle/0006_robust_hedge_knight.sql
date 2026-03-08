CREATE TYPE "public"."payment_status" AS ENUM('unpaid', 'paid_card', 'paid_cash', 'paid_existing_member', 'refunded');--> statement-breakpoint
ALTER TABLE "profiles" ADD COLUMN "payment_status" "payment_status" DEFAULT 'unpaid' NOT NULL;--> statement-breakpoint
ALTER TABLE "profiles" ADD COLUMN "payment_intent_id" text;--> statement-breakpoint
UPDATE "profiles" SET "payment_status" = CASE
  WHEN "payment_method" = 'card'  AND "has_payed" = true  THEN 'paid_card'::payment_status
  WHEN "payment_method" = 'cash'  AND "has_payed" = true  THEN 'paid_cash'::payment_status
  WHEN "payment_method" = 'payed'                         THEN 'paid_existing_member'::payment_status
  ELSE 'unpaid'::payment_status
END;