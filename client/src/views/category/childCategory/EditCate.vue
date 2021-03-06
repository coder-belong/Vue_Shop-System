<template>
    <el-dialog title="修改分类名称" :visible.sync="dialogVisible" @close="close">
        <!-- 编辑分类表单区域 -->
        <el-form
            :model="editCateForm"
            label-width="auto"
            :rules="editCateFormRule"
            ref="editCateForm"
        >
            <el-form-item label="分类名称" prop="cat_name">
                <el-input v-model="editCateForm.cat_name"></el-input>
            </el-form-item>
        </el-form>
        <span slot="footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="confirm">确 定</el-button>
        </span>
    </el-dialog>
</template>

<script>

import { getCateID, editCate } from '../../../network/category.js'
import { toast } from '../../../common/tool'

export default {
    data() {
        return {
            dialogVisible: false, // 控制对话框的显示与隐藏

            editCateForm: {  // 编辑分类表单的数据对象
                cat_name: '', // 分类名称
                cat_id: ''  // 分类id
            },

            // 编辑分类表单的规则验证对象
            editCateFormRule: {
                cat_name: [
                    { required: true, message: '请输入分类名称', trigger: 'blur' },
                    { min: 2, max: 7, message: '分类名称长度在 2 到 7 个字符', trigger: 'blur' }
                ]
            }
        }
    },
    mounted() {
        // 监听编辑按钮的点击事件
        this.$bus.$on('editCateClick', async (id) => {
            // 1. 根据id查询分类数据
            let { data } = await getCateID(id)
            // 2. 将编辑的分类名称展示到表单上
            this.editCateForm.cat_name = data.cat_name
            this.editCateForm.cat_id = id
            // 3. 展示对话框
            this.dialogVisible = true
        })
    },
    methods: {
        // 对话框的提交按钮
        confirm() {
            this.$refs.editCateForm.validate(async validate => {
                // 1. 检验表单填写是否合法
                if (!validate) return toast('请输入合法的分类名称', 'warning')
                // 2. 发送网络请求，更新分类名称
                let { cat_id, cat_name } = this.editCateForm
                let { meta, data } = await editCate(cat_id, cat_name)
                if (meta.status != 200) return toast('更新分类名称失败', 'error')
                // 3. 发射事件，让父组件更新分类列表数据
                this.$emit('updateCate')
                // 4. 吐司提示弹窗
                toast('更新分类名称成功', 'success')
                // 5. 关闭对话框
                this.dialogVisible = false
            })
        },
        // 监听对话框的关闭
        close() {
            // 清空表单数据
            this.$refs.editCateForm.resetFields()
        }
    },
};
</script>

<style scoped>
</style>
