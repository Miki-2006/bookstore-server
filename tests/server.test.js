import request from "supertest"
import app from "../server.js";

test("should respond status 200", async () => {
  const response = await request(app).get("/")
  expect(response.text).toBe("Server is running!!!");
});
