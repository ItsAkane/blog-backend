import prisma from "../config/db.js";

async function createLogin(data) {
	return prisma.login.create({ data });
}

async function getAllLogin() {
	return prisma.login.findMany();
}

async function updateLogin(id, data) {
	return prisma.login.update({
		where: { id: Number(id) },
		data,
	});
}

async function deleteLogin(id) {
	return prisma.login.delete({ where: { id: Number(id) } });
}

export default {
	createLogin,
	getAllLogin,
	updateLogin,
	deleteLogin,
};
