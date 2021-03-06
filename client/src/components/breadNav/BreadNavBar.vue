<template>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item
            v-for="(items, index) in navBarItem"
            :key="items"
            :to="{ path: index === 0 ? '/home' : '' }"
        >{{ items }}</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
export default { 
    props: {
        navBarItem: Array
    }
};
</script>

<style scoped>
</style>
