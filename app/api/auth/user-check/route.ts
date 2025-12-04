import { NextResponse } from "next/server";
import nunjucks from "@/lib/nunjucks";
import { verifyUserToken } from "@/lib/(authorization)/verify";
import fetch from "node-fetch";

export async function POST(req: Request) {
  try {
    const userToken =
      req.headers
        .get("cookie")
        ?.split("; ")
        .find((c) => c.startsWith("token="))
        ?.split("=")[1] || "";

    const verifiedUser: any = await verifyUserToken(userToken);

    if (!verifiedUser) {
      return NextResponse.json(
        { verified: false, message: "Invalid token" },
        { status: 401 }
      );
    }

    const userName = verifiedUser.fullname
      ? nunjucks.renderString(verifiedUser.fullname, {})
      : "Unknown User";

    let base64 = "";
    let mime = "image/jpeg";
    try {
      const imageFetch = await fetch(
        verifiedUser.user_profile_pic ||
          "https://img.freepik.com/premium-vector/user-profile-icon-circle_1256048-12499.jpg?semt=ais_hybrid&w=740&q=80"
      );

      if (imageFetch.ok) {
        const buffer = await imageFetch.arrayBuffer();
        base64 = Buffer.from(buffer).toString("base64");
        mime = imageFetch.headers.get("content-type") || "image/jpeg";
      } else {
        console.warn("Failed to fetch profile picture, using default.");
      }
    } catch (err) {
      console.error("Profile picture fetch error:", err);
    }

    return NextResponse.json({
      verified: true,
      _id: verifiedUser._id,
      user_role: verifiedUser.user_role,
      user_name: userName,
      user_email: verifiedUser.email,
      user_profile_pic: base64 ? `data:${mime};base64,${base64}` : null,
    });
  } catch (err) {
    return NextResponse.json(
      { verified: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
