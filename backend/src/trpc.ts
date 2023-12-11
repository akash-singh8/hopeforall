import { initTRPC } from "@trpc/server";
import { config } from "dotenv";

const t = initTRPC.create();
config();

export const router = t.router;
export const publicProcedure = t.procedure;
