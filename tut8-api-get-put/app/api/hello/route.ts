import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest, res: NextResponse) {
  return Response.json({ message: "Hello from Next.js!" });
}

export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.json();
  const newData = {
    id: new Date().toDateString().split(" ").join("-").toLowerCase(),
    ...data,
  };

  await fetch("http://localhost:3001/feedbacks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newData),
  });

  return Response.json({ ...newData });
}
