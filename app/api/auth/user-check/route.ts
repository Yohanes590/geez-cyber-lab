import { NextResponse } from "next/server";
import nunjucks from "@/lib/nunjucks";
import { verifyUserToken } from "@/lib/(authorization)/verify";
export async function POST(req: Request) {
  const body = await req.json();
  const verifiedUser = await verifyUserToken(body.token);
  const vuln = nunjucks.renderString(verifiedUser?.fullname, {});
  return NextResponse.json({
    verified: true,
    _id: verifiedUser._id,
    user_role: verifiedUser!.user_role,
    user_name: vuln,
    user_email: verifiedUser!.email,
    user_profile_pic: verifiedUser!.user_profile_pic,
  });
}
