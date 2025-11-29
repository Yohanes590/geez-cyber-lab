import jwt, { JwtPayload } from "jsonwebtoken";
import fs from "fs";
import { ObjectId } from "mongodb";
import { MongodbConnection } from "../mongo";
import { NextResponse } from "next/server";

export async function verifyUserToken(token: string) {
  const DB = await MongodbConnection.db("SchoolDB");
  const verifyJWT = jwt.verify(token, process.env.SECRET_KEY!, {
    algorithms: ["HS256"],
  }) as JwtPayload;
  const objectID = new ObjectId(verifyJWT.user_id);
  try {
    const userData = await DB.collection("usersDB").findOne({
      _id: objectID,
    });
    return userData;
  } catch (error) {
    return NextResponse.json({
      message: "can't verify the token",
      status: 500,
    });
  }
}
