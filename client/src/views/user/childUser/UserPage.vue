<template>
    <div>
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[3, 5, 10, 20]"
            :page-size="pagesize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="totalListCount"
        ></el-pagination>
    </div>
</template>

<script>

export default {
    props: {
        totalListCount: Number,  // 列表的总数量
        currentPage: Number,  // 当前页码
        pagesize: Number  // 每页显示多少条数据
    },
    methods: {
        // 当每页显示的条数发生变化时
        handleSizeChange(newPageSize) {
            this.$emit('handleSizeChange', newPageSize)
        },
        // 当前页码发生改变时
        handleCurrentChange(currentPage) {
            this.$emit('handleCurrentChange', currentPage)
        }
    },
};
</script>

<style scoped>
</style>
