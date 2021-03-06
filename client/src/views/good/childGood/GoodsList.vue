<template>
    <el-table :data="goodsList" border>
        <el-table-column type="index" label="#"></el-table-column>
        <el-table-column prop="goods_name" label="商品名称"></el-table-column>
        <el-table-column prop="goods_price" label="商品价格 (元)" width="110"></el-table-column>
        <el-table-column prop="goods_number" label="商品数量 (个)" width="110"></el-table-column>
        <el-table-column label="创建时间" width="180">
            <!-- 使用全局过滤器格式化时间 -->
            <template v-slot="scope">{{scope.row.add_time | dateFormat}}</template>
        </el-table-column>
        <el-table-column label="操作" width="200">
            <template v-slot="scope">
                <el-button
                    round
                    size="mini"
                    type="primary"
                    icon="el-icon-edit"
                    @click="editGoodsClick(scope.row)"
                >编辑</el-button>
                <el-button
                    round
                    size="mini"
                    type="danger"
                    icon="el-icon-delete"
                    @click="deleteClick(scope.row.goods_id)"
                >删除</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
import { deleteGoods } from '../../../network/goods.js'
import { toast } from '../../../common/tool'

export default {
    props: {
        goodsList: Array  // 商品列表数据
    },
    methods: {
        // 监听删除按钮的点击
        deleteClick(id) {
            // 1. 展示确认弹窗
            this.$confirm('此操作将永久删除该商品, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(async () => {
                // 2. 发送网络请求，删除商品
                let { meta } = await deleteGoods(id)
                if (meta.status !== 200) return toast('删除商品失败', 'error')
                // 3. 吐司弹窗
                toast('删除商品成功', 'success')
                // 4. 让父组件重新获取最新的商品列表数据
                this.$emit('updateGoods')
            }).catch(() => toast('已取消删除商品的操作', 'info'));
        },
        // 监听编辑按钮的点击
        editGoodsClick(goodInfo) {
            this.$bus.$emit('editGoodsClick', goodInfo)
        }
    },
};
</script>

<style scoped>
</style>
