import request from "supertest"
import app from "../server.js";

test("should respond with name", async () => {
  const response = await request(app).get("/").send({
    name: "Mirlan",
  });
  expect(response.text).toBe("Welcome to bookstore server Mirlan!!!");
});
