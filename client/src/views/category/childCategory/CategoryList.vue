<template>
    <tree-table
        :data="categoryList"
        :columns="columns"
        :selection-type="false"
        :expand-type="false"
        show-index
        index-text="#"
        border
        :show-row-hover="false"
    >
        <!-- 是否有效列 -->
        <template slot="isok" slot-scope="scope">
            <i class="el-icon-circle-close" v-show="scope.row.cat_deleted"></i>
            <i class="el-icon-circle-check" v-show="!scope.row.cat_deleted"></i>
        </template>

        <!-- 排序列 -->
        <template slot="sort" slot-scope="scope">
            <el-tag v-show="scope.row.cat_level === 0" size="small">一级列表</el-tag>
            <el-tag type="warning" v-show="scope.row.cat_level === 1" size="small">二级列表</el-tag>
            <el-tag type="danger" v-show="scope.row.cat_level === 2" size="small">三级列表</el-tag>
        </template>

        <!-- 操作列 -->
        <template slot="operation" slot-scope="scope">
            <el-button
                type="primary"
                icon="el-icon-edit"
                round
                size="mini"
                @click="editCateClick(scope.row.cat_id)"
            >编辑</el-button>
            <el-button
                type="danger"
                icon="el-icon-delete"
                round
                size="mini"
                @click="deleteCateClick(scope.row.cat_id)"
            >删除</el-button>
        </template>
    </tree-table>
</template>

<script>
import { deleteCate } from '../../../network/category'
import { toast } from '../../../common/tool'


export default {
    props: {
        categoryList: Array  // 商品分类列表数据
    },
    data() {
        return {
            // 表格各列的配置
            columns: [
                {
                    label: '分类名称', // 列标题
                    prop: 'cat_name',  // 列数据对应表格数据源中哪一个属性名
                },
                {
                    label: '是否有效',  // 列标题
                    type: 'template',  // 表示将当前列定义为模板列
                    template: 'isok',  // 指定要插入的具名插槽的名称

                },
                {
                    label: '排序',  // 列标题
                    type: 'template',  // 表示将当前列定义为模板列
                    template: 'sort',  // 指定要插入的具名插槽的名称
                },
                {
                    label: '操作',  // 列标题
                    type: 'template',  // 表示将当前列定义为模板列
                    template: 'operation',  // 指定要插入的具名插槽的名称
                },
            ]
        }
    },
    methods: {
        // 编辑按钮的点击事件
        editCateClick(id) {
            // 发射中央全局事件总线,并且携带当前点击的分类id
            this.$bus.$emit('editCateClick', id)
        },
        // 删除按钮的点击事件
        deleteCateClick(id) {
            this.$confirm('此操作将永久删除该分类, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(async () => {
                // 1. 发送网络请求，删除分类
                let { meta } = await deleteCate(id)
                if (meta.status !== 200) return toast('删除分类失败,请稍后重试', 'error')
                // 2. 让父组件重新获取分类列表数据
                this.$emit('updateCate')
                // 3. 吐司弹窗提示
                toast('删除分类成功', 'success')

            }).catch(() => {
                toast('已取消删除操作', 'info')
            })
        }
    }

};
</script>

<style scoped>
.el-icon-circle-close {
    color: red;
    font-size: 24px;
}
.el-icon-circle-check {
    font-size: 24px;
    color: lightgreen;
}

.category-list >>> .zk-table__cell-inner {
    text-align: center !important;
}
</style>
