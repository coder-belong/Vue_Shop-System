<template>
    <el-menu
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#409EFF"
        unique-opened
        :collapse="LeftMenuCollapse" 
        :collapse-transition="false"
        router
        :default-active="path"
    >
        <div class="collapse" @click="showleftMenu">|||</div>
        <!-- 一级菜单-->
        <el-submenu v-for="(items, index) in leftMenu" :key="items.id" :index="items.id + ''">
            <div slot="title">
                <i :class="iconClassName[index]"></i>
                <span>{{ items.authName }}</span>
            </div>
            <!-- 二级菜单 -->
            <el-menu-item v-for="items2 in items.children" :key="items2.id" :index="items2.path">
                <i class="el-icon-menu"></i>
                <span>{{ items2.authName }}</span>
            </el-menu-item>
        </el-submenu>
    </el-menu>
</template>



<script>
export default {
    props: {
        leftMenu: Array
    },
    data() {
        return {
            iconClassName: [
                'el-icon-user-solid', 'el-icon-s-tools', 'el-icon-s-goods', 'el-icon-s-order', 'el-icon-data-line'
            ],
            LeftMenuCollapse: false, // 控制菜单导航栏是否折叠
        }
    },
    methods: {
        // 点击折叠菜单栏
        showleftMenu() {
            this.LeftMenuCollapse = !this.LeftMenuCollapse
            this.$emit('modifyAsideWidth', this.LeftMenuCollapse)
        }
    },
    computed: {
        path() {
            // 截取/home后面的子路由
            return window.location.pathname.substr(6)
        }
    },
};
</script>

<style scoped>
.el-submenu span {
    margin-left: 10px;
}
.el-menu {
    border: none;
}
.collapse {
    font-size: 12px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: white;
    cursor: pointer;
    letter-spacing: 0.2em;
}
</style>
