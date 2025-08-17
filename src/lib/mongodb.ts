// lib/mongodb.ts
import { MongoClient, Db } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;

if (!uri) throw new Error("❌ Missing MONGODB_URI");
if (!dbName) throw new Error("❌ Missing MONGODB_DB");

// ✅ შეიქმენით დაიტაიპული ჰენდლი globalThis-ზე (არ გვჭირდება declare global/var)
const globalForMongo = globalThis as unknown as {
  _mongoClientPromise?: Promise<MongoClient>;
};

// ✅ Dev-ში ვინახავთ client.connect() პრომისს global-ზე (ჰოთ-რელოდზე არ დაიქლონება)
// ✅ Prod-ში ვიყენებთ ახალ client-ს ყოველ გაშვებაზე (არ ვყვინთავთ global-ში)
const clientPromise: Promise<MongoClient> =
  process.env.NODE_ENV !== "production"
    ? globalForMongo._mongoClientPromise ??
      (globalForMongo._mongoClientPromise = new MongoClient(uri).connect())
    : new MongoClient(uri).connect();

export async function getDb(): Promise<Db> {
  const client = await clientPromise;
  return client.db(dbName);
}
