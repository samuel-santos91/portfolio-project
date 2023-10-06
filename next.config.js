/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(pdf)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            publicPath: "/assets/pdf",
            outputPath: "static/files", 
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
