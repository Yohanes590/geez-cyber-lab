import { NextResponse } from "next/server";
import { MongodbConnection } from "@/lib/mongo";
export async function POST() {
  const DB = await MongodbConnection.db("SchoolDB");
  const messages = await DB.collection("student-messages").find({}).toArray();
  return NextResponse.json(messages);
}
// const DB = await MongodbConnection.db("SchoolDB");
// const messages = await DB.collection("student-messages").find({}).toArray();
// return NextResponse.json(messages);
