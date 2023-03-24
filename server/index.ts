import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

//config the .env file
dotenv.config();

//Create Express App
const app: Express = express();
const port: string | number = process.env.PORT || 8000;

const data = {
  message : "Goodbuy, World"
}

//define first route of APP
app.get("/", (req: Request, res: Response) => {
  res.send(data);
});

app.get("/?name=", (req: Request, res: Response) => {
  const q = req.query
  res.send(data);
});




//Execute APP and LIsten Request to PORT
app.listen(port, () => {
  console.log(`express server: running at ${port}`);
});
