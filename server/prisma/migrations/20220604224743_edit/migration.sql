/*
  Warnings:

  - You are about to drop the column `authorId` on the `schedules` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `schedules` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_schedules" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "data" DATETIME NOT NULL,
    "authorName" TEXT,
    CONSTRAINT "schedules_authorName_fkey" FOREIGN KEY ("authorName") REFERENCES "login" ("nome") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_schedules" ("data", "id") SELECT "data", "id" FROM "schedules";
DROP TABLE "schedules";
ALTER TABLE "new_schedules" RENAME TO "schedules";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
