/*
  Warnings:

  - You are about to drop the `adoptionRequests` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `pets` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "adoptionRequests" DROP CONSTRAINT "adoptionRequests_petId_fkey";

-- DropForeignKey
ALTER TABLE "adoptionRequests" DROP CONSTRAINT "adoptionRequests_userId_fkey";

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "role" SET DEFAULT 'ADMIN';

-- DropTable
DROP TABLE "adoptionRequests";

-- DropTable
DROP TABLE "pets";

-- DropEnum
DROP TYPE "PetSize";

-- DropEnum
DROP TYPE "RequestStatus";

-- DropEnum
DROP TYPE "Species";

-- DropEnum
DROP TYPE "UserRole";
