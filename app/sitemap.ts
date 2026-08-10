import type { MetadataRoute } from "next";
import { absoluteUrl, publicPaths } from "./seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return publicPaths.map((path) => ({ url: absoluteUrl(path) }));
}
