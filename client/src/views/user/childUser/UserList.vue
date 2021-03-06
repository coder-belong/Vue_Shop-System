 <template>
    <el-table :data="userListInfo" border>
        <el-table-column type="index" label="#" />
        <el-table-column prop="username" label="用户姓名"></el-table-column>
        <el-table-column prop="email" label="邮箱"></el-table-column>
        <el-table-column prop="mobile" label="电话"></el-table-column>
        <el-table-column prop="role_name" label="角色"></el-table-column>
        <el-table-column label="状态">
            <template v-slot="scope">
                <!-- Switch 开关 -->
                <el-switch
                    v-model="scope.row.mg_state"
                    active-color="#13ce66"
                    inactive-color="#DCDFE6"
                    @change="switchClick(scope.row)"
                />
            </template>
        </el-table-column>
        <!-- 按钮操作区域（列） -->
        <el-table-column label="操作">
            <template v-slot="scope">
                <!-- 编辑用户按钮 -->
                <el-tooltip effect="dark" content="编辑用户" placement="top" :enterable="false">
                    <el-button
                        type="primary"
                        icon="el-icon-edit"
                        circle
                        size="mini"
                        @click="modifyClick(scope.row)"
                    />
                </el-tooltip>
                <!-- 删除用户按钮 -->
                <el-tooltip effect="dark" content="删除用户" placement="top" :enterable="false">
                    <el-button
                        type="danger"
                        icon="el-icon-delete"
                        circle
                        size="mini"
                        @click="deleteClick(scope.row.id)"
                    ></el-button>
                </el-tooltip>
                <!-- 分配权限按钮 -->
                <el-tooltip effect="dark" content="分配角色" placement="top" :enterable="false">
                    <el-button
                        type="warning"
                        icon="el-icon-s-tools"
                        circle
                        size="mini"
                        @click="allotClick(scope.row)"
                    ></el-button>
                </el-tooltip>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
// 网络请求相关的方法
import { changeUserState, deleteUserInfo } from '../../../network/user'
import { toast } from '../../../common/tool'

export default {
    props: {
        userListInfo: Array  // 用户列表数据
    },
    methods: {
        // 监听Switch开关的点击
        async switchClick({ id, mg_state }) {
            // 发送网络请求，修改用户状态
            await changeUserState(id, mg_state)
            // 修改用户是否成功的弹窗信息
            toast('用户状态修改成功', 'success')
        },

        // 监听修改用户按钮的点击
        modifyClick(userInfo) {
            this.$bus.$emit('modifyClick', userInfo)
        },

        // 监听删除用户按钮的点击事件
        deleteClick(id) {
            this.$confirm('此操作将永久删除该用户数据, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
                roundButton: true
            }).then(async () => { // 点击确定按钮时，会进入到这
                // 1. 根据要删除的用户id发送网络请求
                let { data, meta } = await deleteUserInfo(id)
                // 2. 判断响应码
                if (meta.status === 400 || meta.status != 200) {  // 不允许删除admin账户
                    return toast(meta.msg || '删除用户操作失败', 'error')
                }
                // 3. 发射事件，让父组件重新更新用户列表
                this.$emit('updateUserList')
                // 4. 弹窗提示信息
                toast('用户删除成功！', 'success')

            }).catch(() => toast('已取消删除操作', 'info'));
        },

        // 监听分配角色按钮的点击事件
        allotClick(userInfo) {
            this.$bus.$emit('allotClick', userInfo)
        }
    }
};
</script>

<style scoped>
</style>


