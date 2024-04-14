import { v4 as uuidv4 } from "uuid";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.json();

  const { title, image, address, description } = data;

  const newData = {
    id: uuidv4(),
    ...data,
  };

  await fetch("http://localhost:3001/meetups", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newData),
  });

  return Response.json({ message: "Meetup created successfully" });
}
