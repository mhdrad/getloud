import superjson from "superjson";
import { createRouter } from "../createRouter";
import { postRouter } from "./post";

export const appRouter = createRouter()
  // Make trpc able to parse Date, Map and Set data types between the server and client we use superjson
  .transformer(superjson)
  // APIs Routes
  .merge("post.", postRouter);

export type AppRouter = typeof appRouter;
