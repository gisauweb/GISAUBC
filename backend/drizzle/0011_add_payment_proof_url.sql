-- Migration: add payment_proof_url column to profiles for Interac e-Transfer proof screenshots
ALTER TABLE "profiles" ADD COLUMN IF NOT EXISTS "payment_proof_url" text;
