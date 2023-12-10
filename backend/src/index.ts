import { router, publicProcedure } from "./trpc";
import { createHTTPServer } from "@trpc/server/adapters/standalone";

const appRouter = router({
  hello: publicProcedure.query(() => {
    return "Hello Universe";
  }),
});

export type AppRouter = typeof appRouter;

const server = createHTTPServer({
  router: appRouter,
});

server.listen(3000);
