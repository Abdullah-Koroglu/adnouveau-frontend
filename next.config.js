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
          protocol: "https",
          hostname: "1nnv83l9-1337.euw.devtunnels.ms",
          port: "",
          pathname: "/uploads/**",
        }
      ],
    },
  };