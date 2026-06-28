import userService from "../services/user.service.js";

async function create(req, res) {
	try {
		const user = await userService.createUser(req.body);
		res.status(201).json(user);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}

async function getAll(req, res) {
	try {
		const users = await userService.getAllUsers();
		res.status(200).json(users);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}

export default { create, getAll };
