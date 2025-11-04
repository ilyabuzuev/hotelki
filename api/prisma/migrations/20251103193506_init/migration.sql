/*
  Warnings:

  - Changed the type of `type` on the `Attribute` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `categoryType` on the `WishList` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "public"."Attribute" DROP COLUMN "type",
ADD COLUMN     "type" "public"."AttributeType" NOT NULL;

-- AlterTable
ALTER TABLE "public"."WishList" DROP COLUMN "categoryType",
ADD COLUMN     "categoryType" TEXT NOT NULL;
