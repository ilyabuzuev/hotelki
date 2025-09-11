-- CreateTable
CREATE TABLE "public"."Wish" (
    "id" TEXT NOT NULL,
    "categoryType" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Wish_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."WishData" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "wishId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WishData_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."WishData" ADD CONSTRAINT "WishData_wishId_fkey" FOREIGN KEY ("wishId") REFERENCES "public"."Wish"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
