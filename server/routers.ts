import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import {
  getModels,
  getContentCreators,
  getVideoProductions,
  getVoiceArtists,
  getContentWritingSamples,
} from "./db-models";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  models: router({
    list: publicProcedure
      .input(
        z.object({
          gender: z.string().optional(),
          minAge: z.number().optional(),
          maxAge: z.number().optional(),
          specialty: z.string().optional(),
        })
      )
      .query(({ input }) => getModels(input)),
  }),

  contentCreators: router({
    list: publicProcedure
      .input(
        z.object({
          platform: z.string().optional(),
          contentType: z.string().optional(),
        })
      )
      .query(({ input }) => getContentCreators(input)),
  }),

  videoProductions: router({
    list: publicProcedure
      .input(
        z.object({
          productionType: z.string().optional(),
        })
      )
      .query(({ input }) => getVideoProductions(input)),
  }),

  voiceArtists: router({
    list: publicProcedure
      .input(
        z.object({
          gender: z.string().optional(),
          voiceType: z.string().optional(),
          language: z.string().optional(),
        })
      )
      .query(({ input }) => getVoiceArtists(input)),
  }),

  contentWriting: router({
    list: publicProcedure
      .input(
        z.object({
          contentType: z.string().optional(),
        })
      )
      .query(({ input }) => getContentWritingSamples(input)),
  }),
});

export type AppRouter = typeof appRouter;
