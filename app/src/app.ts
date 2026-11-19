import express from "express";

export const app = express();
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.get("/api/hello", (req, res) => {
  const name = typeof req.query.name === "string" ? req.query.name : "world";
  res.json({ message: `Hello, ${name}!` });
});