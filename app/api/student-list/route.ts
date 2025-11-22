import { NextResponse } from "next/server";
import { MongodbConnection } from "@/lib/mongo";

export async function POST(userRequest: Request) {
  const DB = await MongodbConnection.db("SchoolDB");
  const Body = await userRequest.json();

  if (!Body.student_name) {
    return NextResponse.json({
      message: "please insert student name??",
      status: 400,
    });
  } else {
    let injectedQuery = Body.student_name;

    try {
      injectedQuery = JSON.parse(Body.student_name);
    } catch (err) {
      injectedQuery = { $regex: Body.student_name, $options: "i" };
    }

    const result = await DB.collection("usersDB")
      .find(
        {
          fullname: injectedQuery,
          user_role: "student",
        },
        {
          projection: {
            email: 1,
            fullname: 1,
            grade: 1,
            section: 1,
            user_role: 1,
            _id: 0,
          },
        }
      )
      .toArray();

    if (!result) {
      return NextResponse.json({
        query: Body.student_name,
        message: "no result found!",
        status: 400,
      });
    } else {
      return NextResponse.json(result);
    }
  }
}
