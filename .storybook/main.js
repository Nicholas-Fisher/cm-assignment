var path = require('path');

module.exports = {
  stories: ['../stories/**/*.stories.js'],
  addons: ["@storybook/addon-actions", "@storybook/addon-knobs"],

  // Had to add these since I'm using absolute paths and scss.
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.s(a|c)ss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    config.module.rules.push({
      resolve: {
        alias: {
          'src': path.resolve(__dirname, '../src'),
          vue: 'vue/dist/vue.js',
          'vue$': 'vue/dist/vue.esm.js',
        },
      },
    });

    return config;
  },
};