const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: './',
  devServer: {
    // can be overwritten by process.env.HOST
    host: '0.0.0.0',
    port: 8089
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('src', resolve('src'))
      .set('common', resolve('src/common'))
      .set('components', resolve('src/components'));
  },
  // 设置ico
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        win: {
          icon: './public/img/icons/android-chrome-512x512.png'
        },
        mac: {
          icon: './public/img/icons/android-chrome-512x512.png'
        },
        productName: 'cosMusicApp'
      }
    }
  }
};
