import myaxios from './request'

// 登录验证接口请求
function loginVerify(LoginInfo) {
    return myaxios({
        url: '/login',
        method: 'post',
        data: {
            username: LoginInfo.userName,
            password: LoginInfo.password
        }
    })
}


export {
    loginVerify
}