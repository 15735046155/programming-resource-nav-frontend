const path = require('path');
// const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins:[
    // {
    //   plugin: CracoLessPlugin,
    //   options: {
    //     lessLoaderOptions: {
    //       lessOptions: {
    //         modifyVars: { '@primary-color': '#1DA57A' },
    //         javascriptEnabled: true
    //       }
    //     }
    //   }
    // }
  ],
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      // 修改 Webpack 配置
      webpackConfig.resolve = {
        ...webpackConfig.resolve,
        alias: {
          '@': path.resolve(__dirname, 'src/'),
          '@/utils': path.resolve(__dirname, 'src/utils/'),
          '@/assets': path.resolve(__dirname, 'src/assets/'),
        }
      };

      return webpackConfig;
    }
  }
};