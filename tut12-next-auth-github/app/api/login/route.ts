import { v4 as uuidv4 } from "uuid";
import { verifyPassword } from "../../../lib/auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.json();
  const { email, password } = data;

  if (
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length > 7
  ) {
    NextResponse.json({
      message:
        "Invalid input - password should also be at least 7 characters long.",
    });
    return;
  }

  const users = await (await fetch("http://localhost:3001/users")).json();
  const existingUser = users.find((user: any) => user.email === email);
  if (!existingUser) {
    NextResponse.json({ message: "Email don't exists" });
    return;
  }

  const isValid = await verifyPassword(password, existingUser.password);

  if (!isValid) {
    NextResponse.json({ message: "Invalid password" });
    return;
  } else {
    NextResponse.json({ message: "Logged in" });
  }
}
