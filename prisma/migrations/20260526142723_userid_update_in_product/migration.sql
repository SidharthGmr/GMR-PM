-- DropForeignKey
ALTER TABLE "product" DROP CONSTRAINT "product_createdById_fkey";

-- DropForeignKey
ALTER TABLE "product" DROP CONSTRAINT "product_updatedById_fkey";

-- AlterTable
ALTER TABLE "product" ALTER COLUMN "createdById" SET DATA TYPE TEXT,
ALTER COLUMN "updatedById" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "users"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;
