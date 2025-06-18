import withPWA from "next-pwa";

const nextConfig = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
})({
  reactStrictMode: true,
  transpilePackages: ['lumir-design-system-shared', 'lumir-design-system-02'],
});

export default nextConfig;
