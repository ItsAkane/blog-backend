import "dotenv/config";

import { PrismaClient } from "../../generated/prisma/index.js";
import { PrismaPg } from "@prisma/adapter-pg";
const adapter = new PrismaPg({
	connectionString: process.env.DATABASE_URL,
});
const prisma = new PrismaClient({ adapter });

async function getUser() {
	const user = await prisma.user.findMany();
	console.log(user);
}
getUser();

export default prisma;
