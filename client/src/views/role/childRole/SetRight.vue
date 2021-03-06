<template>
    <el-dialog title="分配角色权限" :visible.sync="dialogVisible" width="40%" @close="close">
        <el-tree
            :data="rightList"
            :props="defaultProps"
            show-checkbox
            node-key="id"
            default-expand-all
            :default-checked-keys="defKeys"
            ref="rightsTree"
        ></el-tree>
        <span slot="footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="confirm">确 定</el-button>
        </span>
    </el-dialog>
</template>

<script>
import { getRightList, updateRight } from '../../../network/role.js'
import { toast } from '../../../common/tool'

export default {
    data() {
        return {
            dialogVisible: false,  // 控制对话框的显示与隐藏
            rightList: [],  // 存储所有的权限列表,同时也是树形控件的数据源
            // 树形控件的配置选项
            defaultProps: {
                label: 'authName',   // 指定数据源中的文本数据的属性名
                children: 'children',  // 指定数据源中子级数据的属性名
            },
            defKeys: [], // 存储默认选中的树节点id值
            roleID: '', // 存储当前角色的id
        }
    },
    mounted() {
        // 监听分配权限的点击事件
        this.$bus.$on('SetRightClick', (roleInfo) => {
            // 1. 获取当前角色所拥有的三级权限id
            this.getDefKeys(roleInfo)
            // 2. 必须等DOM渲染完成后在重新更新选中的节点数组
            this.$nextTick(() => {  
                this.$refs.rightsTree && this.$refs.rightsTree.setCheckedKeys(this.defKeys);
            });
            // 3. 获取当前角色的id
            this.roleID = roleInfo.id
            // 4. 展示对话框
            this.dialogVisible = true

            
        })
        // 获取所有权限列表数据
        this.get_RightList()
    },
    methods: {
        // 事件监听相关方法
        // 通过递归函数，获取当前角色所拥有的三级权限id
        getDefKeys(node) {
            if (!node.children) {  // 递归函数结束条件
                return this.defKeys.push(node.id)
            }
            node.children.forEach(items => {
                this.getDefKeys(items)
            })
        },

        // 关闭对话框事件
        close() {
            // 清空默认选中的节点数组
            this.defKeys = []
        },

        // 对话框中点击确定按钮事件
        async confirm() {
            // 获取当前被选中的节点id值，以及半选中的节点id值
            let key = [
                ...this.$refs.rightsTree.getCheckedKeys(),
                ...this.$refs.rightsTree.getHalfCheckedKeys()
            ]
            // 配置请求参数
            let rightID = key.join(',')
            // 1. 发送网络请求更新角色权限
            let { data, meta } = await updateRight(this.roleID, rightID)
            if (meta.status != 200) return toast('更新角色权限失败', 'error')
            // 2. 关闭对话框
            this.dialogVisible = false
            // 3. 更新角色列表数据
            this.$emit('upDateRole')
            // 4. 吐司弹窗
            toast('更新权限成功', 'success')
        },

        // 网络请求相关
        // 请求所有权限列表，以树形的数据结构
        async get_RightList() {
            let { data, meta } = await getRightList()
            if (meta.status != 200) return toast('获取角色权限失败', 'error')
            this.rightList = data
        },
    },
};

</script>

<style scoped>
</style>
