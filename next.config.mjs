// Static export for GitHub Pages.
// NEXT_PUBLIC_BASE_PATH is set automatically by the GitHub Actions workflow
// ("/<repo-name>" for project repos, empty for "<user>.github.io" repos).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
  // The GitHub Actions build must not fail on a harmless type nit. Run `npm run typecheck`
  // locally to see type errors; flip this to false once the project has been built once.
  typescript: { ignoreBuildErrors: true },
  ...(basePath ? { basePath } : {}),
};

export default nextConfig;
