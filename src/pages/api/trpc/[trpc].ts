// This file contains tRPC's HTTP response handler
import * as trpcNext from "@trpc/server/adapters/next";
import { appRouter } from "@/server/routers/_app";
import { createContext } from "@/server/context";

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext,

  // OPTIMIZE: For error handling and logs: https://trpc.io/docs/error-handling
  onError({ error }) {
    if (error.code === "INTERNAL_SERVER_ERROR") {
      console.error("Something went wrong", error);
    }
  },

  // Enable query batching
  batching: {
    enabled: true,
  },

  // OPTIMIZE:for response caching see https://trpc.io/docs/caching#api-response-caching
});
