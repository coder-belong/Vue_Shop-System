(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5bdf0ce5"],{"02f4":function(t,e,r){var a=r("4588"),n=r("be13");t.exports=function(t){return function(e,r){var i,c,o=String(n(e)),s=a(r),u=o.length;return s<0||s>=u?t?"":void 0:(i=o.charCodeAt(s),i<55296||i>56319||s+1===u||(c=o.charCodeAt(s+1))<56320||c>57343?t?o.charAt(s):i:t?o.slice(s,s+2):c-56320+(i-55296<<10)+65536)}}},"0390":function(t,e,r){"use strict";var a=r("02f4")(!0);t.exports=function(t,e,r){return e+(r?a(t,e).length:1)}},"0bfb":function(t,e,r){"use strict";var a=r("cb7c");t.exports=function(){var t=a(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},1174:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},t._l(t.navBarItem,(function(e,a){return r("el-breadcrumb-item",{key:e,attrs:{to:{path:0===a?"/home":""}}},[t._v(t._s(e))])})),1)},n=[],i={props:{navBarItem:Array}},c=i,o=r("2877"),s=Object(o["a"])(c,a,n,!1,null,"aa4f3c02",null);e["a"]=s.exports},1450:function(t,e,r){"use strict";var a=r("1661"),n=r.n(a);n.a},1661:function(t,e,r){},"214f":function(t,e,r){"use strict";r("b0c5");var a=r("2aba"),n=r("32e9"),i=r("79e5"),c=r("be13"),o=r("2b4c"),s=r("520a"),u=o("species"),l=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),d=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2===r.length&&"a"===r[0]&&"b"===r[1]}();t.exports=function(t,e,r){var m=o(t),f=!i((function(){var e={};return e[m]=function(){return 7},7!=""[t](e)})),p=f?!i((function(){var e=!1,r=/a/;return r.exec=function(){return e=!0,null},"split"===t&&(r.constructor={},r.constructor[u]=function(){return r}),r[m](""),!e})):void 0;if(!f||!p||"replace"===t&&!l||"split"===t&&!d){var b=/./[m],v=r(c,m,""[t],(function(t,e,r,a,n){return e.exec===s?f&&!n?{done:!0,value:b.call(e,r,a)}:{done:!0,value:t.call(r,e,a)}:{done:!1}})),h=v[0],g=v[1];a(String.prototype,t,h),n(RegExp.prototype,m,2==e?function(t,e){return g.call(t,this,e)}:function(t){return g.call(t,this)})}}},2674:function(t,e,r){"use strict";var a=r("6db4"),n=r.n(a);n.a},"28a5":function(t,e,r){"use strict";var a=r("aae3"),n=r("cb7c"),i=r("ebd6"),c=r("0390"),o=r("9def"),s=r("5f1b"),u=r("520a"),l=r("79e5"),d=Math.min,m=[].push,f="split",p="length",b="lastIndex",v=4294967295,h=!l((function(){RegExp(v,"y")}));r("214f")("split",2,(function(t,e,r,l){var g;return g="c"=="abbc"[f](/(b)*/)[1]||4!="test"[f](/(?:)/,-1)[p]||2!="ab"[f](/(?:ab)*/)[p]||4!="."[f](/(.?)(.?)/)[p]||"."[f](/()()/)[p]>1||""[f](/.?/)[p]?function(t,e){var n=String(this);if(void 0===t&&0===e)return[];if(!a(t))return r.call(n,t,e);var i,c,o,s=[],l=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,f=void 0===e?v:e>>>0,h=new RegExp(t.source,l+"g");while(i=u.call(h,n)){if(c=h[b],c>d&&(s.push(n.slice(d,i.index)),i[p]>1&&i.index<n[p]&&m.apply(s,i.slice(1)),o=i[0][p],d=c,s[p]>=f))break;h[b]===i.index&&h[b]++}return d===n[p]?!o&&h.test("")||s.push(""):s.push(n.slice(d)),s[p]>f?s.slice(0,f):s}:"0"[f](void 0,0)[p]?function(t,e){return void 0===t&&0===e?[]:r.call(this,t,e)}:r,[function(r,a){var n=t(this),i=void 0==r?void 0:r[e];return void 0!==i?i.call(r,n,a):g.call(String(n),r,a)},function(t,e){var a=l(g,t,this,e,g!==r);if(a.done)return a.value;var u=n(t),m=String(this),f=i(u,RegExp),p=u.unicode,b=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(h?"y":"g"),x=new f(h?u:"^(?:"+u.source+")",b),_=void 0===e?v:e>>>0;if(0===_)return[];if(0===m.length)return null===s(x,m)?[m]:[];var w=0,y=0,k=[];while(y<m.length){x.lastIndex=h?y:0;var O,j=s(x,h?m:m.slice(y));if(null===j||(O=d(o(x.lastIndex+(h?0:y)),m.length))===w)y=c(m,y,p);else{if(k.push(m.slice(w,y)),k.length===_)return k;for(var L=1;L<=j.length-1;L++)if(k.push(j[L]),k.length===_)return k;y=w=O}}return k.push(m.slice(w)),k}]}))},"3f0d":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("param-nav-bar",{attrs:{navBarItem:["首页","商品管理","分类参数"]}}),r("el-card",[r("el-alert",{attrs:{title:"注意：只允许为第三级分类设置相关参数！",type:"warning",closable:!1,"show-icon":""}}),r("el-row",[r("span",[t._v("选择三级分类：")]),r("el-cascader",{attrs:{options:t.cateList,props:t.cascaderProps},on:{change:t.SelectCate},model:{value:t.cascaderValue,callback:function(e){t.cascaderValue=e},expression:"cascaderValue"}})],1),r("el-tabs",{model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[r("el-tab-pane",{attrs:{label:"动态参数",name:"many"}},[r("el-button",{attrs:{type:"primary",size:"mini",disabled:t.disabled},on:{click:t.addParam}},[t._v("添加参数")]),r("param-list",{attrs:{paramList:t.paramList.manyList},on:{updateParam:t.updateParam}})],1),r("el-tab-pane",{attrs:{label:"静态属性",name:"only"}},[r("el-button",{attrs:{type:"primary",size:"mini",disabled:t.disabled},on:{click:t.addParam}},[t._v("添加属性")]),r("param-list",{attrs:{paramList:t.paramList.onlyList},on:{updateParam:t.updateParam}})],1)],1)],1),r("add-param",{ref:"addParam",on:{updateParam:t.updateParam}}),r("edit-param",{on:{updateParam:t.updateParam}})],1)},n=[],i=(r("28a5"),r("ac6a"),r("96cf"),r("1da1")),c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-table",{attrs:{data:t.paramList,border:""}},[r("el-table-column",{attrs:{type:"expand",label:"查看详情",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._l(e.row.attr_vals,(function(a,n){return r("el-tag",{key:a.attr_id,attrs:{closable:""},on:{close:function(r){return t.closeTag(e.row,n)}}},[t._v(t._s(a))])})),r("el-input",{directives:[{name:"show",rawName:"v-show",value:e.row.inputVisible,expression:"scope.row.inputVisible"}],ref:"input",attrs:{closable:""},on:{blur:function(r){return t.inputConfirm(e.row)}},nativeOn:{keyup:function(r){return!r.type.indexOf("key")&&t._k(r.keyCode,"enter",13,r.key,"Enter")?null:t.inputConfirm(e.row)}},model:{value:e.row.inputVal,callback:function(r){t.$set(e.row,"inputVal",r)},expression:"scope.row.inputVal"}}),r("el-button",{directives:[{name:"show",rawName:"v-show",value:!e.row.inputVisible,expression:"!scope.row.inputVisible"}],attrs:{size:"small"},on:{click:function(r){return t.showInput(e.row)}}},[t._v("+ New Tag")])]}}])}),r("el-table-column",{attrs:{type:"index",label:"#",width:"110"}}),r("el-table-column",{attrs:{prop:"attr_name",label:"参数名称"}}),r("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-button",{attrs:{round:"",type:"primary",size:"mini",icon:"el-icon-edit"},on:{click:function(r){return t.editParamClick(e.row)}}},[t._v("编辑")]),r("el-button",{attrs:{round:"",type:"danger",size:"mini",icon:"el-icon-delete"},on:{click:function(r){return t.deleteParamClick(e.row)}}},[t._v("删除")])]}}])})],1)},o=[],s=r("b254"),u=r("25b1"),l=r("8bbf"),d=r.n(l),m={props:{paramList:Array},methods:{deleteParamClick:function(t){var e=this;this.$confirm("此操作将永久删除该参数, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n,i,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=t.attr_id,n=t.cat_id,r.next=3,Object(s["b"])(n,a);case 3:if(i=r.sent,c=i.meta,200===c.status){r.next=7;break}return r.abrupt("return",Object(u["b"])("删除失败","error"));case 7:Object(u["b"])("删除成功","success"),e.$emit("updateParam");case 9:case"end":return r.stop()}}),r)})))).catch((function(){Object(u["b"])("已取消删除操作","info")}))},editParamClick:function(t){this.$bus.$emit("editParamClick",t)},showInput:function(t){var e=this;t.inputVisible=!0,this.$nextTick((function(){e.$refs.input.$refs.input.focus()}))},inputConfirm:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var r,a,n,i,c,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.inputVal){t.next=10;break}return e.attr_vals.push(e.inputVal),r=e.cat_id,a=e.attr_id,n=e.attr_name,i=e.attr_sel,e.attr_vals,t.next=5,Object(s["c"])(r,a,n,i,e.attr_vals.join(","));case 5:if(c=t.sent,o=c.meta,200===o.status){t.next=9;break}return t.abrupt("return",Object(u["b"])("更新参数可选项失败","error"));case 9:Object(u["b"])("更新参数可选项成功","success");case 10:e.inputVisible=!1,e.inputVal="";case 12:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),closeTag:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e,r){var a,n,i,c,o,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return d.a.delete(e.attr_vals,r),a=e.cat_id,n=e.attr_id,i=e.attr_name,c=e.attr_sel,e.attr_vals,t.next=4,Object(s["c"])(a,n,i,c,e.attr_vals.join(","));case 4:if(o=t.sent,l=o.meta,200===l.status){t.next=8;break}return t.abrupt("return",Object(u["b"])("删除参数可选项失败","error"));case 8:Object(u["b"])("删除参数可选项成功","success");case 9:case"end":return t.stop()}}),t)})));function e(e,r){return t.apply(this,arguments)}return e}()}},f=m,p=(r("2674"),r("2877")),b=Object(p["a"])(f,c,o,!1,null,"3294294d",null),v=b.exports,h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-dialog",{attrs:{title:t.showTitle,visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e},close:t.close}},[r("el-form",{ref:"addForm",attrs:{"label-width":"auto",model:t.addForm,rules:t.addFormRule}},[r("el-form-item",{attrs:{label:t.showLabel,prop:"name"}},[r("el-input",{model:{value:t.addForm.name,callback:function(e){t.$set(t.addForm,"name",e)},expression:"addForm.name"}})],1)],1),r("span",{attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:t.confirm}},[t._v("确 定")])],1)],1)},g=[],x=(r("7f7f"),{data:function(){return{activeName:"",cateID:"",dialogVisible:!1,addForm:{name:""},addFormRule:{name:[{required:!0,message:"请输入名称",trigger:"blur"},{min:2,max:12,message:"长度在 2 到 12 个字符",trigger:"blur"}]}}},methods:{confirm:function(){var t=this;this.$refs.addForm.validate(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(r){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r){e.next=2;break}return e.abrupt("return",Object(u["b"])("请输入正确的名称","error"));case 2:return e.next=4,Object(s["a"])(t.cateID,t.activeName,t.addForm.name);case 4:if(a=e.sent,n=a.meta,201===n.status){e.next=8;break}return e.abrupt("return",Object(u["b"])("添加失败，请稍后重试","error"));case 8:Object(u["b"])("参数添加成功","success"),t.$emit("updateParam"),t.dialogVisible=!1;case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},close:function(){this.addForm.name=""}},computed:{showTitle:function(){return"many"===this.activeName?"添加参数":"添加属性"},showLabel:function(){return"many"===this.activeName?"参数名称":"属性名称"}}}),_=x,w=Object(p["a"])(_,h,g,!1,null,"a3c19a94",null),y=w.exports,k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-dialog",{attrs:{title:"参数编辑",visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e},close:t.close}},[r("el-form",{ref:"editForm",attrs:{"label-width":"auto",model:t.editForm,rules:t.editFormRule}},[r("el-form-item",{attrs:{label:"参数名称",prop:"name"}},[r("el-input",{model:{value:t.editForm.name,callback:function(e){t.$set(t.editForm,"name",e)},expression:"editForm.name"}})],1)],1),r("span",{attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:t.confirm}},[t._v("确 定")])],1)],1)},O=[],j={data:function(){return{dialogVisible:!1,editForm:{name:"",cat_id:"",attr_id:"",attr_sel:""},editFormRule:{name:[{required:!0,message:"请输入参数名称",trigger:"blur"},{min:2,max:12,message:"长度在 2 到 12 个字符",trigger:"blur"}]}}},mounted:function(){var t=this;this.$bus.$on("editParamClick",function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(r){var a,n,i,c,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=r.cat_id,n=r.attr_id,i=r.attr_sel,t.editForm.cat_id=a,t.editForm.attr_id=n,t.editForm.attr_sel=i,e.next=6,Object(s["d"])(a,n,i);case 6:c=e.sent,o=c.data,t.editForm.name=o.attr_name,t.dialogVisible=!0;case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},methods:{confirm:function(){var t=this;this.$refs.editForm.validate(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(r){var a,n,i,c,o,l,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r){e.next=2;break}return e.abrupt("return",Object(u["b"])("请填写正确的参数名称","error"));case 2:return a=t.editForm,n=a.name,i=a.cat_id,c=a.attr_id,o=a.attr_sel,e.next=5,Object(s["c"])(i,c,n,o);case 5:if(l=e.sent,d=l.meta,200===d.status){e.next=9;break}return e.abrupt("return",Object(u["b"])("修改参数名称失败","error"));case 9:Object(u["b"])("修改参数名称成功","success"),t.$emit("updateParam"),t.dialogVisible=!1;case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},close:function(){this.$refs.editForm.resetFields()}}},L=j,V=Object(p["a"])(L,k,O,!1,null,"754ae990",null),P=V.exports,R=r("1174"),S=r("b050"),F={components:{ParamNavBar:R["a"],AddParam:y,ParamList:v,EditParam:P},data:function(){return{activeName:"many",cateList:[],cascaderValue:[],disabled:!0,paramList:{manyList:[],onlyList:[]},cascaderProps:{expandTrigger:"hover",value:"cat_id",label:"cat_name"}}},mounted:function(){this.get_CategoryData()},methods:{SelectCate:function(t){this.disabled=!1,this.getParam()},addParam:function(){this.$refs.addParam.activeName=this.activeName,this.$refs.addParam.cateID=this.cascaderValue[this.cascaderValue.length-1],this.$refs.addParam.dialogVisible=!0},updateParam:function(){this.getParam()},get_CategoryData:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(S["e"])();case 2:e=t.sent,r=e.data,e.meta,this.cateList=r;case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getParam:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,r,a,n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=this.cascaderValue[this.cascaderValue.length-1],t.next=3,Object(s["e"])(e,"many");case 3:return r=t.sent,a=r.data,t.next=7,Object(s["e"])(e,"only");case 7:n=t.sent,i=n.data,a.forEach((function(t){if(t.inputVisible=!1,t.inputVal="",!t.attr_vals)return t.attr_vals=[];t.attr_vals=t.attr_vals.split(",")})),i.forEach((function(t){if(t.inputVisible=!1,t.inputVal="",!t.attr_vals)return t.attr_vals=[];t.attr_vals=t.attr_vals.split(",")})),this.paramList.manyList=a,this.paramList.onlyList=i;case 13:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},$=F,C=(r("1450"),Object(p["a"])($,a,n,!1,null,"74ac66e5",null));e["default"]=C.exports},"520a":function(t,e,r){"use strict";var a=r("0bfb"),n=RegExp.prototype.exec,i=String.prototype.replace,c=n,o="lastIndex",s=function(){var t=/a/,e=/b*/g;return n.call(t,"a"),n.call(e,"a"),0!==t[o]||0!==e[o]}(),u=void 0!==/()??/.exec("")[1],l=s||u;l&&(c=function(t){var e,r,c,l,d=this;return u&&(r=new RegExp("^"+d.source+"$(?!\\s)",a.call(d))),s&&(e=d[o]),c=n.call(d,t),s&&c&&(d[o]=d.global?c.index+c[0].length:e),u&&c&&c.length>1&&i.call(c[0],r,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(c[l]=void 0)})),c}),t.exports=c},"5f1b":function(t,e,r){"use strict";var a=r("23c6"),n=RegExp.prototype.exec;t.exports=function(t,e){var r=t.exec;if("function"===typeof r){var i=r.call(t,e);if("object"!==typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==a(t))throw new TypeError("RegExp#exec called on incompatible receiver");return n.call(t,e)}},"6db4":function(t,e,r){},"7f7f":function(t,e,r){var a=r("86cc").f,n=Function.prototype,i=/^\s*function ([^ (]*)/,c="name";c in n||r("9e1e")&&a(n,c,{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},aae3:function(t,e,r){var a=r("d3f4"),n=r("2d95"),i=r("2b4c")("match");t.exports=function(t){var e;return a(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==n(t))}},ac6a:function(t,e,r){for(var a=r("cadf"),n=r("0d58"),i=r("2aba"),c=r("7726"),o=r("32e9"),s=r("84f2"),u=r("2b4c"),l=u("iterator"),d=u("toStringTag"),m=s.Array,f={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=n(f),b=0;b<p.length;b++){var v,h=p[b],g=f[h],x=c[h],_=x&&x.prototype;if(_&&(_[l]||o(_,l,m),_[d]||o(_,d,h),s[h]=m,g))for(v in a)_[v]||i(_,v,a[v],!0)}},b050:function(t,e,r){"use strict";r.d(e,"e",(function(){return n})),r.d(e,"a",(function(){return i})),r.d(e,"d",(function(){return c})),r.d(e,"c",(function(){return o})),r.d(e,"b",(function(){return s}));var a=r("1bab");function n(t){return Object(a["a"])({url:"/categories",params:t})}function i(t){return Object(a["a"])({url:"/categories",method:"post",data:t})}function c(t){return Object(a["a"])({url:"/categories/".concat(t)})}function o(t,e){return Object(a["a"])({url:"/categories/".concat(t),method:"put",data:{cat_name:e}})}function s(t){return Object(a["a"])({url:"/categories/".concat(t),method:"delete"})}},b0c5:function(t,e,r){"use strict";var a=r("520a");r("5ca1")({target:"RegExp",proto:!0,forced:a!==/./.exec},{exec:a})},b254:function(t,e,r){"use strict";r.d(e,"e",(function(){return n})),r.d(e,"a",(function(){return i})),r.d(e,"b",(function(){return c})),r.d(e,"d",(function(){return o})),r.d(e,"c",(function(){return s}));var a=r("1bab");function n(t,e){return Object(a["a"])({url:"categories/".concat(t,"/attributes"),params:{sel:e}})}function i(t,e,r){return Object(a["a"])({url:"categories/".concat(t,"/attributes"),method:"post",data:{attr_name:r,attr_sel:e}})}function c(t,e){return Object(a["a"])({url:"categories/".concat(t,"/attributes/").concat(e),method:"delete"})}function o(t,e,r){return Object(a["a"])({url:"categories/".concat(t,"/attributes/").concat(e),params:{attr_sel:r}})}function s(t,e,r,n,i){return Object(a["a"])({url:"categories/".concat(t,"/attributes/").concat(e),method:"put",data:{attr_name:r,attr_sel:n,attr_vals:i}})}}}]);
//# sourceMappingURL=chunk-5bdf0ce5.55a00666.js.map