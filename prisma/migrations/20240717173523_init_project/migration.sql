/*
  Warnings:

  - You are about to drop the column `github` on the `projects` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "projects" DROP COLUMN "github",
ADD COLUMN     "githubClient" TEXT,
ADD COLUMN     "githubServer" TEXT;
