import server from "./src/server";
import { LogError, LogSuccess } from "./src/utils/logger";
import dotenv from "dotenv";

//config the .env file
dotenv.config();

const port = process.env.PORT || 8000

server.listen(port, () => {
  LogSuccess(`[SERVER ON]: Running in http://localhost:${port}/api`)
})

server.on("error", (error) => {
  LogError(`[SERVER ERROR]: ${error}`)
})