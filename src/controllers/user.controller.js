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

async function update(req, res) {
	try {
		const user = await userService.updateUser(req.params.id, req.body);
		res.status(200).json(user);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}

async function remove(req, res) {
	try {
		await userService.deleteUser(req.params.id);
		res.status(204).send();
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}

export default { create, getAll, update, remove };
