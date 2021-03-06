module.exports = {
    chainWebpack: config => {
        // 生产模式（发布模式）
        config.when(process.env.NODE_ENV === 'production', config => {
            /* 根据运行环境指定不同的入口JS文件 */
            // entry找到默认的打包入口，调用clear则是删除默认的打包入口
            // add添加新的打包入口
            config.entry('app').clear().add('./src/main-prod.js')

            // 使用externals设置排除项
            config.set('externals', {
                vue: 'Vue',
                'vue-quill-editor': 'VueQuillEditor'
            })

            // 使用插件
            config.plugin('html').tap(args => {
                //添加参数isProd
                args[0].isProd = true
                return args
            })
        });

        // 开发模式
        config.when(process.env.NODE_ENV === 'development', config => {
            /* 根据运行环境指定不同的入口JS文件 */
            config.entry('app').clear().add('./src/main-dev.js')

            // 使用插件
            config.plugin('html').tap(args => {
                // 添加参数isProd
                args[0].isProd = false
                return args
            })
        })
    }
}