import request from "supertest";
import { app } from "../app";

describe(" Test Coffeelover endpoint request", () => {
  test("GET should return correct message", async () => {
    const res = await request(app).get("/coffeeLover");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual("I like coffee!");
  });
});
