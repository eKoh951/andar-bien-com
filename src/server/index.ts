import { publicProcedure, router } from './trpc'

export const appRouter = router({
  getData: publicProcedure.query(async () => ({ data: [1, 2, 3] })),
})

export type AppRouter = typeof appRouter
