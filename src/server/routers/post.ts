import { createRouter } from "@/server/createRouter";
import { z } from "zod";

export const postRouter = createRouter()
  // read
  .query("all", {
    async resolve({ ctx, input }) {
      return await ctx.prisma.post.findMany({
        orderBy: {
          createdAt: "desc",
        },
        where: {
          deletedAt: null,
        },
        select: {
          id: true,
          title: true,
          description: true,
          user: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      });
    },
  });
