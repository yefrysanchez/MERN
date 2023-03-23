"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
//config the .env file
dotenv_1.default.config();
//Create Express App
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
//define first route of APP
app.get("/", (req, res) => {
    res.send("hello World ttt");
});
app.get("/hello", (req, res) => {
    res.send("welcome back");
});
//Execute APP and LIsten Request to PORT
app.listen(port, () => {
    console.log(`express server: running at ${port}`);
});
//# sourceMappingURL=index.js.map