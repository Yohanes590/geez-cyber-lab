import { NextResponse } from "next/server";
import { MongodbConnection } from "@/lib/mongo";
import { verifyUserToken } from "@/lib/(authorization)/verify";
export async function POST(userRequest: Request) {
  const body = await userRequest.json();
  const DB = await MongodbConnection.db("SchoolDB");
  const userToken =
    userRequest.headers
      .get("cookie")
      ?.split("; ")
      .find((c) => c.startsWith("token="))
      ?.split("=")[1] || "";
  const verifiedUser = await verifyUserToken(userToken);
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const time = `${hours}:${minutes}`;
  const user: any = verifiedUser;
  const MessageContent = {
    user_id: user._id,
    user_name: user.fullname,
    text: body.message,
    time_stamp: time,
  };
  try {
    await DB.collection("student-messages").insertOne(MessageContent);
    return NextResponse.json({
      message: "message send successfully",
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      message: "some thing went wrong!!",
      status: 500,
    });
  }
}
