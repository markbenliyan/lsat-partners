import { send } from 'micro';
import cors from 'micro-cors';
import { MongoClient } from 'mongodb';

const corsMiddleware = cors();

let client;

const connectToDb = async () => {
  if (!client) {
    const uri = process.env.MONGODB_URI;
    client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
  }

  return client.db("Cluster0");
}

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const db = await connectToDb();
    const collection = db.collection('subscriptions');

    try {
      await collection.insertOne({ email: req.body.email });
      send(res, 200, { status: 'Ok' });
    } catch (err) {
      send(res, 500, { status: 'Error', message: err.toString() });
    }
  } else {
    send(res, 405, { status: 'Method Not Allowed' });
  }
};

process.on('exit', (code) => {
  if (client) {
    client.close();
  }
});

export default corsMiddleware(handler);
