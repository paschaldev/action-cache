import {
  internalMutation,
  components,
  query,
  mutation,
} from "./_generated/server";
import { Client } from "@convex-dev/counter";

// const numUsers = defineCounter(components.counter, "users", 100);

// export const addOne = mutation({
//   args: {},
//   handler: async (ctx, _args) => {
//     await numUsers.inc(ctx);
//   },
// });

// export const getCount = query({
//   args: {},
//   handler: async (ctx, _args) => {
//     return await numUsers.count(ctx);
//   },
// });

// const counter = new Client(components.counter, { shards: { beans: 100 } });

// export const usingClient = internalMutation({
//   args: {},
//   handler: async (ctx, _args) => {
//     await counter.add(ctx, "accomplishments");
//     await counter.add(ctx, "beans", 2);
//     const count = await counter.count(ctx, "beans");
//     return count;
//   },
// });

// export const usingFunctions = internalMutation({
//   args: {},
//   handler: async (ctx, _args) => {
//     await numUsers.inc(ctx);
//     await numUsers.inc(ctx);
//     await numUsers.dec(ctx);
//     return numUsers.count(ctx);
//   },
// });

// export const directCall = internalMutation({
//   args: {},
//   handler: async (ctx, _args) => {
//     await ctx.runMutation(components.counter.public.add, {
//       name: "pennies",
//       count: 250,
//     });
//     await ctx.runMutation(components.counter.public.add, {
//       name: "beans",
//       count: 3,
//       shards: 100,
//     });
//     const count = await ctx.runQuery(components.counter.public.count, {
//       name: "beans",
//     });
//     return count;
//   },
// });
