module.exports = {
    //打包
    publicPath: './',
    outputDir: 'test', //打包输出目录
    assetsDir: './static', //放置生成的静态资源
    filenameHashing: true, // 生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存
    lintOnSave: false, //设置是否在开发环境下每次保存代码时都启用 eslint验证
    productionSourceMap: false,// 打包时不生成.map文件
    
    // 解决跨域配置
    devServer: {                //记住，别写错了devServer//设置本地默认端口  选填
        port: 8080,
        proxy: {                 //设置代理，必须填
            '/api': {              //设置拦截器  拦截器格式   斜杠+拦截器名字，名字可以自己定
                target: 'http://localhost:9090',     //代理的目标地址(后端设置的端口号)
                changeOrigin: true,              //是否设置同源，输入是的
                pathRewrite: {                   //路径重写
                    '/api': ''                     //选择忽略拦截器里面的单词
                }
                /*也就是在前端使用/api可以直接替换为(http://localhost:9090)*/
            }
        }
    },
    configureWebpack: {
        module: {
            rules: [
            {
              test: /\.(mp3|wav|ogg)$/,
              use: {
                loader: 'file-loader',
                options: {
                  name: 'static/[name].[hash:8].[ext]',
                },
              },
            },
          ],
        },
    },
}
