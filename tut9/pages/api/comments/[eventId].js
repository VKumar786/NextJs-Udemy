import { MongoClient } from "mongodb";

async function handler(req, res) {
  const eventId = req.query.eventId;
  const client = await MongoClient.connect(
    "mongodb://localhost:27017/myNextjs"
  );
  if (req.method === "POST") {
    const { email, name, text } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    const comment = {
      id: new Date().toISOString(),
      email,
      name,
      text,
    };
    await (
      await fetch("http://localhost:3001/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(comment),
      })
    ).json();

    const db = client.db();
    const commentsCollection = db.collection("comments");
    const result = await commentsCollection.insertOne({ comment });
    client.close();

    res.status(201).json({ message: "Added Comment", comment });
    return;
  }

  if (req.method === "GET") {
    const data = await (await fetch("http://localhost:3001/comments")).json();
    const db = client.db();
    data = db.collection("comments").find().sort({ _id: -1 }).toArray();
    res.status(200).json({ comments: data });
  }
}

export default handler;
