import { v4 as uuidv4 } from "uuid";
import { hashPassword } from "../../../lib/auth";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const { email, password } = data;

    if (
      !email ||
      !email.includes("@") ||
      !password ||
      password.trim().length > 7
    ) {
      res.status(422).json({
        message:
          "Invalid input - password should also be at least 7 characters long.",
      });
      return;
    }
    const users = await (await fetch("http://localhost:3001/users")).json();
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      res.status(422).json({ message: "Email already exists" });
      return;
    }

    const newData = {
      id: uuidv4(),
      email,
      password: await hashPassword(password),
    };

    await fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    });

    res.status(201).json({ message: "User created" });
  }
}

export default handler;
