import prisma from "../config/db.js";

async function createUser(data) {
	return prisma.user.create({ data });
}

async function getAllUsers() {
	return prisma.user.findMany();
}

async function updateUser(id, data) {
	return prisma.user.update({
		where: { id: Number(id) },
		data,
	});
}

async function deleteUser(id) {
	return prisma.user.delete({ where: { id: Number(id) } });
}

export default {
	createUser,
	getAllUsers,
	updateUser,
	deleteUser,
};
