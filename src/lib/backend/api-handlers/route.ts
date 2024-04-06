import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = "mongodb+srv://shashanksanket:admin@cluster0.6mlcwzg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

export async function GET(request: Request) {
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    // Perform further operations here using MongoDB client
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  } finally {
    await client.close();
  }
}


export async function HEAD(request: Request) {}
 
export async function POST(request: Request) {}
 
export async function PUT(request: Request) {}
 
export async function DELETE(request: Request) {}
 
export async function PATCH(request: Request) {}