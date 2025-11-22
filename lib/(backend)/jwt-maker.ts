import jwt from "jsonwebtoken";
export const JWTEncrypt = (userObject: any) => {
  const Token = jwt.sign(
    { user_id: userObject.insertedId },
    process.env.PRIVATE_KEY!.replace(/\\n/g, "\n"),
    {
      algorithm: "RS256",
      expiresIn: "24h",
    }
  );
  return Token;
};
