<template>
    <div>
        <el-upload
            :action="uploadURL"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :on-success="handleSuccess"
            list-type="picture"
            :headers="headers"
            multiple
        >
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>

        <!-- 点击图片展示的对话框 -->
        <el-dialog title="图片预览" :visible.sync="dialogVisible">
            <img :src="imgSrc">
        </el-dialog>
    </div> 
</template>

<script>
import { toast } from '../../../common/tool.js'

export default {
    data() {
        return {
            uploadURL: 'http://127.0.0.1:8888/api/private/v1/upload', // 图片上传的URL地址
            headers: {  // 上传图片发送网络请求的请求头配置
                Authorization: window.sessionStorage.getItem('userID')
            },


            imgSrc: '',  // 控制预览图片对话框中的图片路径
            dialogVisible: false, // 控制对话框的显示与隐藏
            goods_pics: [],  // 存储上传图片的相对路径
        }
    },
    methods: {
        // 监听图片的点击
        handlePreview(file) {
            let { data } = file.response
            // 1. 将当前点击图片的URL值赋值到imgSrc上
            this.imgSrc = data.url
            // 2. 展示对话框
            this.dialogVisible = true
        },
        // 监听图片的移除
        handleRemove(file, fileList) {
            let { tmp_path } = file.response.data
            // 1. 获取删除图片的相对路径在goods_pics下的索引值
            let index = this.goods_pics.findIndex(items => items.pic === tmp_path)
            // 2. 根据索引值，删除数组中指定的元素
            this.goods_pics.splice(index, 1)
            // 3. 吐司弹窗信息
            toast('图片删除成功', 'success')
            console.log(this.goods_pics);
        },

        // 图片上传成功后的钩子
        handleSuccess(response, file, fileList) {
            let { data, meta } = response
            if (meta.status !== 200) return toast('图片上传失败', 'error')
            // 1. 将上传成功的图片的相对路径追加到goods_pics数组中
            this.goods_pics.push({
                pic: data.tmp_path
            })
            // 2. 吐司弹窗信息
            toast('图片上传成功', 'success')
        }
    },
};
</script>

<style scoped>
.el-dialog img {
    width: 100%;
    height: 100%;
}
</style>
