<template>
    <el-form>
        <el-form-item v-for="items in onlyParam" :key="items.attr_id" :label="items.attr_name">
            <el-input v-model="items.attr_vals"></el-input>
        </el-form-item>
    </el-form>
</template> 

<script>
export default {
    props: {
        onlyParam: Array  // 静态属性列表数据
    },
};
</script>

<style scoped>
</style>
