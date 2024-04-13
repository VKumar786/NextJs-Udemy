// import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method !== "POST")
    res.status(201).json({ message: "Method Not Allowed" });

  const email = req.body.email;
  if (!email || !email.includes("@")) {
    res.status(422).json({ message: "Invalid email address." });
    return;
  }

  // Store email in a database
  // const client = await MongoClient.connect(
  //   "mongodb://localhost:27017/myNextjs"
  // );
  // const db = client.db();
  // const emailsCollection = db.collection("emails");
  // const result = await emailsCollection.insertOne({ email });
  // client.close();
  res.status(201).json({ message: "Signed up!" });
  return;
}

export default handler;
