const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    pages: {
        index: {
            // page 的入口
            entry: 'client/main.js'
        }
    },
    chainWebpack: (config)=>{
        //修改文件引入自定义路径
        config.resolve.alias
            .set('@', resolve('client'))
    },
    css: {
        loaderOptions: {
          less: {
            modifyVars: {
              'primary-color': '#000',
              'link-color': '#1DA57A',
              'border-radius-base': '2px',
              'heading-color': '#fff',
              'text-color': '#fff'
            },
            javascriptEnabled: true
          }
        }
      }
}