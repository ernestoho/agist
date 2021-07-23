
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['kQHZeberY9KPyTJL9FT2a'] // An array of project ids.
});
module.exports = withPlasmic({
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  // Your NextJS config.
});
  