import "reflect-metadata";
import express, { request, response } from "express";

import "./database";
// @types/express
const app = express();



app.listen(3000, () => console.log("Server is running"));