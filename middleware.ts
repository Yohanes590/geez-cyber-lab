import { NextResponse } from "next/server";

export function middleware(req: Request) {
  const res = NextResponse.next();

  res.headers.set("Access-Control-Allow-Origin", "*");
  res.headers.set("Access-Control-Allow-Methods", "*");
  res.headers.set("Access-Control-Allow-Headers", "*");
  res.headers.set("Access-Control-Expose-Headers", "*");
  res.headers.set("Access-Control-Allow-Credentials", "true");

  return res;
}

export const config = {
  matcher: "/api/:path*",
};
