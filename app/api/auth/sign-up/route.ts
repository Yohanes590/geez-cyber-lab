import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { MongodbConnection } from "@/lib/mongo";
import { JWTEncrypt } from "@/lib/(backend)/jwt-maker";

export async function POST(request: Request) {
  const body = await request.json();
  try {
    const db = MongodbConnection.db("SchoolDB");
    const existingUser = await db.collection("usersDB").findOne({
      email: body.email,
    });
    if (existingUser) {
      return NextResponse.json({
        message: "user already exists",
        status: 400,
      });
    } else {
      const genSalt = await bcrypt.genSalt(10);
      const HashedPassword = await bcrypt.hash(body.password, genSalt);
      const ID = await db.collection("usersDB").insertOne({
        fullname: body.fullname,
        email: body.email,
        grade: body.grade,
        section: body.section,
        user_role: body.user_role,
        course: [],
        user_profile: [
          {
            fullname: body.fullname,
            email: body.email,
            course: [],
            grade: body.grade,
            section: body.section,
          },
        ],
        password: HashedPassword,
      });
      const TokenShow = JWTEncrypt(ID);
      return NextResponse.json({
        ID: ID,
        message: "Account Created Successfully",
        status: 200,
        token: TokenShow,
      });
    }
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error: error.massage }, { status: 500 });
  }
}
