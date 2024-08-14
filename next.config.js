// nextra config
const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.tsx',
});

// next.js config
const config = withNextra({
    output: 'standalone',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'static.zenetics.io',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'docs.zenetics.io',
                port: '',
                pathname: '/**',
            },
        ],
    },
});

module.exports = config;
