import { Application } from "@oak/oak";
// import { DEV_API_HOSTNAME, DEV_API_POST } from "./const/settings.ts";
import { serverTips } from "./utils/tips.ts";
import router from "./routes/route.ts";
import { ENVCONFIG } from "./env.ts";


serverTips({ port: ENVCONFIG.DEV_API_PORT, hostname: ENVCONFIG.DEV_API_HOSTNAME });

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());


await app.listen({ port: ENVCONFIG.DEV_API_PORT, hostname:ENVCONFIG. DEV_API_HOSTNAME });
