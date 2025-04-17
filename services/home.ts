import { Context } from "@oak/oak";

export const getHome = async (ctx:Context) => {
  const html = await Deno.readTextFile("./pages/index.html");
  ctx.response.type = "html";
  ctx.response.body = html;
}