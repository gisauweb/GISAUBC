ALTER TABLE "posts" RENAME COLUMN "coverImage" TO "cover_image";--> statement-breakpoint
ALTER TABLE "posts" RENAME COLUMN "instagramLink" TO "instagram_link";--> statement-breakpoint
ALTER TABLE "posts" RENAME COLUMN "createdAt" TO "created_at";--> statement-breakpoint
ALTER TABLE "posts" RENAME COLUMN "updatedAt" TO "updated_at";--> statement-breakpoint
ALTER TABLE "posts" RENAME COLUMN "registrationLink" TO "registration_link";--> statement-breakpoint
ALTER TABLE "posts" RENAME COLUMN "infoLink" TO "info_link";--> statement-breakpoint
ALTER TABLE "posts" RENAME COLUMN "priceMember" TO "price_member";--> statement-breakpoint
ALTER TABLE "posts" RENAME COLUMN "priceRegular" TO "price_regular";--> statement-breakpoint
ALTER TABLE "profiles" ADD COLUMN "payment_method" text DEFAULT 'card' NOT NULL;