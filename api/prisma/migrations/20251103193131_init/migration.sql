/*
  Warnings:

  - Added the required column `categoryType` to the `WishList` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."WishList" ADD COLUMN     "categoryType" "public"."AttributeType" NOT NULL;
