export default {
  // projectRoot: '.',     // Where to resolve all URLs relative to. Useful if you have a monorepo project.
  // pages: './src/pages', // Path to Astro components, pages, and data
  // dist: './dist',       // When running `astro build`, path to final static output
  // public: './public',   // A folder of static files Astro will copy to the root. Useful for favicons, images, and other files that don’t need processing.
 
  devOptions: {
    // hostname: 'localhost',  // The hostname to run the dev server on.
    hostname: "0.0.0.0",
    tailwindConfig: './tailwind.config.js',
    // port: 3000,             // The port to run the dev server on.
  },
  renderers: [
    "@astrojs/renderer-svelte"
  ],
};
