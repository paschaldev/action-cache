import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const getFromCache = mutation({
  args: {
    key: v.string(),
  },
  returns: v.union(v.array(v.number()), v.null()),
  handler: async (ctx, { key }) => {
    const match = await ctx.db
      .query("values")
      .withIndex("key", (q) => q.eq("key", key))
      .collect();
    if (match.length > 1)
      throw new Error(`Found multiple values for key: ${key}`);
    if (!match) return null;
    await ctx.db.insert("lastUpdated", {
      valuesId: match[0]._id,
      lastUpdated: Date.now(),
    });
    return match[0].value;
  },
});