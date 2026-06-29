-- CreateTable
CREATE TABLE "Login" (
    "id" SERIAL NOT NULL,
    "loginName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Login_pkey" PRIMARY KEY ("id")
);
