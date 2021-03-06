<template>
    <div class="login">
        <div class="login-box" ref="loginBox">
            <!-- 头像区域 -->
            <div class="avatar">
                <img src="../../assets/img/logo.png" alt />
            </div>
            <!-- 表单区域 -->
            <el-form class="login-form" :model="loginForm" :rules="loginFormRules" ref="loginForm">
                <!-- 用户名 -->
                <el-form-item prop="userName">
                    <el-input
                        prefix-icon="el-icon-user-solid"
                        v-model="loginForm.userName"
                        clearable
                    />
                </el-form-item>
                <!-- 密码 -->
                <el-form-item prop="password">
                    <el-input
                        prefix-icon="el-icon-lock"
                        v-model="loginForm.password"
                        show-password
                        clearable
                    />
                </el-form-item>
                <!-- 登录和重置表单按钮 -->
                <el-form-item class="btns">
                    <el-button type="primary" @click="login">登录</el-button>
                    <el-button type="info" @click="resetForm('loginForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>



<script>
import { loginVerify } from '../../network/login'
import { toast } from '../../common/tool'

export default {
    data() {
        return {
            // 存储登录表单的数据
            loginForm: {
                userName: 'admin',
                password: '123456',
            },

            // 定义登录表单的规则
            loginFormRules: {
                userName: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 3, max: 6, message: '长度在 3 到 6 个字符', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 3, max: 12, message: '长度在 3 到 12 个字符', trigger: 'blur' }
                ],
            },
        }
    },
    methods: {
        // 重置表单数据
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },

        // 点击登录按钮发送网络请求
        login() {
            // 发送网络请求前先判断表单是否校验合法
            this.$refs.loginForm.validate(async (isValidate) => {
                if (!isValidate) {
                    toast('输入的用户名或密码不合法，请重新输入', 'error')
                    return // 如果表单填写内容不合法，阻止向下执行
                }

                // 发送登录验证接口请求，获取服务器返回的数据
                let { data, meta } = await loginVerify(this.loginForm)
                if (meta.status != 200) {
                    toast(meta.msg, 'error')
                    return // 服务器返回的状态码如果为400则说明用户或密码不正确，阻止向下执行
                }

                toast(meta.msg, 'success')
                // 将服务器返回的token 存储到sessionStorage对象下
                window.sessionStorage.setItem('userID', data.token) 
                // 跳转到Home首页中
                this.$router.push('/home')
            })

        }
    },
}

</script>

<style scoped>
.login {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: rgb(43, 75, 107);
}
.login .login-box {
    width: 450px;
    height: 300px;
    border-radius: 5px;
    background-color: white;
}
.login .avatar {
    width: 100px;
    height: 100px;
    margin: 0 auto;
    padding: 10px;
    transform: translate(0, -50%);
    background-color: white;
    border-radius: 50%;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 5px;
}
.login .avatar img {
    width: 100%;
    height: 100%;
    background-color: rgb(238, 238, 238);
    border-radius: 50%;
}
.login-form {
    position: relative;
    top: -23px;
    padding: 0 25px;
}
.login-form .btns {
    text-align: right;
}

</style>
