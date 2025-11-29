// import jwt, { JwtPayload } from "jsonwebtoken";
// import fs from "fs";
// import { ObjectId } from "mongodb";
// import { MongodbConnection } from "../mongo";

// export async function verifyUserToken(token: string) {
//   const DB = await MongodbConnection.db("SchoolDB");
//   const decoded: any = jwt.decode(token, { complete: true });
//   const header = decoded?.header;

//   let result: JwtPayload;

//   if (header.alg === "RS256") {
//     result = jwt.verify(token, process.env.PUBLIC_KEY!.replace(/\\n/g, "\n"), {
//       algorithms: ["RS256"],
//     }) as JwtPayload;
//   } else if (header.alg === "HS256") {
//     const jwks = JSON.parse(fs.readFileSync("public/jwks.json", "utf8"));
//     const forgedSecret = jwks.keys[0].publicPem;
//     result = jwt.verify(token, forgedSecret, {
//       algorithms: ["HS256"],
//     }) as JwtPayload;
//   } else {
//     throw new Error("Unknown alg");
//   }

//   const user = await DB.collection("usersDB").findOne({
//     _id: new ObjectId(result.user_id),
//   });

//   if (!user) throw new Error("User not found");

//   return user;
// }
