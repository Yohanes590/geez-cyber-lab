import { NextResponse } from "next/server";
import { verifyUserToken } from "@/lib/(authorization)/verify";
export async function GET(request: Request) {
  const userToken =
    request.headers
      .get("cookie")
      ?.split("; ")
      .find((c) => c.startsWith("token="))
      ?.split("=")[1] || "";
  const JWTresult: any = await verifyUserToken(userToken);
  try {
    return NextResponse.json(JWTresult?.course);
  } catch (err: any) {
    return NextResponse.json({ message: err, status: 500 });
  }
}
