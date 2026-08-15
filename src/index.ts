import express from 'express';
import type { Request, Response, Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import { connect } from 'http2';
import connectDb from './utils/db.js';
import bookrouter from './routes/BookRoute.js';

dotenv.config();

const app: Express = express();

// Safely parse port from env
const port: number = Number(process.env.PORT) || 8080;

// database connection
connectDb();

// Basic endpoint
app.use(cors({
    origin: process.env.HOST_URL ||"*"
}));

app.use("/api",bookrouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello Ayush');
});

app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});

