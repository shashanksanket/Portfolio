import { connectToDataBase, db } from "@/lib/backend/database/db";

export async function GET(req: any, res: any) {
  try {
    await connectToDataBase();

    const userList = await db!.collection("users").find().toArray();

    return new Response(JSON.stringify(userList), {
      status: 200,
    });
  } catch (error) {
    console.error("Error while retrieving data from MongoDB:", error);
    return new Response(
      JSON.stringify({ message: "Internal Server Error" }),
      {
        status: 500,
      }
    );
  }
}

export async function POST(req: any, res: any) {
  try {
    await connectToDataBase();

    const body = await req.json();
    console.log(body)

    const res = await db!.collection("users").insertOne(body);
    return new Response(
      JSON.stringify({ message: "success",id: res.insertedId }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error while processing POST request:", error);
    return new Response(
      JSON.stringify({ message: "Internal Server Error" }),
      {
        status: 500,
      }
    );
  }
}


