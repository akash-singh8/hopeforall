import { router, publicProcedure } from "./trpc";
import { createHTTPServer } from "@trpc/server/adapters/standalone";
import cors from "cors";
import sendMail from "./controller/sendMail";
import contactSchema from "./validation/contact";

const appRouter = router({
  hello: publicProcedure.query(() => {
    return "Hello Universe";
  }),

  contact: publicProcedure.input(contactSchema).mutation(({ input }) => {
    sendMail(process.env.CEO_EMAIL!, input);

    return { message: "Successfully send the mail" };
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
