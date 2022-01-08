import { createRouter } from "@/server/createRouter";
import { z } from "zod";
import { TRPCError } from "@trpc/server";

export const userRouter = createRouter()
  // read
  .query("all", {
    async resolve({ ctx, input }) {
      const items = await ctx.prisma.user.findMany();

      return items;
    },
  });
