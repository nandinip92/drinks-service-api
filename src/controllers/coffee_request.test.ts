import request from "supertest";
import { app } from "../app";

describe(" Test Coffeelover endpoint request", () => {
  test("GET /coffee should return correct object", async () => {
    const res = await request(app)
      .get("/coffee")
      .query({ coffeeName: "Latte" });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      drinkType: "Coffee",
      name: "Latte",
    });

    const res2 = await request(app)
      .get("/coffee")
      .query({ coffeeName: "Mocha" });

    expect(res2.statusCode).toEqual(200);
    expect(res2.body).toEqual({
      drinkType: "Coffee",
      name: "Mocha",
    });
  });

  test("GET /coffee should return the name as Latte if coffeeName is provided ", async () => {
    const res = await request(app).get("/coffee");

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      drinkType: "Coffee",
      name: "Latte",
    });
  });
});
