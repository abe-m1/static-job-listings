// module.exports = {
//   chainWebpack: (config) => {
//     const svgRule = config.module.rule('svg');

//     svgRule.uses.clear();

//     svgRule.use('vue-svg-loader').loader('vue-svg-loader');
//   },
// };

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/styles/_variables.scss";`,
      },
    },
  },
};
