import * as trpcExpress from '@trpc/server/adapters/express';
import cors from 'cors';
import express from 'express';
import { router, publicProcedure } from './trpc'

const app = express();
app.use(cors());

const appRouter = router({
  greeting: publicProcedure.query(() => 'hello tRPC v10!'),
});

export type AppRouter = typeof appRouter;

app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
  }),
);

const PORT = 4000;

app.get("/", (req, res) => {
  res.send("Hello from api-server");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`);
});