import request from "supertest";
import { app } from "../app";

describe(" Test TeaLover endpoint request", () => {
  test("GET should return correct message", async () => {
    const res = await request(app).get("/teaLover");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual("I like tea!");
  });
});
