// 项目发布阶段需要用到的babel插件
const productPlugins = []

// 判断是当前js文件的运行环境开发还是发布
if (process.env.NODE_ENV === 'production') {
	// 发布阶段
	productPlugins.push("transform-remove-console")
}

module.exports = {
	presets: [
		'@vue/app'
	],
	plugins: [...productPlugins]
}
