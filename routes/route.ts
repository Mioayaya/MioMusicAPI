import { Router } from "@oak/oak";

const router = new Router();

router
  .get("/", async (ctx) => {
    const html = await Deno.readTextFile("./pages/index.html");
    ctx.response.type = "html";
    ctx.response.body = html;
  });

router
  .get("/users", (ctx) => {
    ctx.response.body = [{ id: 1, name: "Bob" }];
  })
  
  // deno-lint-ignore no-explicit-any
  .post("/users", async (ctx: any) => {
    const body = await ctx.request.body().value;
    ctx.response.status = 201;
    ctx.response.body = { created: true, ...body };
  });

export default router;
