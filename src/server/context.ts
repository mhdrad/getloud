import { PrismaClient } from "@prisma/client";
import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";

const prisma = new PrismaClient({
  log:
    process.env.NODE_ENV === "development"
      ? ["query", "error", "warn"]
      : ["error"],
});

// Creates context for an incoming request
export const createContext = async ({
  req,
  res,
}: trpcNext.CreateNextContextOptions) => {
  // OPTIMIZE: for API-response caching see https://trpc.io/docs/caching
  return {
    req,
    res,
    prisma,
  };
};

export type Context = trpc.inferAsyncReturnType<typeof createContext>;
