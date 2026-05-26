/*
  Warnings:

  - You are about to drop the column `storeId` on the `attribute` table. All the data in the column will be lost.
  - You are about to drop the column `storeId` on the `brandName` table. All the data in the column will be lost.
  - You are about to drop the column `storeId` on the `category` table. All the data in the column will be lost.
  - You are about to drop the column `storeId` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `storeId` on the `orderItem` table. All the data in the column will be lost.
  - You are about to drop the column `storeId` on the `payment` table. All the data in the column will be lost.
  - You are about to drop the column `storeId` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `storeId` on the `productAttribute` table. All the data in the column will be lost.
  - You are about to drop the column `storeId` on the `productVariant` table. All the data in the column will be lost.
  - You are about to drop the column `storeId` on the `staff` table. All the data in the column will be lost.
  - You are about to drop the column `storeId` on the `staffAttendance` table. All the data in the column will be lost.
  - You are about to drop the column `storeId` on the `staffSalary` table. All the data in the column will be lost.
  - You are about to drop the column `storeId` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name,storeCode]` on the table `attribute` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[brandName,storeCode]` on the table `brandName` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name,storeCode]` on the table `category` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `userProfile` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `storeCode` to the `attribute` table without a default value. This is not possible if the table is not empty.
  - Added the required column `storeCode` to the `brandName` table without a default value. This is not possible if the table is not empty.
  - Added the required column `storeCode` to the `category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `storeCode` to the `order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `storeCode` to the `orderItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `storeCode` to the `payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `storeCode` to the `product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `storeCode` to the `productAttribute` table without a default value. This is not possible if the table is not empty.
  - Added the required column `storeCode` to the `productVariant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `storeCode` to the `staff` table without a default value. This is not possible if the table is not empty.
  - Added the required column `storeCode` to the `staffAttendance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `storeCode` to the `staffSalary` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `userProfile` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "attribute" DROP CONSTRAINT "attribute_storeId_fkey";

-- DropForeignKey
ALTER TABLE "brandName" DROP CONSTRAINT "brandName_storeId_fkey";

-- DropForeignKey
ALTER TABLE "category" DROP CONSTRAINT "category_storeId_fkey";

-- DropForeignKey
ALTER TABLE "order" DROP CONSTRAINT "order_storeId_fkey";

-- DropForeignKey
ALTER TABLE "orderItem" DROP CONSTRAINT "orderItem_storeId_fkey";

-- DropForeignKey
ALTER TABLE "payment" DROP CONSTRAINT "payment_storeId_fkey";

-- DropForeignKey
ALTER TABLE "product" DROP CONSTRAINT "product_storeId_fkey";

-- DropForeignKey
ALTER TABLE "productAttribute" DROP CONSTRAINT "productAttribute_storeId_fkey";

-- DropForeignKey
ALTER TABLE "productVariant" DROP CONSTRAINT "productVariant_storeId_fkey";

-- DropForeignKey
ALTER TABLE "staff" DROP CONSTRAINT "staff_storeId_fkey";

-- DropForeignKey
ALTER TABLE "staffAttendance" DROP CONSTRAINT "staffAttendance_storeId_fkey";

-- DropForeignKey
ALTER TABLE "staffSalary" DROP CONSTRAINT "staffSalary_storeId_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_storeId_fkey";

-- DropIndex
DROP INDEX "attribute_name_storeId_key";

-- DropIndex
DROP INDEX "attribute_storeId_idx";

-- DropIndex
DROP INDEX "brandName_brandName_storeId_key";

-- DropIndex
DROP INDEX "brandName_storeId_idx";

-- DropIndex
DROP INDEX "category_name_storeId_key";

-- DropIndex
DROP INDEX "category_storeId_idx";

-- DropIndex
DROP INDEX "orderItem_storeId_idx";

-- DropIndex
DROP INDEX "payment_storeId_idx";

-- DropIndex
DROP INDEX "productAttribute_storeId_idx";

-- DropIndex
DROP INDEX "productVariant_storeId_idx";

-- DropIndex
DROP INDEX "staff_storeId_idx";

-- AlterTable
ALTER TABLE "attribute" DROP COLUMN "storeId",
ADD COLUMN     "storeCode" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "brandName" DROP COLUMN "storeId",
ADD COLUMN     "storeCode" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "category" DROP COLUMN "storeId",
ADD COLUMN     "storeCode" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "order" DROP COLUMN "storeId",
ADD COLUMN     "storeCode" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "orderItem" DROP COLUMN "storeId",
ADD COLUMN     "storeCode" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "payment" DROP COLUMN "storeId",
ADD COLUMN     "storeCode" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "product" DROP COLUMN "storeId",
ADD COLUMN     "storeCode" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "productAttribute" DROP COLUMN "storeId",
ADD COLUMN     "storeCode" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "productVariant" DROP COLUMN "storeId",
ADD COLUMN     "storeCode" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "staff" DROP COLUMN "storeId",
ADD COLUMN     "storeCode" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "staffAttendance" DROP COLUMN "storeId",
ADD COLUMN     "storeCode" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "staffSalary" DROP COLUMN "storeId",
ADD COLUMN     "storeCode" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "userProfile" ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "storeId",
ADD COLUMN     "isRegisterbyShop" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "storeCode" TEXT;

-- CreateIndex
CREATE INDEX "attribute_storeCode_idx" ON "attribute"("storeCode");

-- CreateIndex
CREATE UNIQUE INDEX "attribute_name_storeCode_key" ON "attribute"("name", "storeCode");

-- CreateIndex
CREATE INDEX "brandName_storeCode_idx" ON "brandName"("storeCode");

-- CreateIndex
CREATE UNIQUE INDEX "brandName_brandName_storeCode_key" ON "brandName"("brandName", "storeCode");

-- CreateIndex
CREATE INDEX "category_storeCode_idx" ON "category"("storeCode");

-- CreateIndex
CREATE UNIQUE INDEX "category_name_storeCode_key" ON "category"("name", "storeCode");

-- CreateIndex
CREATE INDEX "orderItem_storeCode_idx" ON "orderItem"("storeCode");

-- CreateIndex
CREATE INDEX "payment_storeCode_idx" ON "payment"("storeCode");

-- CreateIndex
CREATE INDEX "productAttribute_storeCode_idx" ON "productAttribute"("storeCode");

-- CreateIndex
CREATE INDEX "productVariant_storeCode_idx" ON "productVariant"("storeCode");

-- CreateIndex
CREATE INDEX "staff_storeCode_idx" ON "staff"("storeCode");

-- CreateIndex
CREATE UNIQUE INDEX "userProfile_email_key" ON "userProfile"("email");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_storeCode_fkey" FOREIGN KEY ("storeCode") REFERENCES "store"("code") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "category" ADD CONSTRAINT "category_storeCode_fkey" FOREIGN KEY ("storeCode") REFERENCES "store"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_storeCode_fkey" FOREIGN KEY ("storeCode") REFERENCES "store"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "brandName" ADD CONSTRAINT "brandName_storeCode_fkey" FOREIGN KEY ("storeCode") REFERENCES "store"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attribute" ADD CONSTRAINT "attribute_storeCode_fkey" FOREIGN KEY ("storeCode") REFERENCES "store"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "productAttribute" ADD CONSTRAINT "productAttribute_storeCode_fkey" FOREIGN KEY ("storeCode") REFERENCES "store"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "productVariant" ADD CONSTRAINT "productVariant_storeCode_fkey" FOREIGN KEY ("storeCode") REFERENCES "store"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "staff" ADD CONSTRAINT "staff_storeCode_fkey" FOREIGN KEY ("storeCode") REFERENCES "store"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "staffAttendance" ADD CONSTRAINT "staffAttendance_storeCode_fkey" FOREIGN KEY ("storeCode") REFERENCES "store"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_storeCode_fkey" FOREIGN KEY ("storeCode") REFERENCES "store"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orderItem" ADD CONSTRAINT "orderItem_storeCode_fkey" FOREIGN KEY ("storeCode") REFERENCES "store"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payment" ADD CONSTRAINT "payment_storeCode_fkey" FOREIGN KEY ("storeCode") REFERENCES "store"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "staffSalary" ADD CONSTRAINT "staffSalary_storeCode_fkey" FOREIGN KEY ("storeCode") REFERENCES "store"("code") ON DELETE RESTRICT ON UPDATE CASCADE;
