<template>
    <el-row :gutter="25">
        <!-- 搜索用户区域 -->
        <el-col :span="11">
            <el-input placeholder="请输入内容" v-model="input" clearable @clear="clearInput">
                <el-button slot="append" icon="el-icon-search" @click="searchClick" />
            </el-input>
        </el-col>
        <!-- 添加用户区域 -->
        <el-col :span="4">
            <el-button type="primary" @click="addUserClick">添加用户</el-button>
        </el-col>
    </el-row>
</template>

<script>
export default {
    data() {
        return {
            input: ''  // 搜索框数据
        }
    },
    methods: {
        // 点击搜索按钮时触发
        searchClick() {
            this.$emit('searchUser', this.input)
        },
        
        // 文本框被清空时触发
        clearInput() {
            this.$emit('clearInput', this.input)
        },

        // 点击添加用户时触发
        addUserClick() {
            // 发射中央事件总线
            this.$bus.$emit('addUserClick')
        }
    },
};
</script>

<style scoped>
</style>
