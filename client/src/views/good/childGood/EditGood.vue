<template>
    <el-dialog title="编辑商品" :visible.sync="dialogVisible" @close="close">
        <el-form label-width="100px" :rules="editFormRules" ref="editForm" :model="editForm">
            <el-form-item label="商品名称" prop="goods_name">
                <el-input v-model="editForm.goods_name"></el-input>
            </el-form-item>

            <el-form-item label="商品价格" prop="goods_price">
                <el-input v-model.number="editForm.goods_price"></el-input>
            </el-form-item>

            <el-form-item label="商品重量" prop="goods_weight">
                <el-input v-model.number="editForm.goods_weight"></el-input>
            </el-form-item>

            <el-form-item label="商品数量" prop="goods_number">
                <el-input v-model.number="editForm.goods_number"></el-input>
            </el-form-item>

        </el-form>
        <span slot="footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="confirm">确 定</el-button>
        </span>
    </el-dialog>
</template>

<script>
import { getIDGoods, editGoods } from '../../../network/goods.js'
import { toast } from '../../../common/tool'

export default {
    data() {
        return {
            dialogVisible: false, // 控制对话框的显示与隐藏
            editForm: {  // 编辑商品表单的数据对象
                goods_name: '',  // 商品名称
                goods_price: 0,  // 商品价格
                goods_weight: 0,  // 商品重量
                goods_number: 0,  // 商品数量
                goods_id: '',  // 商品id
                goods_cat: ''  // 商品分类
            },
            // 编辑商品表单校验规则对象
            editFormRules: {
                goods_name: [
                    { required: true, message: '请输入商品名称', trigger: 'blur' },
                ],
                goods_price: [
                    { required: true, message: '请输入商品价格', trigger: 'blur' },
                    { type: 'number', message: '商品价格只能为数字', trigger: 'blur' }
                ],
                goods_weight: [
                    { required: true, message: '请输入商品重量', trigger: 'blur' },
                    { type: 'number', message: '商品重量只能为数字', trigger: 'blur' }
                ],
                goods_number: [
                    { required: true, message: '请输入商品数量', trigger: 'blur' },
                    { type: 'number', message: '商品数量只能为数字', trigger: 'blur' }
                ],
            },
        }
    },
    mounted() {
        this.$bus.$on('editGoodsClick', async goodInfo => {
            // 根据商品id查询商品数据
            let { data, meta } = await getIDGoods(goodInfo.goods_id)
            this.editForm = data
            // 展示对话框
            this.dialogVisible = true
        })
    },
    methods: {
        // 监听确定按钮的点击
        confirm() {
            this.$refs.editForm.validate(async validate => {
                // 1. 校验表单是否填写合法
                if (!validate) return toast('请输入合法的表单数据', 'error')
                // 2. 发送网络请求，提交编辑商品
                let { data, meta } = await editGoods(this.editForm.goods_id, this.editForm)
                // console.log(meta);
                if (meta.status !== 200) return toast('修改商品数据失败', 'error')
                // 3. 发射事件，让父组件重新获取商品列表
                this.$emit('updateGoods')
                // 4. 吐司弹窗提示
                toast('修改商品数据成功', 'success')
                // 5. 关闭对话框
                this.dialogVisible = false
            })
        },
        // 监听表单的关闭
        close() {
            // 重置表单数据
            this.$refs.editForm.resetFields()
        },
    },
};
</script>

<style scoped>
</style>
