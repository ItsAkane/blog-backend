/*
  Warnings:

  - You are about to drop the column `loginName` on the `Login` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[login]` on the table `Login` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `login` to the `Login` table without a default value. This is not possible if the table is not empty.
  - Made the column `permission` on table `Login` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Login" DROP COLUMN "loginName",
ADD COLUMN     "login" TEXT NOT NULL,
ALTER COLUMN "permission" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Login_login_key" ON "Login"("login");
