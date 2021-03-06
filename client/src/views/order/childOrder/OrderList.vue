<template>
    <el-table :data="orderList" border>
        <el-table-column label="#" type="index"></el-table-column>
        <el-table-column prop="order_number" label="订单编号"></el-table-column>
        <el-table-column label="是否付款">
            <template v-slot="scope">
                <el-tag v-show="scope.row.pay_status == 1" type="success">已付款</el-tag>
                <el-tag v-show="scope.row.pay_status == 0" type="danger">未付款</el-tag>
            </template>
        </el-table-column>
        <el-table-column prop="order_price" label="订单价格"></el-table-column>
        <el-table-column label="是否发货" prop="is_send"></el-table-column>
        <el-table-column label="下单时间">
            <template v-slot="scope">
                <span>{{ scope.row.create_time | dateFormat }}</span>
            </template>
        </el-table-column>
        <el-table-column label="操作">
            <template v-slot="scope">
                <el-tooltip effect="dark" content="编辑地址" placement="top">
                    <!-- 编辑地址按钮 -->
                    <el-button
                        type="primary"
                        icon="el-icon-edit"
                        circle
                        size="small"
                        @click="editClick(scope.row)"
                    ></el-button>
                </el-tooltip>

                <el-tooltip effect="dark" content="物流进度" placement="top">
                    <!-- 物流进度按钮 -->
                    <el-button
                        type="success"
                        icon="el-icon-location"
                        circle
                        size="small"
                        @click="logisticsClick(scope.row)"
                    ></el-button>
                </el-tooltip>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
export default {
    props: {
        orderList: Array
    },
    methods: {
        // 监听物流进度按钮的点击
        logisticsClick(orderInfo) {
            this.$bus.$emit('logisticsClick', orderInfo)
        },
        // 监听编辑按钮的点击
        editClick(orderInfo) {
            this.$bus.$emit('editClick', orderInfo)
        }
    },
};
</script>

<style scoped>
</style>
