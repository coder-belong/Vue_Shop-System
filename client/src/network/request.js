import axios from 'axios'

//导入进度条插件
import NProgress from 'nprogress'
//导入进度条样式
import 'nprogress/nprogress.css'

function myaxios(config) {
    const instance = axios.create({
        // 访问远程服务器
        baseURL: 'http://www.timecrush.cn:8888/api/private/v1', 
        // 访问本地服务器
        // baseURL: 'http://127.0.0.1:8888/api/private/v1',
        timeout: 100000,
    })

    // 请求拦截器
    instance.interceptors.request.use(config => {
        // 在发送请求之前做些什么
        // 在请求头中配置Authorization字段，发送给服务器，作为身份证明
        config.headers.Authorization = window.sessionStorage.getItem('userID')
        // 展示进度条
        NProgress.start()
        return config;
    })

    // 响应拦截器
    instance.interceptors.response.use(response => {
        // 隐藏进度条
        NProgress.done()
        // 返回有用的数据
        return response.data
    })

    return instance(config)
}


export default myaxios



