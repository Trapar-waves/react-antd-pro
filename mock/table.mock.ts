import { defineMock } from "rspack-plugin-mock/helper";

const creators = ["付小小", "曲丽丽", "林东东", "陈帅帅", "兼某某"];
const valueEnum = {
  0: "close",
  1: "running",
  2: "online",
  3: "error",
};
export default defineMock({
  url: "/api/table",
  method: "GET",
  body: (req) => {
    const { current, pageSize, name, creator, status } = req.query;
    return {
      code: 200,
      message: "success",
      body: {
        data: Array.from({ length: pageSize }).map((_, i) => ({
          key: current * 20 + i,
          name: name || "AppName",
          containers: Math.floor(Math.random() * 20),
          creator: creator || creators[Math.floor(Math.random() * creators.length)],
          status: status || valueEnum[(`${Math.floor(Math.random() * 10) % 4}`) as "0"],
          createdAt: Date.now() - Math.floor(Math.random() * 2000),
          money: Math.floor(Math.random() * 2000) * i,
          progress: Math.ceil(Math.random() * 100) + 1,
          memo: i % 2 === 1
            ? "很长很长很长很长很长很长很长的文字要展示但是要留下尾巴"
            : "简短备注文案",
        })),
        total: 100,
      },
    };
  },
});
