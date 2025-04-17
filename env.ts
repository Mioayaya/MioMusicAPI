import { load } from "@std/dotenv";

// 读取 .env 文件中的所有变量
const rawEnv = await load();

export interface IEnvConfig {
  DEV_API_PORT: number;
  DEV_API_HOSTNAME: string;
}

const getEnv = (): IEnvConfig => {
  const {
    DEV_API_PORT = 3000,
    DEV_API_HOSTNAME = "127.0.0.1",
  } = {
    ...rawEnv,
    // ...Deno.env.toObject(), // 允许系统环境变量覆盖 `.env`
  };

  return {
    DEV_API_PORT: Number(DEV_API_PORT),
    DEV_API_HOSTNAME,
  };
};

export const ENVCONFIG = getEnv();
