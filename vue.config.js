const { defineConfig } = require('@vue/cli-service')
module.exports =defineConfig({
  transpileDependencies: true
})
module.exports = {
  devServer: {
    https:true
  }
}
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/fmougni.github.io/" : "/",
};
module.exports = {
  pwa: {
    manifestPath: 'public/manifest.json',
    workboxOptions: {
      exclude: [/\.map$/, /manifest\.json$/],
    },
  },
};

