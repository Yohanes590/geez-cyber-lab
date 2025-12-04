import { NextResponse } from "next/server";
import { verifyUserToken } from "@/lib/(authorization)/verify";
import { MongodbConnection } from "@/lib/mongo";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  const bodyText = await req.text(); // read raw text/plain
  const bodyParams = Object.fromEntries(new URLSearchParams(bodyText)); // convert to object

  const userToken =
    req.headers
      .get("cookie")
      ?.split("; ")
      .find((c) => c.startsWith("token="))
      ?.split("=")[1] || "";

  const user: any = await verifyUserToken(userToken);
  const DB = await MongodbConnection.db("SchoolDB");

  // Check email uniqueness if changed
  if (user.email !== bodyParams.user_email && bodyParams.user_email) {
    const emailExists = await DB.collection("usersDB").findOne({
      email: bodyParams.user_email,
    });
    if (emailExists) {
      return NextResponse.json({
        message: "email already exists",
        status: 400,
      });
    }
  }

  // Build update object dynamically
  const updateData: any = {};
  if (bodyParams.user_name) updateData.fullname = bodyParams.user_name;
  if (bodyParams.user_email) updateData.email = bodyParams.user_email;
  if (bodyParams.user_password) {
    const genSalt = await bcrypt.genSalt(10);
    updateData.password = await bcrypt.hash(bodyParams.user_password, genSalt);
  }
  if (bodyParams.user_profile_pic)
    updateData.user_profile_pic = bodyParams.user_profile_pic;

  await DB.collection("usersDB").updateOne(
    { _id: user._id },
    { $set: updateData }
  );

  return NextResponse.json({ message: "successful updated", status: 200 });
}
