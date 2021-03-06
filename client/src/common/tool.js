import { Message } from 'element-ui'

// 提示框消息封装
function toast(message, type,) {
    Message({
        message,
        type,
        center: true,
        showClose: true
    }) 
}

// 自定义手机号的验证规则
const mobileValidate = (rule, value, callback) => {
    let mobileReg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/
    if (!mobileReg.test(value)) {
        return callback(new Error('请输入合法的手机号码'));
    } else {
        return callback()
    }
}

// 表单验证规则
const UserFormRules = {  
    name: [
        { required: true, message: '请输入用户名称', trigger: 'blur' },
    ],
    email: [
        { required: true, message: '请输入邮箱账号', trigger: 'blur' },
        { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur'] }
    ],
    mobile: [
        { required: true, message: '请输入手机号', trigger: 'blur' },
        { validator: mobileValidate, message: '请输入合法的手机号', trigger: ['blur'] }
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 5, max: 12, message: '密码的长度在 5 到 12 个字符', trigger: 'blur' }
    ],
    phone: [
        { required: true, message: '请输入手机号', trigger: 'blur' },
        { validator: mobileValidate, message: '请输入合法的手机号', trigger: ['blur', 'change'] }
    ],
}


export {
    toast,
    UserFormRules
}
