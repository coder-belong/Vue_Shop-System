<template>
    <el-form label-position="top">
        <el-form-item v-for="(items1) in manyParam" :key="items1.attr_id" :label="items1.attr_name">
            <!-- 多选框组 -->
            <el-checkbox-group v-model="items1.attr_vals">
                <el-checkbox
                    v-for="(items2, index) in items1.attr_vals"
                    :key="index"
                    :label="items2"
                    border 
                ></el-checkbox>
            </el-checkbox-group>
        </el-form-item>
    </el-form>
</template>

<script>
export default {
    props: {
        manyParam: Array  // 动态参数
    },
};
</script>

<style scoped>
.el-checkbox {
    margin: 0 20px 10px 0 !important;
}
</style>
