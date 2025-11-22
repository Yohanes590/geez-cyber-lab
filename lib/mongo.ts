import { MongoClient } from "mongodb";

const uri = process.env.DATABASE_URL!;

const client = new MongoClient(uri);
await client.connect();

export const MongodbConnection = client;

// import { MongoClient } from "mongodb";

// const uri = process.env.DATABASE_URL as string;

// if (!uri) throw new Error("❌ Missing DATABASE_URL in .env.local");

// let client: MongoClient;
// let mongoClientPromise: Promise<MongoClient>;

// declare global {
//   var _mongoClientPromise: Promise<MongoClient> | undefined;
// }

// if (process.env.NODE_ENV === "development") {
//   if (!global._mongoClientPromise) {
//     client = new MongoClient(uri);
//     global._mongoClientPromise = client.connect();
//   }
//   mongoClientPromise = global._mongoClientPromise;
// } else {
//   client = new MongoClient(uri);
//   mongoClientPromise = client.connect();
// }

// export default mongoClientPromise;
