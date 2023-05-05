import supertest from "supertest";
import server from "../main";
const requestWithSupertest = supertest(server);

describe('GET "/"', () => {
  test('GET "/" returns all messages', async () => {
    const res = await requestWithSupertest.get("/chat");
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining("json"));
  });
});
