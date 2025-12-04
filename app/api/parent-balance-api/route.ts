import { NextResponse } from "next/server";
import { verifyUserToken } from "@/lib/(authorization)/verify";
import { neon } from "@neondatabase/serverless";
const sql = neon(process.env.NEON_DB!);
export async function POST(userRequest: Request) {
  const userToken =
    userRequest.headers
      .get("cookie")
      ?.split("; ")
      .find((c) => c.startsWith("token="))
      ?.split("=")[1] || "";
  const body = await userRequest.json();
  const user_verification: any = await verifyUserToken(userToken);
  const parentBalance =
    await sql`SELECT * FROM parents  WHERE account_number =${user_verification.account_number}`;
  if (parentBalance) {
    return NextResponse.json({
      parent_balance: parentBalance[0].parent_balance,
      parent_account: parentBalance[0].account_number,
    });
  }
}
