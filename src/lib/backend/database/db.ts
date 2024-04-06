import { MongoClient, Db } from 'mongodb';

export let db: Db | null = null;
const options: any = {
  retryWrites: true,
  w: "majority",
};
export async function connectToDataBase() {
  try {
    if (!db) {
      const uri = process.env.MONGODB_URI;
      const client = new MongoClient(uri!, options);
      await client.connect();
      db = client.db();
      console.log("Connected to MongoDB");
    }
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error; 
  }
}