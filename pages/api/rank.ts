import { Redis } from "@upstash/redis";
import { NextRequest, NextResponse } from "next/server";

const redis = Redis.fromEnv();
export const config = {
  runtime: "edge",
};

export default async function rank(req: NextRequest): Promise<NextResponse> {
  if (req.method !== "GET") {
    return new NextResponse("use GET", { status: 405 });
  }

  let cursor = 0;
  const rankedContent = [];

  do {
    // SCAN command returns next cursor and list of matched keys
    const result = await redis.scan(cursor, { match: "pageviews:projects:*" });
    cursor = Number(result[0]);
    const keys = result[1];

    // Fetch values for all matched keys
    for (const key of keys) {
      const views = await redis.get(key);
      const slug = key.split(":")[2];
      rankedContent.push({ slug, views: Number(views) });
    }
  } while (cursor !== 0); // When cursor is '0' it means that the SCAN is finished

  // Sort content by views
  rankedContent.sort((a, b) => b.views - a.views);

  return new NextResponse(JSON.stringify(rankedContent));
}
