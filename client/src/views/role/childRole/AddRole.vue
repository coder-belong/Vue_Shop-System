<template>
    <el-dialog title="添加角色" :visible.sync="dialogVisible" width="40%" @close="close">
        <!-- 对话框主体区域 -->
        <el-form label-width="auto" :model="addRoleForm" ref="addRoleForm" :rules="addRoleRules">
            <el-form-item label="角色名称" prop="roleName">
                <el-input v-model="addRoleForm.roleName"></el-input>
            </el-form-item>
            <el-form-item label="角色描述" prop="roleDesc">
                <el-input v-model="addRoleForm.roleDesc"></el-input>
            </el-form-item>
        </el-form>
        <!-- 对话框底部区域 -->
        <span slot="footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="confirm">确 定</el-button>
        </span> 
    </el-dialog>
</template>

<script>
import { addRole } from '../../../network/role'
import { toast } from '../../../common/tool'

export default {
    data() {
        return {
            dialogVisible: false, // 控制添加用户的表单对话框的显示与隐藏
            addRoleForm: {  // 添加角色的表单数据对象
                roleName: '',  // 角色名称
                roleDesc: ''  // 角色描述
            },

            // 定义添加角色的表单验证规则
            addRoleRules: {
                roleName: [
                    { required: true, message: '请输入角色名称', trigger: 'blur' },
                    { min: 2, max: 5, message: '输入长度在 2 到 5 个字符', trigger: 'blur' }
                ],
                roleDesc: [
                    { required: true, message: '请输入角色角色描述信息', trigger: 'blur' },
                    { min: 2, max: 12, message: '输入长度在 2 到 12 个字符', trigger: 'blur' }
                ],
            }
        }
    },
    methods: {
        // 监听对话框中确定按钮的点击事件   
        confirm() {
            this.$refs.addRoleForm.validate(async validate => {
                if (!validate) { // 验证表单数据是否符合规范
                    return toast('表单信息填写有误，请重新填写', 'warning')
                }
                // 发送网络请求，添加角色
                let { data, meta } = await addRole(this.addRoleForm)
                if (meta.status != 201) {  // 判断响应码是否是正常的
                    return toast('创建角色失败', 'error')
                }

                // 1. 向父组件发射事件，让父组件更新角色列表数据
                this.$emit('upDateRole')
                // 2. 关闭当前对话框
                this.dialogVisible = false
                // 3. 重置对话框中的表单数据
                this.$refs.addRoleForm.resetFields()
                // 4. 吐司弹窗
                toast(meta.msg, 'success')
            })
        },

        // 监听对话框的关闭事件
        close() {
            // 重置对话框中的表单数据
            this.$refs.addRoleForm.resetFields()
        }
    },
}
</script>

<style scoped>
</style>
