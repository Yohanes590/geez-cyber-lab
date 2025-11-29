import jwt from "jsonwebtoken";
export const JWTEncrypt = (userObject: any) => {
  const Token = jwt.sign(
    { user_id: userObject.insertedId },
    process.env.SECRET_KEY!,
    {
      algorithm: "HS256",
      expiresIn: "24h",
    }
  );
  return Token;
};
