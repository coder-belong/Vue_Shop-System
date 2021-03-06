<template>
    <el-dialog title="参数编辑" :visible.sync="dialogVisible" @close="close">
        <!-- 编辑表单内容区域 -->
        <el-form label-width="auto" :model="editForm" :rules="editFormRule" ref="editForm">
            <el-form-item label="参数名称" prop="name">
                <el-input v-model="editForm.name"></el-input>
            </el-form-item>
        </el-form>
        <span slot="footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="confirm">确 定</el-button>
        </span>
    </el-dialog>
</template>

<script>
import { findParams, editParams } from '../../../network/param.js'
import { toast } from '../../../common/tool'

export default {
    data() {
        return {
            dialogVisible: false,  // 控制对话框的显示与隐藏
            editForm: {  // 编辑表单的数据对象
                name: '',  // 参数名称
                cat_id: '',  // 分类id
                attr_id: '',  // 参数id
                attr_sel: '', // 参数分类
            },

            editFormRule: { // 编辑表单的校验规则对象   
                name: [
                    { required: true, message: '请输入参数名称', trigger: 'blur' },
                    { min: 2, max: 12, message: '长度在 2 到 12 个字符', trigger: 'blur' }
                ],
            }
        }
    },
    mounted() {
        this.$bus.$on('editParamClick', async paramInfo => {
            // 1. 初始化参数数据
            let { cat_id, attr_id, attr_sel } = paramInfo
            this.editForm.cat_id = cat_id
            this.editForm.attr_id = attr_id
            this.editForm.attr_sel = attr_sel

            // 2. 发送网络请求，获取参数名称
            let { data } = await findParams(cat_id, attr_id, attr_sel)
            // 3. 将参数名称赋值到表单双向绑定的数据上
            this.editForm.name = data.attr_name
            // 4. 展示对话框
            this.dialogVisible = true
        })
    },

    
    methods: {
        // 监听确定按钮的点击
        confirm() {
            this.$refs.editForm.validate(async validate => {
                // 1. 校验表单
                if (!validate) return toast('请填写正确的参数名称', 'error')
                // 2. 发送网络请求，修改参数名称
                let { name, cat_id, attr_id, attr_sel } = this.editForm
                let { meta } = await editParams(cat_id, attr_id, name, attr_sel)
                if (meta.status !== 200) return toast('修改参数名称失败', 'error')
                toast('修改参数名称成功', 'success')
                // 3. 让父组件重新更新参数列表数据
                this.$emit('updateParam')
                // 4. 关闭对话框
                this.dialogVisible = false
            })
        },
        // 监听对话框的关闭
        close() {
            // 清空表单数据
            this.$refs.editForm.resetFields()
        }
    },
};
</script>

<style scoped>
</style>
