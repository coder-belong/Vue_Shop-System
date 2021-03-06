<template>
    <!-- 添加用户弹出的对话框 -->
    <el-dialog title="添加用户信息" :visible.sync="dialogVisible" width="30%" @close="close">
        <!-- 1. 添加用户信息的表单区域 -->
        <el-form
            ref="addUserForm"
            :model="addUserForm"
            label-width="auto"
            :rules="addUserFormRules"
        >
            <el-form-item label="用户名" prop="name">
                <el-input v-model="addUserForm.name" clearable />
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="addUserForm.password" clearable show-password />
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
                <el-input v-model="addUserForm.email" clearable />
            </el-form-item>
            <el-form-item label="电话" prop="phone">
                <el-input v-model="addUserForm.phone" clearable />
            </el-form-item>
        </el-form>
        <!-- 2. 对话框的取消和按钮区域 -->
        <span slot="footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="addUserInfo">确 定</el-button>
        </span>
        
    </el-dialog>
</template>

<script>
import { toast, UserFormRules } from '../../../common/tool'
import { addUserInfo } from '../../../network/user'

export default {
    data() {
        return {
            dialogVisible: false,  // 控制对话框的显示与隐藏
            addUserForm: { // 添加用户的表单数据对象
                name: '',
                password: '',
                email: '',
                phone: '',
            },
            // 添加用户信息的表单验证规则
            addUserFormRules: UserFormRules // 注：字段和数据对象的字段保持一致
        }
    },
    mounted() {
        // 监听添加用户的中央事件
        this.$bus.$on('addUserClick', () => {
            this.dialogVisible = !this.dialogVisible
        })
    },
    methods: {
        // 点击确认添加用户按钮时触发
        addUserInfo() {
            this.$refs.addUserForm.validate(async (validate) => {
                if (!validate) { // 验证表格输入内容是否合法
                    return toast('请填写完整信息', 'warning')
                }
                let { data, meta } = await addUserInfo(this.addUserForm)

                if (meta.status === 400) { // 验证响应状态码是否正常
                    return toast(meta.msg, 'error')
                } else if (meta.status != 201) {
                    return toast('添加用户失败', 'error')
                }


                // 1. 发射事件，让父组件更新用户列表数据
                this.$emit('updateUserList')
                // 2. 关闭添加用户的对话框
                this.dialogVisible = false
                // 3. 清空添加用户的文本框
                this.$refs.addUserForm.resetFields()
                // 4. 吐司弹窗
                return toast('添加用户成功', 'success')
                
            })
        },

        // 监听添加用户的对话框的关闭事件
        close() {
            this.$refs.addUserForm.resetFields()
        }
    },
};
</script>

<style scoped>
</style>
