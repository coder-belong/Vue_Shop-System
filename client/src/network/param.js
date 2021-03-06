import myaxios from './request'

// 获取分类参数
function getParams(id, type) {
    return myaxios({
        url: `categories/${id}/attributes`,
        params: {
            sel: type
        }
    })
}

// 添加参数
function addParams(id, type, attr_name) {
    return myaxios({
        url: `categories/${id}/attributes`,
        method: 'post',
        data: {
            attr_name,
            attr_sel: type,
        }
    })
}

// 删除参数
function deleteParams(id, attr_id) {
    return myaxios({
        url: `categories/${id}/attributes/${attr_id}`,
        method: 'delete',
    })
}


// 根据id查询参数
function findParams(cat_id, attr_id, type) {
    return myaxios({
        url: `categories/${cat_id}/attributes/${attr_id}`,
        params: {
            attr_sel: type
        }
    })
}

// 编辑提交参数
function editParams(cat_id, attr_id, newName, type, attr_vals) {
    return myaxios({
        url: `categories/${cat_id}/attributes/${attr_id}`,
        method: 'put',
        data: {
            attr_name: newName,
            attr_sel: type,
            attr_vals
        }
    })
}


export {
    getParams,
    addParams,
    deleteParams,
    findParams,
    editParams
}