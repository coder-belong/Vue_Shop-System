<template>
    <el-dialog title="添加分类" :visible.sync="dialogVisible" @close="close">
        <!-- 添加分类的表单 -->
        <el-form ref="addCateForm" :model="addCateForm" label-width="auto" :rules="addCateFormRule">
            <el-form-item label="分类名称" prop="cat_name">
                <el-input v-model="addCateForm.cat_name"></el-input>
            </el-form-item>
            <el-form-item label="父级分类">
                <!-- 级联选择器 -->
                <el-cascader
                    v-model="SelectCate"
                    :options="parentCate"
                    :props="cascaderOption"
                    @change="handleChange"
                    clearable
                ></el-cascader>
            </el-form-item>
        </el-form>
        <span slot="footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="confirm">确 定</el-button>
        </span>
    </el-dialog>
</template>

<script>
import { addCateList } from '../../../network/category.js'
import { toast } from '../../../common/tool'

export default {
    props: {
        parentCate: Array // 父级分类的数据列表
    },
    data() {
        return {
            dialogVisible: false,  // 控制对话框的展示与隐藏

            SelectCate: [],  // 存储选中的节点值

            addCateForm: {  // 添加分类的表单数据对象
                cat_name: '',  // 分类名称
                cat_pid: '',  // 分类id
                cat_level: 0,  // 分类层级
            },

            cascaderOption: {  // 级联选择器配置项
                expandTrigger: 'hover',  // 什么事件下展开二级节点内容
                checkStrictly: true,  // 是否可以只选中父节点
                value: 'cat_id',  // 指定数据源中节点绑定值的属性名
                label: 'cat_name',  // 指定数据源中节点要展示的内容的属性名
                children: 'children'  // 指定数据源中实现父子节点嵌套关系的属性名
            },

            addCateFormRule: {  // 添加分类的表单验证规则对象
                cat_name: [
                    { required: true, message: '请输入分类名称', trigger: 'blur' },
                    { min: 2, max: 7, message: '长度在 2 到 7 个字符', trigger: 'blur' }
                ]
            },
        }
    },

    methods: {
        // 选中级联选择器节点时会触发
        handleChange(selectNode) {
            // 获取选中的节点值
            this.SelectCate = selectNode
        },

        // 确定按钮的点击事件
        confirm() {
            // 如果选中的节点长度大于0，则说明有选中父级分类
            if (this.SelectCate.length > 0) {
                // 分类列表的层级
                this.addCateForm.cat_level = this.SelectCate.length
                // 父级分类的id
                this.addCateForm.cat_pid = this.SelectCate[this.SelectCate.length - 1]
                // 实现添加分类功能
                this.toAddCate()

                return
            }

            // 以下是没有选中任何节点，直接添加在根分类上的处理逻辑

            this.addCateForm.cat_level = 0 // 分类列表的层级
            this.addCateForm.cat_pid = 0  // 父级分类的id
            // 实现添加分类功能
            this.toAddCate()

        },

        // 发送添加分类的网络请求以及后续步骤的方法
        async toAddCate() {
            // 1. 发送网络请求，添加分类
            let { meta } = await addCateList(this.addCateForm)
            if (meta.status !== 201) return toast('添加分类失败', 'error')
            toast('添加分类成功', 'success')

            // 2. 发射事件，让父组件重新获取分类数据
            this.$emit('updateCate')

            // 3. 关闭对话框
            this.dialogVisible = false
        },

        // 对话框的关闭事件
        close() {
            // 清空分类表单数据
            this.$refs.addCateForm.resetFields()
            // 清空选中的节点值
            this.SelectCate = []
        }
    },
};
</script>

<style scoped>
.el-cascader {
    width: 100%;
}
</style>
