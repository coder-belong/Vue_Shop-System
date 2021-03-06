<template>
    <div>
        <!-- 面包屑导航区域 -->
        <add-goods-nav-bar :navBarItem="['首页', '商品列表', '添加商品']" />
        <!-- 卡片视图区域 -->
        <el-card>
            <!-- 警告提示 -->
            <el-alert title="添加商品信息" type="info" center show-icon :closable="false"></el-alert>
            <!-- 步骤条区域 -->
            <el-steps :active="+activeName" finish-status="success" align-center>
                <el-step title="基本信息"></el-step>
                <el-step title="商品参数"></el-step>
                <el-step title="商品属性"></el-step>
                <el-step title="商品图片"></el-step>
                <el-step title="商品内容"></el-step>
                <el-step title="完成"></el-step>
            </el-steps>
            <!-- 标签页区域 -->
            <el-tabs tab-position="left" v-model="activeName" :before-leave="tabPaneChange">
                <el-tab-pane label="基本信息" name="0">
                    <!-- 基本信息的标签页内容 -->
                    <base-info @handleChange="handleChange" ref="baseInfo" />
                </el-tab-pane>

                <el-tab-pane label="商品参数" name="1">
                    <!-- 商品参数的标签页内容 -->
                    <good-param :manyParam="paramList.manyParam" />
                </el-tab-pane>

                <el-tab-pane label="商品属性" name="2">
                    <!-- 商品属性的标签页内容 -->
                    <good-prop :onlyParam="paramList.onlyParam" />
                </el-tab-pane>
                <el-tab-pane label="商品图片" name="3">
                    <!-- 商品图片的标签页内容 -->
                    <good-img ref="goodImg" />
                </el-tab-pane>
                <el-tab-pane label="商品内容" name="4">
                    <!-- 商品内容的标签页内容 -->
                    <good-content :addGood="addGood" ref="addGood" />
                </el-tab-pane>
            </el-tabs>
        </el-card>
    </div>
</template>

<script>
import BaseInfo from './childAddGoods/BaseInfo'
import GoodParam from './childAddGoods/GoodParam'
import GoodProp from './childAddGoods/GoodProp'
import GoodImg from './childAddGoods/GoodImg'
import GoodContent from './childAddGoods/GoodContent'

import AddGoodsNavBar from '../../components/breadNav/BreadNavBar'
import { toast } from '../../common/tool'
import { getParams } from '../../network/param'
import { addGoods, addGoodInfo } from '../../network/goods'



export default {
    components: {
        BaseInfo,
        GoodParam,
        GoodProp,
        GoodImg,
        AddGoodsNavBar,
        GoodContent
    },
    data() {
        return {
            activeName: '0',  // 当前处于活跃的标签页，值为tab-pane标签中的name值
            selectCate: [],  // 存储级联选择器选中的节点分类id

            paramList: {  // 存储分类参数
                manyParam: [],  // 动态参数列表数据
                onlyParam: [],  // 静态属性列表数据
            },

            // 整合添加商品携带的参数
            addGoodData: {
                goods_name: '',
                goods_cat: '',
                goods_price: 0,
                goods_number: 0,
                goods_weight: 0,
                goods_introduce: '',
                pics: [],
                attrs: []
            }
        }
    },
    methods: {
        /* 事件监听相关 */
        // 监听标签页的切换
        tabPaneChange() {
            // 如果没有选中三级分类，则不允许标签页跳转
            if (this.selectCate.length !== 3) {
                toast('请选择三级分类', 'warning')
                return false
            }
        },

        // 监听级联选择器的选中
        handleChange(val) {
            this.selectCate = val
            // 根据分类id获取参数(动态参数和静态属性)
            this.get_Params(this.cateID)
        },

        // 监听商品内容中的添加商品的按钮点击
        addGood() {
            // 验证基本信息的表单是否输入合法
            this.$refs.baseInfo.$refs.baseInfoForm.validate(async validate => {
                // 1. 校验基本基本信息表单是否合法
                if (!validate) return toast('商品基本信息必须填写，请回到第一步填写基本信息', 'error')
                 // 2. 初始化添加商品的数据
                this.addGoodData = new addGoodInfo(this.$refs.baseInfo.baseInfoForm, this.$refs.addGood, this.$refs.goodImg, this.paramList)

                // 3. 发送网络请求，添加商品
                let { meta } = await addGoods(this.addGoodData)
                if (meta.status !== 201) return toast('添加商品失败', 'error')
                // 4. 吐司弹窗信息
                toast('添加商品成功', 'success')
                // 5. 跳转到商品列表路由
                this.$router.push('/home/goods')

                console.log(this.addGoodData);
            })
        },


        /* 网络请求相关 */
        // 获取分类参数
        async get_Params(id) {
            let { data: manyParam } = await getParams(id, 'many')
            let { data: onlyParam } = await getParams(id, 'only')

            // 将分类的动态参数中的可选项转换为数组类型
            manyParam && manyParam.forEach(items => {
                items.attr_vals = items.attr_vals ? items.attr_vals.split(',') : []
            })

            // // 将分类的静态属性中的可选项转换为数组类型
            // onlyParam.forEach(items => {
            //     items.attr_vals = items.attr_vals ? items.attr_vals.split(',') : []
            // })

            this.paramList.manyParam = manyParam
            this.paramList.onlyParam = onlyParam
            // console.log(this.paramList);
        }
    },

    computed: {
        // 获取分类id
        cateID() {
            return this.selectCate[this.selectCate.length - 1]
        }
    }
};
</script>

<style scoped>
.el-steps {
    margin: 30px 0;
}
</style>
