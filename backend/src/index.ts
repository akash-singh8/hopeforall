import { router, publicProcedure } from "./trpc";
import { createHTTPServer } from "@trpc/server/adapters/standalone";
import cors from "cors";

const appRouter = router({
  hello: publicProcedure.query(() => {
    return "Hello Universe";
  }),
});

export type AppRouter = typeof appRouter;

const server = createHTTPServer({
  middleware: cors({
    origin: "http://localhost:5173",
  }),
  router: appRouter,
});

server.listen(3000);
