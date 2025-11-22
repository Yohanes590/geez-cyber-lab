import { NextResponse } from "next/server";
import { verifyUserToken } from "@/lib/(authorization)/verify";
import { MongodbConnection } from "@/lib/mongo";
import bcrypt from "bcryptjs";
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const user = await verifyUserToken(body.user_token);
    const genSalt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(body.user_password, genSalt);
    const DB = await MongodbConnection.db("SchoolDB");

    const findExistingEmail = await DB.collection("usersDB").findOne({
      email: body.user_email,
    });

    if (!body.user_name || !body.user_email || !body.user_password)
      return NextResponse.json({
        message: "please in all required fields.",
        status: 400,
      });
    if (findExistingEmail) {
      return NextResponse.json({
        message: "email already exists.",
        status: 400,
      });
    } else {
      await DB.collection("usersDB").updateOne(
        { _id: user._id },
        {
          $set: {
            fullname: body.user_name,
            email: body.user_email,
            password: hashedPassword,
          },
        }
      );
    }

    return NextResponse.json({ message: "profile updated!", status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "internal server error", status: 500 });
  }
}
