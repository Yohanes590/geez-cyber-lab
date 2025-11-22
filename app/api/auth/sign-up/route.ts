import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { MongodbConnection } from "@/lib/mongo";
import { JWTEncrypt } from "@/lib/(backend)/jwt-maker";
import { neon } from "@neondatabase/serverless";
import { generateCode } from "@/lib/(backend)/generate-account";
const sql = neon(process.env.NEON_DB!);
export async function POST(request: Request) {
  const body = await request.json();
  const account_number = generateCode();
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
      if (
        body.user_role !== "student" &&
        body.user_role !== "parent" &&
        body.user_role !== "teacher"
      ) {
        return NextResponse.json({
          message: "internal server error please try again later",
        });
      }
      const genSalt = await bcrypt.genSalt(10);
      const HashedPassword = await bcrypt.hash(body.password, genSalt);
      if (body.user_role == "parent") {
        await sql`INSERT INTO parents (parent_name , parent_email , parent_password ,parent_balance ,account_number) 
        values (${body.fullname},${body.email},${HashedPassword},100 , ${account_number})`;
        const ID = await db.collection("usersDB").insertOne({
          fullname: body.fullname,
          email: body.email,
          user_role: body.user_role,
          user_profile: [
            {
              fullname: body.fullname,
              email: body.email,
            },
          ],
          account_number: account_number,
          password: HashedPassword,
        });
        const TokenShow = JWTEncrypt(ID);
        return NextResponse.json({
          ID: ID,
          message: "Account Created Successfully",
          status: 200,
          token: TokenShow,
        });
      } else {
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
    }
  } catch (error: any) {
    return NextResponse.json(
      { error: "internal server error" },
      { status: 500 }
    );
  }
}
