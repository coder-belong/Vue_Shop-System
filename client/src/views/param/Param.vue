<template>
    <div>
        <!-- 分类参数的面包屑导航栏 -->
        <param-nav-bar :navBarItem="['首页', '商品管理', '分类参数' ]" />

        <!-- 卡片区域 -->
        <el-card>
            <!-- 警告提示区域 -->
            <el-alert title="注意：只允许为第三级分类设置相关参数！" type="warning" :closable="false" show-icon></el-alert>

            <!-- 级联选择器区域 -->
            <el-row>
                <span>选择三级分类：</span>
                <el-cascader
                    v-model="cascaderValue"
                    :options="cateList"
                    :props="cascaderProps"
                    @change="SelectCate"
                ></el-cascader>
            </el-row>

            <!-- 标签页区域 -->
            <el-tabs v-model="activeName">
                <!-- 动态参数的标签页 -->
                <el-tab-pane label="动态参数" name="many">
                    <!-- 动态参数标签页的内容区域 -->
                    <el-button
                        type="primary"
                        size="mini"
                        :disabled="disabled"
                        @click="addParam"
                    >添加参数</el-button>

                    <!-- 表格内容区域 -->
                    <param-list :paramList="paramList.manyList" @updateParam="updateParam" />
                </el-tab-pane>

                <!-- 静态属性的标签页 -->
                <el-tab-pane label="静态属性" name="only">
                    <!-- 静态属性标签页的内容区域  -->
                    <el-button
                        type="primary"
                        size="mini"
                        :disabled="disabled"
                        @click="addParam"
                    >添加属性</el-button>

                    <!-- 表格内容区域 -->
                    <param-list :paramList="paramList.onlyList" @updateParam="updateParam" />
                </el-tab-pane>
            </el-tabs>
        </el-card>

        <!-- 添加参数/添加属性的对话框 -->
        <add-param ref="addParam" @updateParam="updateParam" />
        <!-- 编辑参数的对话框 -->
        <edit-param @updateParam="updateParam" />
    </div>
</template>

<script>
import ParamList from './childParam/ParamList'
import AddParam from './childParam/AddParam'
import EditParam from './childParam/EditParam'

import ParamNavBar from '../../components/breadNav/BreadNavBar'

import { getCategoryData } from '../../network/category'
import { getParams } from '../../network/param'

export default {
    components: {
        ParamNavBar,
        AddParam,
        ParamList,
        EditParam
    },
    data() {
        return {
            activeName: 'many',  // 当前处于活跃的标签页
            cateList: [],  // 分类列表

            cascaderValue: [],  // 级联选择器的双向绑定数据
            disabled: true,  // 控制按钮是否可用

            paramList: {  // 参数列表
                manyList: [],  // 动态参数列表
                onlyList: [],  // 静态属性列表
            },

            cascaderProps: {  // 级联选择器的配置对象
                expandTrigger: 'hover',
                value: 'cat_id',
                label: 'cat_name',
            }
        }
    },


    mounted() {
        // 获取分类列表数据，用于级联选择器展示
        this.get_CategoryData()
    },

    methods: {
        /* 事件监听相关 */
        /* 级联选择器被选择时触发的事件 */
        SelectCate(val) {
            // 禁用添加参数/添加属性按钮
            this.disabled = false
            // 发送网络请求，获取参数列表数据
            this.getParam()
        },

        // 监听添加按钮/添加属性的点击
        addParam() {
            // 获取当前标签页的类型
            this.$refs.addParam.activeName = this.activeName
            // 获取级联选择器下选中的分类id
            this.$refs.addParam.cateID = this.cascaderValue[this.cascaderValue.length - 1]
            // 展示添加参数的对话框
            this.$refs.addParam.dialogVisible = true
        },

        // 更新分类参数列表数据
        updateParam() {
            this.getParam()
        },


        /* 网络请求相关方法 */
        // 获取分类列表数据
        async get_CategoryData() {
            let { data, meta } = await getCategoryData()
            this.cateList = data
        },

        // 获取分类参数列表数据
        async getParam() {
            // 获取级联选择器选中的节点值
            let id = this.cascaderValue[this.cascaderValue.length - 1]
            // 发送网路请求，获取动态参数
            let { data: manyData } = await getParams(id, 'many')
            // 发送网路请求，获取静态属性
            let { data: onlyData } = await getParams(id, 'only')

            // 将参数可选项转换为数组      
            manyData.forEach(item => {
                // 控制文本框的展示
                item.inputVisible = false
                // 控制文本框双向绑定的值
                item.inputVal = ''
                // 如果可选项参数为空，那么直接返回一个空数组
                if (!item.attr_vals) return item.attr_vals = []
                // 根据字符串中的, 拼接成一个新数组
                item.attr_vals = item.attr_vals.split(',')
            })
            onlyData.forEach(item => {
                // 控制文本框的展示
                item.inputVisible = false
                // 控制文本框双向绑定的值
                item.inputVal = ''
                // 如果可选项参数为空，那么直接返回一个空数组
                if (!item.attr_vals) return item.attr_vals = []
                // 根据字符串中的, 拼接成一个新数组
                item.attr_vals = item.attr_vals.split(',')
            })

            // 将获取的参数列表数据赋值到date下
            this.paramList.manyList = manyData
            this.paramList.onlyList = onlyData

        },


    },
};
</script>

<style scoped>
.el-cascader {
    margin: 20px;
}
.el-table >>> .cell {
    text-align: center !important;
}
</style>
