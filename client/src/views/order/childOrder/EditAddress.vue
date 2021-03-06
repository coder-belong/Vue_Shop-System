<template>
    <el-dialog :visible.sync="dialogVisible" title="编辑地址" @close="close">
        <el-alert title="后台无编辑地址的接口，此功能待完善" type="warning" :closable="false" show-icon></el-alert>
        <br />
        <el-form label-width="80px">
            <el-form-item label="省市区">
                <el-cascader v-model="selectCity" :options="cityDate"></el-cascader>
            </el-form-item>
            <el-form-item label="详细地址">
                <el-input placeholder="请填写地址信息" v-model="addressVal"></el-input>
            </el-form-item>
        </el-form>
        <span slot="footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
    </el-dialog>
</template>

<script>
import cityDate from '../../../common/citydata.js'

export default {

    data() {
        return {
            dialogVisible: false,
            selectCity: '',  // 级联选择器选中的节点
            cityDate,  // 省份数据
            addressVal: ''  // 双向绑定文本框值
        }
    },
    mounted() {
        this.$bus.$on('editClick', orderInfo => {
            this.dialogVisible = true
        })
    },
    methods: {
        // 监听对话框的关闭事件
        close() {
            this.selectCity = ''
            this.addressVal = ''
        }
    },
};
</script>

<style scoped>
.el-cascader {
    width: 100%;
}
</style>
