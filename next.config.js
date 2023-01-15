/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		// to remove:
		unoptimized: true,
		remotePatterns: [{ protocol: 'https', hostname: '**' }],
	},
	distDir: 'build',
};

module.exports = nextConfig;
