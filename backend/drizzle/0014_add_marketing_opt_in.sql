ALTER TABLE "profiles" ADD COLUMN "marketing_opt_in" boolean DEFAULT false NOT NULL;
ALTER TABLE "profiles" ADD COLUMN "marketing_opt_in_at" timestamp with time zone;
