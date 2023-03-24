import express, { Request, Response } from "express";
import helloRouter from "./HelloRouter";
import { LogInfo } from "@/utils/logger";
// Root Router
// Redirections to Routers

// Server instance
let server = express();

//Router instance
let rootRouter = express.Router();

//Activate fro request to http://localhost:8000/api

rootRouter.get("/", (req: Request, res: Response) => {
  res.send(`Welcome to my api RESTful`);
});

//Redirections to routers & Controllers
server.use("/", rootRouter); //http://localhost8000/api/
server.use("/hello", helloRouter); //http://localhost8000/api/hello
//add more routes to the app

export default server;
