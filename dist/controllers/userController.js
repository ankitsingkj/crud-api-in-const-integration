"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getUser = exports.getUsers = exports.createUser = void 0;
let users = [];
const createUser = (req, res) => {
    try {
        const newUser = { id: Date.now(), ...req.body };
        users.push(newUser);
        return res.status(201).json(newUser);
    }
    catch {
        return res.status(500).json({ message: "Error creating user" });
    }
};
exports.createUser = createUser;
const getUsers = (req, res) => {
    try {
        return res.json(users);
    }
    catch {
        return res.status(500).json({ message: "Error fetching users" });
    }
};
exports.getUsers = getUsers;
const getUser = (req, res) => {
    try {
        const user = users.find(u => u.id === Number(req.params.id));
        if (!user)
            return res.status(404).json({ message: "User not found" });
        return res.json(user);
    }
    catch {
        return res.status(500).json({ message: "Error fetching user" });
    }
};
exports.getUser = getUser;
const updateUser = (req, res) => {
    try {
        const index = users.findIndex(u => u.id === Number(req.params.id));
        if (index === -1)
            return res.status(404).json({ message: "User not found" });
        users[index] = { id: users[index].id, ...req.body };
        return res.json(users[index]);
    }
    catch {
        return res.status(500).json({ message: "Error updating user" });
    }
};
exports.updateUser = updateUser;
const deleteUser = (req, res) => {
    try {
        const before = users.length;
        users = users.filter(u => u.id !== Number(req.params.id));
        if (users.length === before)
            return res.status(404).json({ message: "User not found" });
        return res.json({ message: "User deleted" });
    }
    catch {
        return res.status(500).json({ message: "Error deleting user" });
    }
};
exports.deleteUser = deleteUser;
