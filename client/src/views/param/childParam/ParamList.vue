<template>
    <!-- 参数列表的表格内容 -->
    <el-table :data="paramList" border>
        <el-table-column type="expand" label="查看详情" width="80">
            <!-- 参数可选项区域 -->
            <template v-slot="scope">
                <!-- 参数可选项标签 -->
                <el-tag
                    v-for="(items, index) in scope.row.attr_vals"
                    :key="items.attr_id"
                    closable
                    @close="closeTag(scope.row, index)"
                >{{ items }}</el-tag>
                <!-- 文本框 -->
                <el-input
                    v-show="scope.row.inputVisible"
                    v-model="scope.row.inputVal"
                    ref="input"
                    @keyup.enter.native="inputConfirm(scope.row)"
                    @blur="inputConfirm(scope.row)"
                    closable
                ></el-input>
                <!-- 添加可选项按钮 -->
                <el-button
                    v-show="!scope.row.inputVisible"
                    size="small"
                    @click="showInput(scope.row)"
                >+ New Tag</el-button>
            </template>
        </el-table-column>
        <el-table-column type="index" label="#" width="110"></el-table-column>
        <el-table-column prop="attr_name" label="参数名称"></el-table-column>
        <el-table-column label="操作">
            <template v-slot="scope">
                <!-- 编辑按钮 -->
                <el-button
                    round
                    type="primary"
                    size="mini"
                    icon="el-icon-edit"
                    @click="editParamClick(scope.row)"
                >编辑</el-button>
                <!-- 删除按钮 -->
                <el-button
                    round
                    type="danger"
                    size="mini"
                    icon="el-icon-delete"
                    @click="deleteParamClick(scope.row)"
                >删除</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
import { deleteParams, editParams } from '../../../network/param.js'
import { toast } from '../../../common/tool'
import Vue from 'vue'

export default {
    props: {
        paramList: Array  // 参数列表数据
    },

    methods: {
        // 监听删除按钮的点击
        deleteParamClick(paramInfo) {
            this.$confirm('此操作将永久删除该参数, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(async () => {
                let { attr_id, cat_id } = paramInfo
                let { meta } = await deleteParams(cat_id, attr_id)
                if (meta.status !== 200) return toast('删除失败', 'error')
                toast('删除成功', 'success')
                this.$emit('updateParam')
            }).catch(() => {
                toast('已取消删除操作', 'info')
            });

        },
        // 监听编辑按钮的点击事件
        editParamClick(paramInfo) {
            this.$bus.$emit('editParamClick', paramInfo)
        },

        // 监听+ New Tag按钮的点击
        showInput(row) {
            // 展示当前行的文本框
            row.inputVisible = true;
            this.$nextTick(() => {
                // 让文本框自动获取焦点，需要等待下次DOM更新完成之后调用
                this.$refs.input.$refs.input.focus();
            })
        },

        // 监听文本框的键盘enter按压，以及文本框失去焦点
        async inputConfirm(row) {
            if (row.inputVal) {  // 判断表单中是否有值
                // 将表单输入的值加入到参数可选项的数组中以便于前端视图更新
                row.attr_vals.push(row.inputVal)
                // 1. 发送网络请求，添加参数可选项  
                let { cat_id, attr_id, attr_name, attr_sel, attr_vals } = row
                // 2. 将数组拼接成字符串返回给服务器
                let { meta } = await editParams(cat_id, attr_id, attr_name, attr_sel, row.attr_vals.join(','))
                if (meta.status !== 200) return toast('更新参数可选项失败', 'error')
                toast('更新参数可选项成功', 'success')
            }

            // 关闭当前行的文本框
            row.inputVisible = false;
            // 清空当前行的表单数据
            row.inputVal = ''
        },

        // 监听标签的关闭
        async closeTag(row, i) {
            // 根据索引删除指定的参数可选项
            Vue.delete(row.attr_vals, i)


            // 1. 发送网络请求，删除参数可选项  
            let { cat_id, attr_id, attr_name, attr_sel, attr_vals } = row
            // 2. 将数组拼接成字符串返回给服务器
            let { meta } = await editParams(cat_id, attr_id, attr_name, attr_sel, row.attr_vals.join(','))
            if (meta.status !== 200) return toast('删除参数可选项失败', 'error')
            toast('删除参数可选项成功', 'success')
        }
    }
};
</script>

<style scoped>
.el-tag {
    margin: 0 12px 12px 0;
}

.el-input {
    width: 82px;
}
</style>
