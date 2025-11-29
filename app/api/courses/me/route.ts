import { NextResponse } from "next/server";
import { verifyUserToken } from "@/lib/(authorization)/verify";
export async function POST(userRequest: Request) {
  const body = await userRequest.json();
  const JWTVerificationArea = await verifyUserToken(body.token);
  try {
    return NextResponse.json(JWTVerificationArea.course);
  } catch (error) {
    return Response.json({
      message: "can't verify token",
      status: 405,
    });
  }
}
