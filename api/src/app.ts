import "dotenv/config";

/* Base */
import express, { Express, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";

/* API routes */
import apiRoute from "./routes";
import { connect } from "./db";
import path from "path";

const app: Express = express();
const PORT = process.env.PORT!;

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Server running");
});

app.use("/api", apiRoute);
app.use("/avatar", express.static("uploads"));

connect();

app.listen(PORT, () =>
  console.log(`⚡️[server]: Server running on http://localhost:${PORT}`)
);
