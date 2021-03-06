<template>
    <div>
        <!-- 商品分类面包屑导航 -->
        <category-nav-bar :navBarItem="['首页', '商品管理', '商品分类']" />

        <!-- 卡片区域 -->
        <el-card>
            <!-- 添加分类商品按钮 -->
            <el-button type="primary" @click="addCateClick">添加分类</el-button>
            <!-- 商品分类列表 -->
            <category-list
                :categoryList="categoryList"
                class="category-list"
                @updateCate="updateCate"
            />
            <!-- 分页区域 -->
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="queryInfo.pagenum"
                :page-sizes="[3, 5, 10, 30]"
                :page-size="queryInfo.pagesize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total"
            ></el-pagination>
        </el-card>

        <!-- 添加分类的对话框 -->
        <add-cate ref="addCate" :parentCate="parentCate" @updateCate="updateCate" />
        <!-- 编辑分类的对话框 -->
        <edit-cate @updateCate="updateCate" />
    </div>
</template>

<script>

import CategoryList from './childCategory/CategoryList'
import AddCate from './childCategory/AddCate'
import EditCate from './childCategory/EditCate'

import CategoryNavBar from '../../components/breadNav/BreadNavBar'

import { toast } from '../../common/tool.js'
import { getCategoryData } from '../../network/category'


export default {
    components: {
        CategoryNavBar,
        CategoryList,
        AddCate,
        EditCate
    },
    data() {
        return {
            // 获取商品分类网络请求所携带的参数
            queryInfo: {
                type: 3,
                pagenum: 1,  // 当前页码值
                pagesize: 5  // 每页显示多少条数据
            },
            categoryList: [],  // 商品分类列表数据
            total: 0,  // 总数据条数

            parentCate: [],  // 父级分类的数据列表
        }
    },
    mounted() {
        // 获取商品分类列表数据
        this.get_CategoryData(this.queryInfo)
    },
    methods: {
        /* 事件监听相关 */

        // 当页码器发生变化时触发
        handleSizeChange(newSize) {
            this.queryInfo.pagesize = newSize
            // 发送网络请求，重新获取商品分类数据
            this.get_CategoryData(this.queryInfo)
        },
        // 当前页码发生变化时触发
        handleCurrentChange(newPage) {
            this.queryInfo.pagenum = newPage
            // 发送网络请求，重新获取商品分类数据
            this.get_CategoryData(this.queryInfo)
        },

        // 监听添加分类按钮的点击事件
        async addCateClick() {
            // 发送网络请求，获取父级分类的数据列表
            let { data } = await getCategoryData({ type: 2 })
            this.parentCate = data

            // 展示添加分类的对话框
            this.$refs.addCate.dialogVisible = true
        },

        // 更新商品分类数据
        updateCate() {
            this.get_CategoryData(this.queryInfo)
        },


        /* 网络请求相关 */
        // 获取商品分类列表数据
        async get_CategoryData(queryInfo) {
            let { data, meta } = await getCategoryData(queryInfo)
            if (meta.status !== 200) return toast('获取商品分类数据失败', 'error')
            this.categoryList = data.result
            this.total = data.total
        }
    },
};
</script>

<style scoped>
.category-list {
    margin-top: 20px;
}
</style>
