<template>
    <div>
        <el-container id="home">
            <!-- 头部区域 -->
            <el-header>
                <home-header />
            </el-header>

            <el-container>
                <!-- 侧边栏区域 -->
                <el-aside width="200px" ref="elAside">
                    <home-left-menu :leftMenu="leftMenu" @modifyAsideWidth="modifyAsideWidth" />
                </el-aside>

                <!-- 右侧主体区域 -->
                <el-main>
                    <router-view />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import HomeHeader from './childHome/HomeHeader'
import HomeLeftMenu from './childHome/HomeLeftMenu'

import { getHomeLeftMenu } from '../../network/home'

export default {
    components: {
        HomeHeader,
        HomeLeftMenu
    },
    data() {
        return {
            leftMenu: []  // 左侧菜单数据
        }
    },
    mounted() {
        // 发送网络请求获取侧边栏菜单数据
        this.get_HomeLeftMenu()
    },
    methods: {
        /* 事件监听相关 */
        // 折叠或展示左侧菜单栏时，更改侧边栏区域的宽度
        modifyAsideWidth(Collapse) {
            let aside = this.$refs.elAside.$el

            Collapse ? aside.style.width = 64 + 'px' : aside.style.width = 200 + 'px'
        },
        /* 网络请求相关方法 */
        async get_HomeLeftMenu() {
            let { data } = await getHomeLeftMenu()
            data.forEach(item => {
                // item.children.forEach(item => console.log(item.path))
            })
            this.leftMenu = data
        },


    }
};
</script>

<style scoped>
#home {
    width: 100vw;
    height: 100vh;
}
.el-header {
    background-color: #373d41;
}

.el-aside {
    background-color: #333744;
}

.el-main {
    background-color: rgb(250, 250, 250);
}
.el-container {
    height: calc(100vh - 60px);
}
</style>
