var path = require("path");
const PrerenderSPAPlugin = require("prerender-spa-plugin");

module.exports = {
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "Startblock";
      return args;
    });
  },

  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        // Required - The path to the webpack-outputted app to prerender.
        staticDir: path.join(__dirname, "dist"),
        // Required - Routes to render.
        routes: ["/"]
      })
    ]
  },

  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: ["/"],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
};
