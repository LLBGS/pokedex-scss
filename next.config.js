/** @type {import('next').NextConfig} */
const path = require('path');
module.exports = {
  env: {
    API: 'https://pokeapi.co/api/v2',
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['raw.githubusercontent.com'],
  },
};
