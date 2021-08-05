const { fetchData } = require('./http');
jest.mock('./http');

test("id of post should be 1", () => {
  fetchData()
    .then(res => {
      expect(res.id).toBe(1);
    })
});

test("title of post should be...", () => {
  fetchData()
    .then(res => {
      expect(res.title).toBe("sunt aut facere repellat provident occaecati excepturi optio reprehenderit");
    })
});