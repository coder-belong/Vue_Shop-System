<template>
    <div>
        <!-- 角色列表导航栏 -->
        <role-nav-bar :navBarItem="navBarItem" />

        <!-- 卡片区域 -->
        <el-card>
            <!-- 添加角色区域 -->
            <el-row>
                <el-button type="primary" @click="addRoleClick">添加角色</el-button>
            </el-row>
            <!-- 角色列表区域 -->
            <role-list :roleList="roleList" @upDateRole="upDateRole" />
        </el-card>

        <!-- 添加角色的对话框区域 -->
        <add-role ref="addRole" @upDateRole="upDateRole" />
        <!-- 修改角色的对话框区域 -->
        <modify-role @upDateRole="upDateRole" />
        <!-- 分配权限的对话框区域 -->
        <set-right @upDateRole="upDateRole" />
    </div>
</template>

<script>
import AddRole from './childRole/AddRole'
import modifyRole from './childRole/modifyRole'
import SetRight from './childRole/SetRight'
import RoleList from './childRole/RoleList'

import RoleNavBar from '../../components/breadNav/BreadNavBar'

import { getRoleList } from '../../network/role'
import { toast } from '../../common/tool'

export default {
    components: {
        RoleNavBar,
        AddRole,
        modifyRole,
        RoleList,
        SetRight
    },
    data() {
        return {
            navBarItem: ['首页', '权限管理', '角色列表'],  // 角色列表页面的面包屑导航栏
            roleList: [],  // 角色列表数据
        }
    },
    mounted() {
        // 初始化角色列表数据
        this.get_RoleList()
    },
    methods: {
        /* 事件监听相关 */
        // 添加角色的点击事件
        addRoleClick() {
            this.$refs.addRole.dialogVisible = true
        },

        // 监听对话框中确定的点击事件，重新更新角色列表
        upDateRole() {
            // 重新发送网络请求，获取最新的角色列表数据
            this.get_RoleList()
        },


        /* 网络请求相关 */
        // 获取角色列表基本信息
        async get_RoleList() {
            let { data, meta } = await getRoleList()
            if (meta.status != 200) {
                return toast('获取角色列表失败,请稍后重试', 'wraning')
            }

            this.roleList = data
        }
    },
};
</script>

<style scoped>
.el-table >>> .cell {
    text-align: center;
}
</style>
