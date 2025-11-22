import { NextResponse } from "next/server";
import { MongodbConnection } from "@/lib/mongo";
import bcrypt from "bcryptjs";
import { JWTEncrypt } from "@/lib/(backend)/jwt-maker";
export async function POST(userRequest: Request) {
  const body = await userRequest.json();
  // Find from Database
  const DB = await MongodbConnection.db("SchoolDB");
  const findEmail = await DB.collection("usersDB").findOne({
    email: body.email,
  });
  if (findEmail) {
    const decodePassword = await bcrypt.compare(
      body.password,
      findEmail.password
    );
    if (!decodePassword) {
      return NextResponse.json({
        message: "no existed email or user!!",
        status: 400,
      });
    }
    const userObject = {
      insertedId: findEmail._id,
    };
    const token = JWTEncrypt(userObject);
    return NextResponse.json({
      message: "login successfully",
      token: token,
      status: 200,
    });
  } else {
    return NextResponse.json({
      message: "no existed email or user!!",
      status: 400,
    });
  }
}
