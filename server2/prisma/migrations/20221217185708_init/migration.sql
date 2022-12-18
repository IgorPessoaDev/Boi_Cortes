-- CreateTable
CREATE TABLE "login" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "senha" INTEGER NOT NULL,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false
);

-- CreateTable
CREATE TABLE "schedules" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "data" DATETIME NOT NULL,
    "authorName" TEXT,
    CONSTRAINT "schedules_authorName_fkey" FOREIGN KEY ("authorName") REFERENCES "login" ("nome") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "login_nome_key" ON "login"("nome");
