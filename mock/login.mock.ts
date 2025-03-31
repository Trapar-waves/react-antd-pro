import { defineMock } from "rspack-plugin-mock/helper";

export default defineMock({
  url: "/api/login",
  method: "POST",
  response: (req, res) => {
    if (req.body.username === "test" && req.body.password === "test") {
      res.end(JSON.stringify({
        code: 200,
        message: "success",
        body: `token-${Math.random().toString(32)}`,
      }));
    }
    else {
      res.statusCode = 401;
      res.end(JSON.stringify({ code: 401, message: "error" }));
    }
  },
});
