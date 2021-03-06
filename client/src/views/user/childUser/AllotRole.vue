<template>
    <!-- 分配角色弹出的对话框 -->
    <el-dialog title="分配角色" :visible.sync="dialogVisible" width="30%" @close="close">
        <!-- 1. 分配角色信息的表单区域 -->
        <div>
            <p>当前的用户：{{ userInfo.username }}</p>
            <p>当前的角色：{{ userInfo.role_name }}</p>
            <div>
                <span>分配新角色：</span>
                <el-select placeholder="请选择角色" v-model="roleID">
                    <el-option
                        v-for="items in roleList"
                        :key="items.id"
                        :label="items.roleName"
                        :value="items.id"
                    ></el-option>
                </el-select>
            </div>
        </div>

        <!-- 2. 对话框的取消和按钮区域 -->
        <span slot="footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="confirm">确 定</el-button>
        </span>
    </el-dialog>
</template>

<script>
import { toast } from '../../../common/tool'
import { getRoleList } from '../../../network/role'
import { updateRole } from '../../../network/user'

export default {
    data() {
        return {
            dialogVisible: false,  // 控制对话框的显示与隐藏
            userInfo: '',  // 存储当前需要分配角色的用户信息
            roleList: [],  // 存储所有角色列表信息
            roleID: '' // 存储下拉框中选中的角色id值
        }
    },
    mounted() {
        // 监听分配角色按钮发射的的中央事件
        this.$bus.$on('allotClick', (userInfo) => {
            // 1. 展示对话框
            this.dialogVisible = true
            // 2. 存储当前分配角色的用户信息数据
            this.userInfo = userInfo
            // 3. 初始化所有角色列表数据 
            this.get_RoleList()
        })
    },
    methods: {
        // 点击确认添加用户按钮时触发
        async confirm() {
            let { meta } = await updateRole(this.userInfo.id, this.roleID)
            if (meta.status != 200 || meta.status == 400) return toast(meta.msg || '更新角色失败', 'error')
            this.$emit('updateUserList')
            toast('更新角色成功', 'success')
            this.dialogVisible = false
        },

        // 监听添加用户的对话框的关闭事件
        close() {
            this.roleID = ''
        },

        // 获取所有角色列表数据
        async get_RoleList() {
            let { data, meta } = await getRoleList()
            this.roleList = data
        }
    },
};
</script>

<style scoped>
.el-select {
    display: inline-block;
    width: 150px;
}
</style>
