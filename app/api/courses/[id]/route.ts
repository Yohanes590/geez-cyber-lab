import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { MongodbConnection } from "@/lib/mongo";
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  const objectID = new ObjectId(id);
  const DB = await MongodbConnection.db("SchoolDB");
  const usersData = await DB.collection("usersDB").findOne({
    _id: objectID,
  });
  return NextResponse.json(usersData?.course);
}
