import { Request, Response } from "express";

interface User {
  id: number;
  name: string;
  age: number;
}


let users: User[] = [];
export const createUser = (req: Request, res: Response) => {
  try {
    const newUser: User = { id: Date.now(), ...req.body };
    users.push(newUser);
    return res.status(201).json(newUser);
  } catch {
    return res.status(500).json({ message: "Error creating user" });
  }
};


export const getUsers = (req: Request, res: Response) => {
  try {
    return res.json(users);
  } catch {
    return res.status(500).json({ message: "Error fetching users" });
  }
}

export const getUser = (req: Request, res: Response) => {
  try {
    const user = users.find(u => u.id === Number(req.params.id));
    if (!user) return res.status(404).json({ message: "User not found" });
    return res.json(user);
  } catch {
    return res.status(500).json({ message: "Error fetching user" });
  }
};


export const updateUser = (req: Request, res: Response) => {
  try {
    const index = users.findIndex(u => u.id === Number(req.params.id));
    if (index === -1) return res.status(404).json({ message: "User not found" });

    users[index] = { id: users[index].id, ...req.body };
    return res.json(users[index]);
  } catch {
    return res.status(500).json({ message: "Error updating user" });
  }
};


export const deleteUser = (req: Request, res: Response) => {
  try {
    const before = users.length;
    users = users.filter(u => u.id !== Number(req.params.id));
    if (users.length === before) return res.status(404).json({ message: "User not found" });

    return res.json({ message: "User deleted" });
  } catch {
    return res.status(500).json({ message: "Error deleting user" });
  }
};
