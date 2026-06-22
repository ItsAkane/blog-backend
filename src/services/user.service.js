import prisma from "../config/db.js";

async function createUser(data) {
	return prisma.user.create({ data });
}

async function getAllUsers() {
	return prisma.user.findMany();
}

export default {
	createUser,
	getAllUsers,
};
