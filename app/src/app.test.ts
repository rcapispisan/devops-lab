import { describe, it, expect } from "vitest";
import request from "supertest";
import { app } from "./app.js";

describe("GET /health", () => {
  it("returns ok", async () => {
    const res = await request(app).get("/health");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: "ok" });
  });
});

describe("GET /api/hello", () => {
  it("greets world by default", async () => {
    const res = await request(app).get("/api/hello");
    expect(res.body.message).toBe("Hello, world!");
  });

  it("greets by name", async () => {
    const res = await request(app).get("/api/hello?name=Rommel");
    expect(res.body.message).toBe("Hello, Rommel!");
  });
});