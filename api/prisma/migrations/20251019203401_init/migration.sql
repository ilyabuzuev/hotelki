/*
  Warnings:

  - You are about to drop the column `categoryType` on the `Wish` table. All the data in the column will be lost.
  - You are about to drop the `WishData` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `value` to the `Wish` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wishListId` to the `Wish` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."WishData" DROP CONSTRAINT "WishData_wishId_fkey";

-- AlterTable
ALTER TABLE "public"."Wish" DROP COLUMN "categoryType",
ADD COLUMN     "value" TEXT NOT NULL,
ADD COLUMN     "wishListId" TEXT NOT NULL;

-- DropTable
DROP TABLE "public"."WishData";

-- CreateTable
CREATE TABLE "public"."WishList" (
    "id" TEXT NOT NULL,
    "categoryType" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WishList_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "WishList_categoryType_key" ON "public"."WishList"("categoryType");

-- AddForeignKey
ALTER TABLE "public"."Wish" ADD CONSTRAINT "Wish_wishListId_fkey" FOREIGN KEY ("wishListId") REFERENCES "public"."WishList"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
