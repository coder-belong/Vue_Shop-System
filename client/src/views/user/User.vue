<template>
    <div>
        <!-- 面包屑导航区域 -->
        <user-nav-bar :navBarItem="navBarItem" />
        <!-- 卡片视图区域 -->
        <el-card>
            <!-- 1. 搜索与添加区域 -->
            <user-search @searchUser="searchUser" @clearInput="searchUser" />

            <!-- 2. 用户列表区域 -->
            <user-list :userListInfo="userListInfo" @updateUserList="updateUserList" />
            <!-- 3. 分页区域 -->
            <user-page
                :totalListCount="totalListCount"
                :currentPage="queryInfo.pagenum"
                :pagesize="queryInfo.pagesize"
                @handleSizeChange="handleSizeChange"
                @handleCurrentChange="handleCurrentChange"
            />
        </el-card>
        <!-- 添加用户弹出的对话框区域 -->
        <add-user-info @updateUserList="updateUserList" />
        <!-- 修改用户信息的对话框区域 -->
        <modify-user-info @updateUserList="updateUserList" />
        <!-- 分配角色的对话框区域 -->
        <allot-role @updateUserList="updateUserList"/>
    </div>
</template>

<script>
import UserSearch from './childUser/UserSearch'
import UserList from './childUser/UserList'
import UserPage from './childUser/UserPage'
import AddUserInfo from './childUser/AddUserInfo'
import ModifyUserInfo from './childUser/ModifyUserInfo'
import AllotRole from './childUser/AllotRole'

import UserNavBar from '../../components/breadNav/BreadNavBar'

import { getUserList } from '../../network/user'

import { toast } from '../../common/tool.js'

export default {
    components: {
        UserNavBar,
        UserSearch,
        UserList,
        UserPage,
        AddUserInfo,
        ModifyUserInfo,
        AllotRole
    },
    data() {
        return {
            // 定义请求列表数据的参数
            queryInfo: {
                query: '', // 根据用户姓名指定要展示的数据
                pagenum: 1, // 当前请求的页码
                pagesize: 3 // 每页请求的条数
            },
            userListInfo: [],  // 存储用户列表数据
            totalListCount: 0, // 用户列表数据的总数量
            navBarItem: ['首页', '用户管理', '用户列表']  // 面包导航列表数据
        }
    },
    mounted() {
        // 发送网络请求，获取用户列表数据
        this.get_UserList(this.queryInfo)
    },
    methods: {
        /* 事件监听相关 */
        // 当每页显示的条数发生变化时
        handleSizeChange(newPageSize) {
            // 1. 更新改变后每页显示的条数
            this.queryInfo.pagesize = newPageSize
            // 2. 发送网络请求重新获取用户列表数据
            this.get_UserList(this.queryInfo)
        },
        // 当前页码发生变化时
        handleCurrentChange(currentPage) {
            // 1. 更新改变后的页码
            this.queryInfo.pagenum = currentPage
            // 2. 发送网络请求重新获取用户列表数据
            this.get_UserList(this.queryInfo)
        },

        // 点击搜索用户或清空文本框时触发
        searchUser(userName) {
            // 1. 将文本框的值赋值给query上
            this.queryInfo.query = userName
            // 2. 发送网络请求，重新获取用户列表数据
            this.get_UserList(this.queryInfo)
        },

        // 更新用户列表数据
        updateUserList() {
            // 重新发送网络请求，获取用户列表数据
            this.get_UserList(this.queryInfo)
        },


        /* 网络请求相关 */
        // 获取用户列表数据
        async get_UserList(queryInfo) {
            let { data, meta } = await getUserList(queryInfo)
            if (meta.status !== 200) {
                return toast('查询用户列表失败', 'error')
            }

            this.userListInfo = data.users
            this.totalListCount = Number(data.total)
            // console.log(data);
        },

    },
};
</script>

<style scoped>
</style>
