(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b21ae91a"],{1174:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},e._l(e.navBarItem,(function(t,r){return a("el-breadcrumb-item",{key:t,attrs:{to:{path:0===r?"/home":""}}},[e._v(e._s(t))])})),1)},n=[],i={props:{navBarItem:Array}},c=i,o=a("2877"),s=Object(o["a"])(c,r,n,!1,null,"aa4f3c02",null);t["a"]=s.exports},"11d0":function(e,t,a){"use strict";var r=a("9bc1"),n=a.n(r);n.a},"2e2d":function(e,t,a){"use strict";var r=a("4807"),n=a.n(r);n.a},"333e":function(e,t,a){"use strict";var r=a("6612"),n=a.n(r);n.a},4807:function(e,t,a){},6612:function(e,t,a){},"9bc1":function(e,t,a){},b050:function(e,t,a){"use strict";a.d(t,"e",(function(){return n})),a.d(t,"a",(function(){return i})),a.d(t,"d",(function(){return c})),a.d(t,"c",(function(){return o})),a.d(t,"b",(function(){return s}));var r=a("1bab");function n(e){return Object(r["a"])({url:"/categories",params:e})}function i(e){return Object(r["a"])({url:"/categories",method:"post",data:e})}function c(e){return Object(r["a"])({url:"/categories/".concat(e)})}function o(e,t){return Object(r["a"])({url:"/categories/".concat(e),method:"put",data:{cat_name:t}})}function s(e){return Object(r["a"])({url:"/categories/".concat(e),method:"delete"})}},bb51:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("category-nav-bar",{attrs:{navBarItem:["首页","商品管理","商品分类"]}}),a("el-card",[a("el-button",{attrs:{type:"primary"},on:{click:e.addCateClick}},[e._v("添加分类")]),a("category-list",{staticClass:"category-list",attrs:{categoryList:e.categoryList},on:{updateCate:e.updateCate}}),a("el-pagination",{attrs:{"current-page":e.queryInfo.pagenum,"page-sizes":[3,5,10,30],"page-size":e.queryInfo.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),a("add-cate",{ref:"addCate",attrs:{parentCate:e.parentCate},on:{updateCate:e.updateCate}}),a("edit-cate",{on:{updateCate:e.updateCate}})],1)},n=[],i=(a("96cf"),a("1da1")),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("tree-table",{attrs:{data:e.categoryList,columns:e.columns,"selection-type":!1,"expand-type":!1,"show-index":"","index-text":"#",border:"","show-row-hover":!1},scopedSlots:e._u([{key:"isok",fn:function(e){return[a("i",{directives:[{name:"show",rawName:"v-show",value:e.row.cat_deleted,expression:"scope.row.cat_deleted"}],staticClass:"el-icon-circle-close"}),a("i",{directives:[{name:"show",rawName:"v-show",value:!e.row.cat_deleted,expression:"!scope.row.cat_deleted"}],staticClass:"el-icon-circle-check"})]}},{key:"sort",fn:function(t){return[a("el-tag",{directives:[{name:"show",rawName:"v-show",value:0===t.row.cat_level,expression:"scope.row.cat_level === 0"}],attrs:{size:"small"}},[e._v("一级列表")]),a("el-tag",{directives:[{name:"show",rawName:"v-show",value:1===t.row.cat_level,expression:"scope.row.cat_level === 1"}],attrs:{type:"warning",size:"small"}},[e._v("二级列表")]),a("el-tag",{directives:[{name:"show",rawName:"v-show",value:2===t.row.cat_level,expression:"scope.row.cat_level === 2"}],attrs:{type:"danger",size:"small"}},[e._v("三级列表")])]}},{key:"operation",fn:function(t){return[a("el-button",{attrs:{type:"primary",icon:"el-icon-edit",round:"",size:"mini"},on:{click:function(a){return e.editCateClick(t.row.cat_id)}}},[e._v("编辑")]),a("el-button",{attrs:{type:"danger",icon:"el-icon-delete",round:"",size:"mini"},on:{click:function(a){return e.deleteCateClick(t.row.cat_id)}}},[e._v("删除")])]}}])})},o=[],s=a("b050"),l=a("25b1"),u={props:{categoryList:Array},data:function(){return{columns:[{label:"分类名称",prop:"cat_name"},{label:"是否有效",type:"template",template:"isok"},{label:"排序",type:"template",template:"sort"},{label:"操作",type:"template",template:"operation"}]}},methods:{editCateClick:function(e){this.$bus.$emit("editCateClick",e)},deleteCateClick:function(e){var t=this;this.$confirm("此操作将永久删除该分类, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(i["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(s["b"])(e);case 2:if(r=a.sent,n=r.meta,200===n.status){a.next=6;break}return a.abrupt("return",Object(l["b"])("删除分类失败,请稍后重试","error"));case 6:t.$emit("updateCate"),Object(l["b"])("删除分类成功","success");case 8:case"end":return a.stop()}}),a)})))).catch((function(){Object(l["b"])("已取消删除操作","info")}))}}},d=u,m=(a("11d0"),a("2877")),p=Object(m["a"])(d,c,o,!1,null,"2d555b1c",null),f=p.exports,b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"添加分类",visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t},close:e.close}},[a("el-form",{ref:"addCateForm",attrs:{model:e.addCateForm,"label-width":"auto",rules:e.addCateFormRule}},[a("el-form-item",{attrs:{label:"分类名称",prop:"cat_name"}},[a("el-input",{model:{value:e.addCateForm.cat_name,callback:function(t){e.$set(e.addCateForm,"cat_name",t)},expression:"addCateForm.cat_name"}})],1),a("el-form-item",{attrs:{label:"父级分类"}},[a("el-cascader",{attrs:{options:e.parentCate,props:e.cascaderOption,clearable:""},on:{change:e.handleChange},model:{value:e.SelectCate,callback:function(t){e.SelectCate=t},expression:"SelectCate"}})],1)],1),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.confirm}},[e._v("确 定")])],1)],1)},h=[],g={props:{parentCate:Array},data:function(){return{dialogVisible:!1,SelectCate:[],addCateForm:{cat_name:"",cat_pid:"",cat_level:0},cascaderOption:{expandTrigger:"hover",checkStrictly:!0,value:"cat_id",label:"cat_name",children:"children"},addCateFormRule:{cat_name:[{required:!0,message:"请输入分类名称",trigger:"blur"},{min:2,max:7,message:"长度在 2 到 7 个字符",trigger:"blur"}]}}},methods:{handleChange:function(e){this.SelectCate=e},confirm:function(){if(this.SelectCate.length>0)return this.addCateForm.cat_level=this.SelectCate.length,this.addCateForm.cat_pid=this.SelectCate[this.SelectCate.length-1],void this.toAddCate();this.addCateForm.cat_level=0,this.addCateForm.cat_pid=0,this.toAddCate()},toAddCate:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(s["a"])(this.addCateForm);case 2:if(t=e.sent,a=t.meta,201===a.status){e.next=6;break}return e.abrupt("return",Object(l["b"])("添加分类失败","error"));case 6:Object(l["b"])("添加分类成功","success"),this.$emit("updateCate"),this.dialogVisible=!1;case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),close:function(){this.$refs.addCateForm.resetFields(),this.SelectCate=[]}}},C=g,v=(a("2e2d"),Object(m["a"])(C,b,h,!1,null,"5ca83c4f",null)),_=v.exports,w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"修改分类名称",visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t},close:e.close}},[a("el-form",{ref:"editCateForm",attrs:{model:e.editCateForm,"label-width":"auto",rules:e.editCateFormRule}},[a("el-form-item",{attrs:{label:"分类名称",prop:"cat_name"}},[a("el-input",{model:{value:e.editCateForm.cat_name,callback:function(t){e.$set(e.editCateForm,"cat_name",t)},expression:"editCateForm.cat_name"}})],1)],1),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.confirm}},[e._v("确 定")])],1)],1)},y=[],k={data:function(){return{dialogVisible:!1,editCateForm:{cat_name:"",cat_id:""},editCateFormRule:{cat_name:[{required:!0,message:"请输入分类名称",trigger:"blur"},{min:2,max:7,message:"分类名称长度在 2 到 7 个字符",trigger:"blur"}]}}},mounted:function(){var e=this;this.$bus.$on("editCateClick",function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(a){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["d"])(a);case 2:r=t.sent,n=r.data,e.editCateForm.cat_name=n.cat_name,e.editCateForm.cat_id=a,e.dialogVisible=!0;case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},methods:{confirm:function(){var e=this;this.$refs.editCateForm.validate(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(a){var r,n,i,c,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a){t.next=2;break}return t.abrupt("return",Object(l["b"])("请输入合法的分类名称","warning"));case 2:return r=e.editCateForm,n=r.cat_id,i=r.cat_name,t.next=5,Object(s["c"])(n,i);case 5:if(c=t.sent,o=c.meta,c.data,200==o.status){t.next=10;break}return t.abrupt("return",Object(l["b"])("更新分类名称失败","error"));case 10:e.$emit("updateCate"),Object(l["b"])("更新分类名称成功","success"),e.dialogVisible=!1;case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},close:function(){this.$refs.editCateForm.resetFields()}}},x=k,O=Object(m["a"])(x,w,y,!1,null,"74f6438e",null),j=O.exports,F=a("1174"),$={components:{CategoryNavBar:F["a"],CategoryList:f,AddCate:_,EditCate:j},data:function(){return{queryInfo:{type:3,pagenum:1,pagesize:5},categoryList:[],total:0,parentCate:[]}},mounted:function(){this.get_CategoryData(this.queryInfo)},methods:{handleSizeChange:function(e){this.queryInfo.pagesize=e,this.get_CategoryData(this.queryInfo)},handleCurrentChange:function(e){this.queryInfo.pagenum=e,this.get_CategoryData(this.queryInfo)},addCateClick:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(s["e"])({type:2});case 2:t=e.sent,a=t.data,this.parentCate=a,this.$refs.addCate.dialogVisible=!0;case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),updateCate:function(){this.get_CategoryData(this.queryInfo)},get_CategoryData:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var a,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(s["e"])(t);case 2:if(a=e.sent,r=a.data,n=a.meta,200===n.status){e.next=7;break}return e.abrupt("return",Object(l["b"])("获取商品分类数据失败","error"));case 7:this.categoryList=r.result,this.total=r.total;case 9:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}},R=$,z=(a("333e"),Object(m["a"])(R,r,n,!1,null,"e33f8c14",null));t["default"]=z.exports}}]);
//# sourceMappingURL=chunk-b21ae91a.36077afa.js.map