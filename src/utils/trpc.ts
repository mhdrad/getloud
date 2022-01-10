import { createReactQueryHooks } from "@trpc/react";
import type { AppRouter } from "@/server/routers/_app";

// A set of strongly-typed React hooks from your `AppRouter` type signature with `createReactQueryHooks`.
// @link https://trpc.io/docs/react#3-create-trpc-hooks
export const trpc = createReactQueryHooks<AppRouter>();
