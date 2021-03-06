import myaxios from './request'

// 获取分类列表数据
function getCategoryData(queryInfo) {
    return myaxios({
        url: '/categories',
        params: queryInfo
    })
}

// 添加分类
function addCateList(queryInfo) {
    return myaxios({
        url: '/categories',
        method: 'post',
        data: queryInfo
    })
}

// 根据id查询分类
function getCateID(id) {
    return myaxios({
        url: `/categories/${id}`,
    })
}


// 编辑分类
function editCate(id, cat_name) {
    return myaxios({
        url: `/categories/${id}`,
        method: 'put',
        data: {
            cat_name
        }
    })
}

// 删除分类
function deleteCate(id) {
    return myaxios({
        url: `/categories/${id}`,
        method: 'delete',
    })
}





export {
    getCategoryData,
    addCateList,
    getCateID,
    editCate,
    deleteCate
}