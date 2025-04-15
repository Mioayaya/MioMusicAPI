import { Application } from "@oak/oak";
import { DEV_API_HOSTNAME, DEV_API_POST } from "./const/settings.ts";
import { serverTips } from "./utils/tips.ts";
import router from "./routes/route.ts";


const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

serverTips({ port: DEV_API_POST, hostname: DEV_API_HOSTNAME });

await app.listen({ port: DEV_API_POST, hostname: DEV_API_HOSTNAME });
