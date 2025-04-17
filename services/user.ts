import { Context } from "@oak/oak";

export const getUser = (ctx: Context) => {
  // 返回响应信息
  ctx.response.body = [{ id: 1, name: "Tom" }];
};

export const createUser = (ctx: Context) => {  
  const body = ctx.request.body;
  ctx.response.status = 201;
  ctx.response.body = { created: true, ...body };
}
