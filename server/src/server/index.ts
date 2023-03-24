import express, { Express, Request, Response } from "express";

// Environment Variable
import dotenv from "dotenv";

//Security
import cors from "cors";
import helmet from "helmet";

// TODO HTTPS

import rootRouter from "../routes";

//config the .env file
dotenv.config();

//Create Express App
const server: Express = express();
const port: string | number = process.env.PORT || 8000;

//Define Server to use "/api" and use rootRouter from "index.ts"
// From this point onover: http://localhost:8000/api/...
server.use("/api", rootRouter);

// TODO Mongoose Connection

//-------------------------

//Security
server.use(helmet());
server.use(cors());

//Content Type Config
server.use(express.urlencoded({ extended: true, limit: "50mb" }));
server.use(express.json({limit: "50mb"}))

//Redirection Config
//http://localhost:8000/ =====> http://localhost:8000/api/
server.get('/', (req: Request, res: Response) => {
    res.redirect('/api')
})



export default server