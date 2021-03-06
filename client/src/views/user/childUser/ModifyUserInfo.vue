<template>
    <!-- 添加用户弹出的对话框 -->
    <el-dialog title="修改用户信息" :visible.sync="dialogVisible" width="40%" @close="close">
        <!-- 修改用户信息的表单区域 -->
        <el-form
            ref="modifyUserForm"
            :model="modifyUserForm"
            label-width="auto"
            :rules="modifyUserFormRules"
        >
            <el-form-item label="用户名称">
                <el-input v-model="modifyUserForm.username" disabled />
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
                <el-input v-model="modifyUserForm.email" clearable />
            </el-form-item>
            <el-form-item label="电话" prop="mobile">
                <el-input v-model="modifyUserForm.mobile" clearable />
            </el-form-item>
        </el-form>
        <!-- 对话框的取消和按钮区域 -->
        <span slot="footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="modifyUserInfo">确 定</el-button>
        </span>
    </el-dialog>
</template>

<script>
import { modifyUserInfo, getIDUserInfo } from '../../../network/user'
import { toast, UserFormRules } from '../../../common/tool'

export default {
    data() {
        return {
            dialogVisible: false,  // 控制对话框的显示与隐藏
            modifyUserForm: { // 存储修改用户表单的数据对象
                username: '',
                email: '',
                mobile: '',
            },
            modifyUserFormRules: UserFormRules,  // 表单验证规则的对象
        }
    },
    mounted() {
        // 监听修改用户按钮的点击事件
        this.$bus.$on('modifyClick', userInfo => {
            // 根据当前修改用户的id发送网络请求，获取当前用户的数据
            this.get_IDUserInfo(userInfo.id).then(res => {
                this.dialogVisible = true
                this.modifyUserForm = res
            }).catch(res => {
                toast(res, 'warning')
                this.dialogVisible = false
            })
        })
    },
    methods: {
        // 监听确认修改用户数据的点击事件
        modifyUserInfo() {
            this.$refs.modifyUserForm.validate(async (validate) => {
                if (!validate) { // 验证表单是否填写合法
                    return toast('请填写正确的用户数据', 'warning')
                }
                // 发送网络请求，修改用户数据
                let { data, meta } = await modifyUserInfo(this.modifyUserForm)
                if (meta.status != 200) {  // 验证响应码是否正常
                    return toast('编辑用户操作失败', 'error')
                }

                // 1. 发射事件，请求更新用户列表
                this.$emit('updateUserList')
                // 2. 关闭修改用户的对话框
                this.dialogVisible = false
                // 3. 清空修改用户的表单内容
                this.$refs.modifyUserForm.resetFields()
                // 4. 吐司弹窗
                toast('更新用户数据成功', 'success')
            })
        },

        // 监听修改用户的对话框关闭事件
        close() {
            // 重置表单数据
            this.$refs.modifyUserForm.resetFields()
        },

        // 根据id查询用户信息
        async get_IDUserInfo(id) {
            let { data, meta } = await getIDUserInfo(id)
            // 返回一个Promise对象，查找用户失败时，不展示对话框
            return new Promise((resolve, reject) => {
                meta.status != 200 ? reject('要修改的用户可能已被删除，请重新刷新页面') : resolve(data)
            })
        }
    },
};
</script>

<style scoped>
</style>
