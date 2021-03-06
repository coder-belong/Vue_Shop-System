<template>
    <div>
        <!-- 面包屑导航 -->
        <order-nav-bar :navBarItem="['首页', '订单管理', '订单列表']" />
        <!-- 卡片视图区域 -->
        <el-card>
            <!-- 搜索区域：无API接口，此功能暂无 -->
            <el-alert title="后台搜索功能的接口，此功能待完善" type="warning" :closable="false" show-icon></el-alert>
            <br />
            <el-row>
                <el-input v-model="searchVal" placeholder="请输入关键字">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
            </el-row>
            <!-- 订单列表 -->
            <order-list :orderList="orderList" />

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
        <!-- 编辑地址的对话框 -->
        <edit-address />
        <!-- 物流进度的对话框 -->
        <logistics-process />
    </div>
</template>

<script>
import OrderList from './childOrder/OrderList'
import EditAddress from './childOrder/EditAddress'
import LogisticsProcess from './childOrder/LogisticsProcess'

import orderNavBar from '../../components/breadNav/BreadNavBar'
import { getOrderList } from '../../network/orders'

export default {
    components: {
        OrderList,
        EditAddress,
        LogisticsProcess,
        orderNavBar,
    },
    data() {
        return {
            // 获取订单列表的携带参数
            queryInfo: {
                query: '',  // 查询关键词
                pagenum: 1,  // 当前页码
                pagesize: 5,  // 每页显示条数
            },
            total: 0, // 总共的数据条数
            orderList: [],  // 订单数据列表
            searchVal: '',  // 搜索文本框双向绑定的数据
        }
    },
    mounted() {
        // 获取订单列表数据
        this.get_OrderList()
    },
    methods: {
        /* 事件监听相关 */
        // 监听每页显示条数的变化
        handleSizeChange(newSize) {
            this.queryInfo.pagesize = newSize
            // 根据新的每页显示条数，重新发送网络请求获取订单列表
            this.get_OrderList()
        },
        // 监听当前页码发生的变化
        handleCurrentChange(newPage) {
            this.queryInfo.pagenum = newPage
            // 根据新的当前页码，重新发送网络请求获取订单列表
            this.get_OrderList()
        },


        /* 网络请求相关 */
        // 获取订单列表数据
        async get_OrderList() {
            let { query, pagenum, pagesize } = this.queryInfo
            let { data, meta } = await getOrderList(query, pagenum, pagesize)
            this.orderList = data.goods
            this.total = data.total
        }
    },
};
</script>

<style scoped>
.el-input {
    width: 550px;
}
</style>
