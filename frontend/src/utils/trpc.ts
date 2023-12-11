import type { AppRouter } from "../../../backend/src/index.ts";
import { createTRPCReact } from "@trpc/react-query";

export const trpc = createTRPCReact<AppRouter>();
