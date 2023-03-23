import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

//config the .env file
dotenv.config();

//Create Express App
const app: Express = express();
const port: string | number = process.env.PORT || 8000;

//define first route of APP
app.get("/", (req: Request, res: Response) => {
  res.send("hello World ttt");
});

app.get("/hello", (req: Request, res: Response) => {
    res.send("welcome back");
  });
  


//Execute APP and LIsten Request to PORT
app.listen(port, () => {
  console.log(`express server: running at ${port}`);
});
