
/* 生产环境的入口文件 */
// import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 导入element-ui插件
import './plugins/element'

// 导入全局样式表
import './assets/css/global.css'

Vue.config.productionTip = false

// 导入树形表格控件
import TreeTable from 'vue-table-with-tree-grid'
Vue.component('tree-table', TreeTable)

// 引入格式化时间的包
let dateFormat = require('dateformat')
// 注册全局过滤器
Vue.filter('dateFormat', function (value) {
	return dateFormat(value, 'yyyy-mm-dd HH:MM:ss')
})


// 导入富文本编辑器组件
// import VueQuillEditor from 'vue-quill-editor'
 
// require styles
// import 'quill/dist/quill.core.css'
// import 'quill/dist/quill.snow.css'
// import 'quill/dist/quill.bubble.css'
 
// 全局注册
Vue.use(VueQuillEditor)


// 添加事件总线
Vue.prototype.$bus = new Vue()

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
