import nextMDX from "@next/mdx";

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx", "ts"],
  experimental: {
    appDir: true,
    mdxRs: true,
  },
  images: {},
};

export default withMDX(nextConfig);
