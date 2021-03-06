import myaxios from './request'

// 获取商品列表数据
function getGoodsList(query, pagenum, pagesize) {
    return myaxios({
        url: '/goods',
        params: {
            query,
            pagenum,
            pagesize
        }
    })
}

// 删除商品
function deleteGoods(id) {
    return myaxios({
        url: `/goods/${id}`,
        method: 'delete'
    })
}

// 添加商品
function addGoods({ goods_name, goods_cat, goods_price, goods_number, goods_weight, goods_introduce, pics, attrs }) {
    return myaxios({
        url: '/goods',
        method: 'post',
        data: {
            goods_name,
            goods_cat,
            goods_price,
            goods_number,
            goods_weight,
            goods_introduce,
            pics,
            attrs
        }
    })
}


// 整合添加商品所需的数据
class addGoodInfo {
    constructor(baseInfo, { content }, { goods_pics }, { manyParam, onlyParam }) {
        // 1. 商品基本数据
        this.goods_name = baseInfo.goods_name
        this.goods_cat = baseInfo.goods_cat.join(',')
        this.goods_price = baseInfo.goods_price
        this.goods_number = baseInfo.goods_number
        this.goods_weight = baseInfo.goods_weight
        // 2. 商品内容数据
        this.goods_introduce = content  
        // 3. 商品图片数据
        this.pics = goods_pics
        // 4. 商品参数数据(动态参数和静态属性)
        this.attrs = []
        manyParam.forEach(items => {
            items.attr_vals = items.attr_vals.join(',')
            this.attrs.push({
                attr_id: items.attr_id,
                attr_value: items.attr_vals
            })
        })
        onlyParam.forEach(items => {
            this.attrs.push({
                attr_id: items.attr_id,
                attr_value: items.attr_vals
            })
        })
    }
}

// 根据商品id查询商品信息
function getIDGoods(id) {
    return myaxios({
        url: `/goods/${id}`
    })
}

// 编辑提交表单
function editGoods(id, { goods_name, goods_price, goods_number, goods_weight, goods_cat }) {
    return myaxios({
        url: `/goods/${id}`,
        method: 'put',
        data: {
            goods_name,
            goods_price,
            goods_number,
            goods_weight,
            goods_cat
        }
    })
}


export {
    getGoodsList,
    deleteGoods,
    addGoods,
    addGoodInfo,
    getIDGoods,
    editGoods
}