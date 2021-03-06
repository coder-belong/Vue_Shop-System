<template>
    <el-dialog :title="showTitle" :visible.sync="dialogVisible" @close="close">
        <!-- 表单区域内容 -->
        <el-form label-width="auto" :model="addForm" :rules="addFormRule" ref="addForm">
            <el-form-item :label="showLabel" prop="name">
                <el-input v-model="addForm.name"></el-input>
            </el-form-item>
        </el-form>
        <span slot="footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="confirm">确 定</el-button>
        </span>
    </el-dialog>
</template>

<script>
import { addParams } from '../../../network/param.js'
import { toast } from '../../../common/tool'

export default {
    data() {
        return {
            activeName: '', // 当前处于活跃的标签页
            cateID: '',  // 当前级联选择器选中的分类id
            dialogVisible: false,  // 控制对话框的显示与隐藏

            addForm: {  // 表单数据对象
                name: ''  // 添加的参数/属性名称
            },

            addFormRule: {  // 表单验证规则对象
                name: [
                    { required: true, message: '请输入名称', trigger: 'blur' },
                    { min: 2, max: 12, message: '长度在 2 到 12 个字符', trigger: 'blur' }
                ],
            }
        }
    },

    methods: {
        // 监听确认按钮的点击事件
        confirm() {
            this.$refs.addForm.validate(async validate => {
                // 1. 判断表单是否正确填写
                if (!validate) return toast('请输入正确的名称', 'error')
                // 2. 发送网路请求添加参数
                let { meta } = await addParams(this.cateID, this.activeName, this.addForm.name)
                if (meta.status !== 201) return toast('添加失败，请稍后重试', 'error')
                toast('参数添加成功', 'success')
                // 3. 向父组件发射事件，让父组件更新分类参数列表
                this.$emit('updateParam')
                // 4. 关闭对话框
                this.dialogVisible = false
            })
        },

        // 监听对话框的关闭事件
        close() {
            // 清空表单数据
            this.addForm.name = ''
        }
    },
    computed: {
        showTitle() {
            return this.activeName === "many" ? '添加参数' : '添加属性'
        },
        showLabel() {
            return this.activeName === "many" ? '参数名称' : '属性名称'
        }
    },
};
</script>

<style scoped>
</style>
