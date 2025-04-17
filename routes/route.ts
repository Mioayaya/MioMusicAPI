import { Context, Router } from "@oak/oak";
import { getHome } from "../services/home.ts";
import { createUser, getUser } from "../services/user.ts";

const router = new Router();

// 后端页面
router.get("/", getHome);

// user相关
router
  .get("/users", getUser)
  .post("/users", createUser);

router.get("/test", async (ctx: Context) => {
  const res = await fetch("https://www.bilibili.com/");

  const fullResponse = {
    url: res.url,
    status: res.status,
    statusText: res.statusText,
    headers: Object.fromEntries(res.headers.entries()), // 转换 headers
  };

  ctx.response.status = 200;
  ctx.response.type = "json";
  ctx.response.body = fullResponse;
});

export default router;
