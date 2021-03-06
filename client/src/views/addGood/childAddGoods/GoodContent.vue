<template>
    <div>
        <!-- 富文本编辑器 -->
        <quill-editor v-model="content" />
        <el-button type="primary" @click="addGoodClick">添加商品</el-button>
    </div>
</template>
 
<script>
export default {
    props: {
        addGood: Function
    },
    data() {
        return {
            content: ''  // 富文本编辑器双向绑定的数据
        }
    },
    methods: {
        addGoodClick() {
            this.addGood()
        }
    },
};
</script>

<style scoped>
.el-button {
    margin-top: 20px;
}
.quill-editor >>> .ql-container {
    height: 300px;
}
</style>
