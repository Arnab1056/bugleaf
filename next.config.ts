type NextConfig = {
  output?: "export";
  trailingSlash?: boolean;
  turbopack?: {
    root?: string;
  };
};

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
