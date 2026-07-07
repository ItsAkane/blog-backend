-- CreateTable
CREATE TABLE "Login" (
    "id" SERIAL NOT NULL,
    "loginName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "permission" TEXT,

    CONSTRAINT "Login_pkey" PRIMARY KEY ("id")
);
