<template>
    <!-- 基本信息的表单 -->
    <el-form
        label-width="100px"
        :rules="baseInfoFormRules"
        ref="baseInfoForm"
        :model="baseInfoForm"
    >
        <el-form-item label="商品名称" prop="goods_name">
            <el-input v-model="baseInfoForm.goods_name"></el-input>
        </el-form-item>

        <el-form-item label="商品价格" prop="goods_price">
            <el-input v-model.number="baseInfoForm.goods_price"></el-input>
        </el-form-item>

        <el-form-item label="商品重量" prop="goods_weight">
            <el-input v-model.number="baseInfoForm.goods_weight"></el-input>
        </el-form-item>

        <el-form-item label="商品数量" prop="goods_number">
            <el-input v-model.number="baseInfoForm.goods_number"></el-input>
        </el-form-item>

        <!-- 警告提示框 -->
        <el-alert title="注意：只能选择三级分类!" show-icon :closable="false" type="warning"></el-alert>

        <el-form-item label="商品分类" prop="goods_cat">
            <!-- 级联选择器 -->
            <el-cascader
                v-model="baseInfoForm.goods_cat"
                :options="cateList"
                :props="cascaderProps"
                @change="handleChange"
                clearable
            ></el-cascader>
        </el-form-item>
    </el-form>
</template>

<script>
import { getCategoryData } from '../../../network/category.js'

export default {
    data() {
        return {
            cateList: [],  // 分类列表数据

            // 基本信息表单数据对象
            baseInfoForm: {
                goods_name: '',  // 商品名称
                goods_price: '',  // 商品价格
                goods_weight: '',  // 商品重量
                goods_number: '',  // 商品数量
                goods_cat: [],  // 商品分类(级联选择器选中的节点)
            },

            // 级联选择器配置
            cascaderProps: {
                expandTrigger: 'hover',
                value: 'cat_id',
                label: 'cat_name',
            },

            // 基本信息表单验证对象
            baseInfoFormRules: {
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
                goods_cat: [
                    { required: true, message: '请选择商品分类，只能选择三级分类', trigger: 'blur' }
                ],
            }
        }
    },
    mounted() {
        // 调用方法，获取分类数据
        this.get_CategoryData()
    },
    methods: {
        /* 事件监听相关 */
        // 监听级联选择器的选中
        handleChange(val) {
            // 将选中的节点id值，赋值到表单数据对象下
            this.baseInfoForm.goods_cat = val
            // 向父组件发射事件，让父组件根据级联选择器选中节点来判断是否需要跳转标签页
            this.$emit('handleChange', this.baseInfoForm.goods_cat)
        },


        /* 网络请求相关 */
        // 获取分类列表数据
        async get_CategoryData() {
            let { data } = await getCategoryData()
            this.cateList = data
        },

    },
};
</script>

<style scoped>
.el-alert {
    margin-bottom: 15px;
}
</style>
