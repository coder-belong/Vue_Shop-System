<template>
    <div class="top">
        <div class="left">
            <img src="../../../assets/img/heima.png" />
            <span>电商后台管理系统</span>
        </div>
        <div class="right">
            <el-button @click="exit" type="info">退出</el-button>
        </div>
    </div>
</template>

<script>
import { toast } from '../../../common/tool'
export default {
    methods: {
        // 实现退出功能
        exit() {
            // 删除本地存储的token数据
            sessionStorage.removeItem('userID')
            // 跳转前端路由
            this.$router.push('/login')
            // 吐司提示弹窗
            toast('退出成功', 'success')
            
        },
    },
};
</script>

<style scoped>
.top {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.top .left {
    display: flex;
    align-items: center;
    font-size: 25px;
    color: white;
}
.top .left img {
    margin-right: 20px;
}
</style>
