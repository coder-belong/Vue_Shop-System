<template>
    <!-- 角色列表区域 -->
    <el-table :data="roleList" border>
        <el-table-column type="expand" label="权限" width="50px">
            <!-- 权限列表区域 -->
            <template v-slot="scope">
                <el-row v-for="(items1) in scope.row.children" :key="items1.id" class="first">
                    <!-- 一级权限 -->
                    <el-col :span="5">
                        <el-tag closable @close="close(scope.row, items1.id)">{{ items1.authName }}</el-tag>
                        <i class="el-icon-caret-right"></i>
                    </el-col>
                    <!-- 二级权限和三级权限区域 -->
                    <el-col :span="19">
                        <!-- 二级权限 -->
                        <el-row v-for="(items2) in items1.children" :key="items2.id" class="two">
                            <el-col :span="7">
                                <el-tag
                                    closable
                                    type="success"
                                    @close="close(scope.row, items2.id)"
                                >{{ items2.authName }}</el-tag>
                                <i class="el-icon-caret-right"></i>
                            </el-col>
                            <el-col :span="17">
                                <!-- 三级权限 -->
                                <span v-for="(items3) in items2.children" :key="items3.id">
                                    <el-tag
                                        closable
                                        type="warning"
                                        @close="close(scope.row, items3.id)"
                                    >{{ items3.authName }}</el-tag>
                                </span>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
            </template>
        </el-table-column>
        <el-table-column type="index" label="#"></el-table-column>
        <el-table-column prop="roleName" label="角色名称"></el-table-column>
        <el-table-column prop="roleDesc" label="角色描述"></el-table-column>
        <el-table-column label="操作">
            <template v-slot="scope">
                <!-- 编辑角色 -->
                <el-button
                    type="primary"
                    size="mini"
                    icon="el-icon-edit"
                    round
                    @click="editClick(scope.row)"
                >编辑</el-button>
                <!-- 删除角色 -->
                <el-button
                    type="danger"
                    size="mini"
                    icon="el-icon-delete"
                    round
                    @click="deleteClick(scope.row.id)"
                >删除</el-button>
                <!-- 分配权限 -->
                <el-button
                    type="warning"
                    size="mini"
                    icon="el-icon-setting"
                    round
                    @click="SetRightClick(scope.row)"
                >分配权限</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
import { toast } from '../../../common/tool'
import { delteRole, deleteRight } from '../../../network/role'

export default {
    props: {
        roleList: Array
    },
    methods: {
        // 编辑角色的点击事件
        editClick(roleInfo) {
            // 发射中央事件总线
            this.$bus.$emit('editClick', roleInfo.id)
        },

        // 删除角色的点击事件
        deleteClick(id) {
            this.$confirm('此操作将永久删除该角色信息, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(async () => {
                // 发送网络请求，根据id删除指定角色
                let { meta } = await delteRole(id)
                if (meta.status != 200) {
                    return toast('删除角色信息失败', 'error')
                }
                toast('删除角色信息成功', 'success')
                this.$emit('upDateRole')  // 重新获取角色数据
            }).catch(() => toast('已取消删除操作', 'info'));
        },

        // 删除用户权限的点击事件
        close(roleInfo, rightID) {
            this.$confirm('此操作将永久删除该用户权限, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(async () => {
                // 1. 发送删除用户权限的网络请求
                let { data, meta } = await deleteRight(roleInfo.id, rightID)
                if (meta.status != 200) return toast('取消权限失败', 'error')
                // 2. 服务器会返回当前点击的用户最新的权限数据
                roleInfo.children = data
                // 3. 吐司弹窗
                toast('删除用户权限成功', 'success')

                // 直接发送网络请求更新数据会导致组件重新渲染，效果不友好
                // this.$emit('upDateRole')  // 重新获取角色数据

            }).catch(() => toast('已取消删除操作', 'info'));
        },

        // 监听分配权限的点击事件
        SetRightClick(role) {
            // 发射中央事件总线
            this.$bus.$emit('SetRightClick', role)
        }
    },
};
</script>

<style scoped>
.first,
.two {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
}
.first:first-child {
    border-top: 1px solid #eee;
}
.two:last-child {
    border-bottom: none;
}
.el-tag {
    margin: 7px;
}
</style>
