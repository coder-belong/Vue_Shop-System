<template>
    <div>
        <!-- 商品列表面包屑导航条 -->
        <goods-nav-bar :navBarItem="goodsNavItem" />
        <!-- 卡片区域 -->
        <el-card>
            <!-- 搜索与添加商品区域 -->
            <el-row>
                <!-- 搜索区域 -->
                <el-input placeholder="请输入" clearable v-model="searInputVal" @clear="clear">
                    <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
                </el-input>
                <!-- 添加商品 -->
                <el-button type="primary" @click="addGoods">添加商品</el-button>
            </el-row>
            <!-- 商品列表区域 -->
            <goods-list :goodsList="goodsList" @updateGoods="get_GoodsList(queryInfo)" />
            <!-- 分页区域 -->
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="queryInfo.pagenum"
                :page-sizes="[3, 5, 8, 10]"
                :page-size="queryInfo.pagesize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total"
                background
            ></el-pagination>
        </el-card>
        <!-- 编辑商品的对话框 -->
        <edit-good @updateGoods="get_GoodsList(queryInfo)"/>
    </div>
</template>

<script>
import GoodsList from './childGood/GoodsList'
import EditGood from './childGood/EditGood'

import GoodsNavBar from '../../components/breadNav/BreadNavBar'

import { getGoodsList } from '../../network/goods.js'

export default {
    components: {
        GoodsList,
        EditGood,
        GoodsNavBar,
    },
    data() {
        return {
            goodsNavItem: ['首页', '商品管理', '商品列表'],  // 面包屑导航栏标题
            queryInfo: {   // 网络请求携带的参数
                query: '',  // 查询关键字
                pagenum: 1, // 当前页码
                pagesize: 8,  // 每页显示条数
            },
            total: 0, // 总共的数据条数
            goodsList: [],  // 存储商品列表数据
            searInputVal: '',  // 存储搜索文本框的值
        }
    },
    mounted() {
        // 获取商品列表数据
        this.get_GoodsList(this.queryInfo)
    },
    methods: {
        /* 事件监听相关 */
        // 监听页码器的变化
        handleSizeChange(newSize) {
            // 1. 将最新的页面展示多少条数据赋值到请求参数上
            this.queryInfo.pagesize = newSize
            // 2. 发送网络请求，重新获取商品列表数据
            this.get_GoodsList(this.queryInfo)
        },
        // 监听当前页码的变化
        handleCurrentChange(newPage) {
            // 1. 获取当前最新的页码
            this.queryInfo.pagenum = newPage
            // 2. 发送网络请求，重新获取商品列表数据
            this.get_GoodsList(this.queryInfo)
        },

        // 搜索按钮的点击事件
        search() {
            // 1. 获取文本框双向绑定的值
            this.queryInfo.query = this.searInputVal
            // 2. 发送网络请求，重新获取商品列表数据
            this.get_GoodsList(this.queryInfo)
        },

        // 文本框被清空事件
        clear() {
            this.queryInfo.query = this.searInputVal
            this.get_GoodsList(this.queryInfo)
        },

        // 监听添加商品的点击
        addGoods() {
            // 直接跳转路由
            this.$router.push('/home/addgoods')
        },

        /* 网络请求相关 */
        // 获取商品列表数据
        async get_GoodsList(queryInfo) {
            let { data } = await getGoodsList(queryInfo.query, queryInfo.pagenum, queryInfo.pagesize)
            this.total = data.total
            this.goodsList = data.goods
        }
    },
};
</script>

<style scoped>
.el-input {
    width: 400px;
    margin-right: 25px;
}
</style>
