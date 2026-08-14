import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Safely parse port from env
const port: number = Number(process.env.PORT) || 8080;

 

app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
