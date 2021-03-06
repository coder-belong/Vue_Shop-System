<template>
    <div>
        <!-- 权限列表导航区域 -->
        <right-nav-bar :navBarItem="navBarItem" />

        <!-- 权限列表表格区域 -->
        <el-card>
            <el-table :data="rightList" border stripe>
                <el-table-column type="index" label="#"></el-table-column>
                <el-table-column prop="authName" label="权限名称"></el-table-column>
                <el-table-column prop="path" label="路径"></el-table-column>
                <el-table-column label="权限等级">
                    <template v-slot="scope">
                        <el-tag v-show="scope.row.level == 0">一级权限</el-tag>
                        <el-tag type="success" v-show="scope.row.level == 1">二级权限</el-tag>
                        <el-tag type="warning" v-show="scope.row.level == 2">三级权限</el-tag>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
    </div>
</template>

<script>
import RightNavBar from '../../components/breadNav/BreadNavBar'
import { getRightList } from '../../network/right'
import { toast } from '../../common/tool'


export default {
    components: {
        RightNavBar
    },
    data() {
        return {
            navBarItem: ['首页', '权限管理', '权限列表'], // 面包屑导航列表
            rightList: []  // 权限列表数据
        }
    },
    mounted() {
        this.get_RightList()
    },
    methods: {
        /* 网络请求相关 */
        // 获取权限列表数据
        async get_RightList() {
            let { data, meta } = await getRightList()
            if (meta.status != 200) {
                return toast('获取权限列表数据失败', 'error')
            }
            this.rightList = data
        }
    },
};
</script>

<style scoped>
.el-table >>> .cell {
    text-align: center;
}
</style>
