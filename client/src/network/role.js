import myaxios from './request'

// 请求角色列表基本数据
function getRoleList() {
    return myaxios({
        url: '/roles'
    })
}

// 请求添加角色
function addRole(roleInfo) {
    return myaxios({
        url: '/roles',
        method: 'post',
        data: roleInfo
    })
}

// 根据id查找角色
function getIDRole(id) {
    return myaxios({
        url: `/roles/${id}`
    })
}

// 请求编辑角色
function modifyRole(id, roleInfo) {
    return myaxios({
        url: `/roles/${id}`,
        method: 'put',
        data: roleInfo
    })
}

// 请求删除角色
function delteRole(id) {
    return myaxios({
        url: `/roles/${id}`,
        method: 'delete',
    })
}

// 删除角色权限
function deleteRight(roleID, rightID) {
    return myaxios({
        url: `/roles/${roleID}/rights/${rightID}`,
        method: 'delete'
    })
}

// 获取所有权限列表（树形结构）
function getRightList() {
    return myaxios({
        url: '/rights/tree'
    })
}

// 更改角色权限
function updateRight(roleID, rightID) {
    return myaxios({
        url: `/roles/${roleID}/rights`,
        method: 'post',
        data: {
            rids: rightID
        }
    })
}


export {
    getRoleList,
    addRole,
    getIDRole,
    modifyRole,
    delteRole,
    deleteRight,
    getRightList,
    updateRight
}