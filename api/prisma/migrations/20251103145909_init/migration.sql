/*
  Warnings:

  - You are about to drop the column `categoryType` on the `WishList` table. All the data in the column will be lost.
  - Added the required column `categoryId` to the `WishList` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "public"."WishList_categoryType_key";

-- AlterTable
ALTER TABLE "public"."WishList" DROP COLUMN "categoryType",
ADD COLUMN     "categoryId" TEXT NOT NULL;
