/*
  Warnings:

  - You are about to drop the column `name` on the `Tournament` table. All the data in the column will be lost.
  - Added the required column `testing` to the `Tournament` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Tournament" DROP COLUMN "name",
ADD COLUMN     "testing" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "public"."Tournament2" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Tournament2_pkey" PRIMARY KEY ("id")
);
