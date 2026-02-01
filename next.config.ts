import type { NextConfig } from "next";
import path from "path";
import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname, ".."),
  },

  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})
export default withMDX(nextConfig);
