import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";
import "./database/connect.js";
import { router } from "./routers/router.js";

const app = express();
const port = process.env.PORT || 5030;

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

app.use("/api", router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});