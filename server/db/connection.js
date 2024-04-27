import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from 'dotenv';

dotenv.config({ path: '../.env' });

const uri = process.env.ATLAS_URI || "";
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

try {
    // Connect the client to the server
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ping: 1});
    console.log(
        "Pinged yout deployment. You successfully connected to MongoDB."
    );
} catch(error) {
    console.error
}

let db = client.db("appveggiedb");

export default db;