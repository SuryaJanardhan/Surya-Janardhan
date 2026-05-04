const isGithubActions = process.env.GITHUB_ACTIONS || false;
const repository = process.env.GITHUB_REPOSITORY ?? '';
const repoParts = repository.split('/');
const owner = repoParts[0]?.trim();
const repoName = repoParts[1]?.trim() ?? '';
const hasValidRepo = repoParts.length === 2 && owner && repoName;

if (isGithubActions && !hasValidRepo) {
  throw new Error(
    `GITHUB_REPOSITORY is '${repository || 'undefined'}' but must be in format 'owner/repo' to deploy to GitHub Pages.`
  );
}

const basePath = isGithubActions ? `/${repoName}` : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
