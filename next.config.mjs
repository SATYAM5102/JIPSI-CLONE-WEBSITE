/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // required for static export
  images: {
    unoptimized: true, // GitHub Pages does not support Next.js image optimization
  },
  basePath: "/JIPSI-CLONE-WEBSITE", // 👈 repo name
  assetPrefix: "/JIPSI-CLONE-WEBSITE/",
};

export default nextConfig;
