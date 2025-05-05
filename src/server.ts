import express, {json, Request, Response} from 'express';
import dotenv from 'dotenv';
import createApp from './app';

dotenv.config();

const app = createApp();
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`✅ Server running at port http://localhost:${port}/`);
});
