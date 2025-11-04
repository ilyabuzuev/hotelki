/*
  Warnings:

  - A unique constraint covering the columns `[categoryType]` on the table `WishList` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "WishList_categoryType_key" ON "public"."WishList"("categoryType");
