import { connectToDataBase,db } from "@/lib/backend/database/db";
import { ObjectId } from "mongodb";

interface Params {
  id: string;
}

export async function GET(req: any, { params }:{params:Params}) {
  try {
    await connectToDataBase();
    const id = params.id
    console.log(id)
    const user = await db!.collection("users").findOne({_id: new ObjectId(params.id as string)});
    return new Response(JSON.stringify(user), {
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

export async function DELETE(req: any, { params }:{params:Params}) {
  try {
    await connectToDataBase();
    const objectId = new ObjectId(params.id as string);
    const deletedEntry = await db!.collection("users").findOneAndDelete({ _id: objectId });
    if (!deletedEntry) {
      return new Response(
        JSON.stringify({ message: "User not found" }),
        {
          status: 404,
        }
      );
    }

    return new Response(
      JSON.stringify({ message: "User deleted successfully" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error while processing DELETE request:", error);
    return new Response(
      JSON.stringify({ message: "Internal Server Error" }),
      {
        status: 500,
      }
    );
  }
}
