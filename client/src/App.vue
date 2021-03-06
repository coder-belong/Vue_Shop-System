<template>
    <div id="app">
        <router-view></router-view>
        <!-- <test /> -->
    </div>
</template>

<script>
import Login from './components/login/Login'
import Test from '../Test'
export default {
    components: {
        Login,
        Test
    },
};
</script>

<style scoped>
</style>
