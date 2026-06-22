import prisma from "../utils/prisma";
import userService from "../services/user.service";

async function getAll(req, res) {
	try {
		const users = await userService.getAllUsers();
		res.status(200).json(users);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}

export default { getAll };
