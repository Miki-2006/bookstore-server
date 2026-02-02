import request from "supertest";
import app from "../server.js";

describe('Health check', () => {
    it('GET /health returns 200', async () => {
        const res = await request(app).get('/health');
        expect(res.statusCode).toBe(200)
    })
})