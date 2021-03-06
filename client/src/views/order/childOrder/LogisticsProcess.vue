<template>
    <el-dialog :visible.sync="dialogVisible" title="物流进度">
        <!-- 时间线组件区域 -->
        <el-timeline>
            <el-timeline-item
                v-for="(items, index) in activities"
                :key="index"
                :timestamp="items.time"
                :color="items.color"
            >{{ items.context }}</el-timeline-item>
        </el-timeline>
        <span slot="footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
    </el-dialog>
</template>

<script>


export default {
    mounted() {
        this.$bus.$on('logisticsClick', orderInfo => {
            this.dialogVisible = true
        })
    },
    data() {
        return {
            dialogVisible: false,
            // 模拟物流进度时间线数据
            activities: [
                {
                    "time": "2018-05-10 09:39:00",
                    "context": "已签收,感谢使用顺丰,期待再次为您服务",
                    color: '#0bbd87'
                },
                {
                    "time": "2018-05-10 08:23:00",
                    "context": "[北京市]北京海淀育新小区营业点派件员 顺丰速运 95338正在为您派件",
                    color: '#0bbd87'
                },
                {
                    "time": "2018-05-10 07:32:00",
                    "context": "快件到达 [北京海淀育新小区营业点]",
                    color: '#0bbd87'
                },
                {
                    "time": "2018-05-09 21:21:00",
                    "context": "快件在[北京宝胜营业点]已装车,准备发往 [北京顺义集散中心]",
                    color: '#0bbd87'
                },
                {
                    "time": "2018-05-09 12:22:24",
                    "context": "您的订单将由HLA（北京海淀区清河中街店）门店安排发货。",
                    color: '#0bbd87'
                },
                {
                    "time": "2018-05-08 21:36:04",
                    "context": "商品已经下单",
                    color: '#0bbd87'
                }
            ],
        }
    },
};
</script>

<style scoped>
</style>
