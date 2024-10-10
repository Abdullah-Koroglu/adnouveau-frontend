/** @type {import('next').NextConfig} */
module.exports = {
    images: {
      formats: ["image/avif", "image/webp"],
      remotePatterns: [
        // {
        //   protocol: "http",
        //   hostname: "127.0.0.1",
        //   port: "1337",
        //   pathname: "/uploads/**",
        // },
        {
          // protocol: "http",
          hostname: "ad-nouveau.com",
          pathname: "/uploads/**",
        }
      ],
    },
  };