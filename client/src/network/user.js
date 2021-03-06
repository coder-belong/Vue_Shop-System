import myaxios from './request'

// 获取用户列表数据
function getUserList({ query, pagenum, pagesize }) {
    return myaxios({
        url: '/users',
        params: {
            query,
            pagenum,
            pagesize
        }
    })
}


// 修改用户状态  测试地址：/users/500/state/true
function changeUserState(userID, state) {
    return myaxios({
        url: `/users/${userID}/state/${state}`,
        method: 'put'
    })
}


// 添加用户
function addUserInfo({ name, password, email, phone }) {
    return myaxios({
        url: '/users',
        method: 'post',
        data: {
            username: name,
            password,
            email,
            mobile: phone
        }
    })
}

// 修改用户
function modifyUserInfo({ id, email, mobile }) {
    return myaxios({
        url: `/users/${id}`,
        method: 'put',
        data: {
            email,
            mobile
        }
    })
}

// 删除用户
function deleteUserInfo(id) {
    return myaxios({
        url: `/users/${id}`,
        method: 'delete',
    })
}


// 根据 ID 查询用户信息
function getIDUserInfo(id) {
    return myaxios({
        url: `users/${id}`
    })
}

// 分配用户角色
function updateRole(userID,roleID) {
    return myaxios({
        url: `users/${userID}/role`,
        method: 'put',
        data: {
            rid: roleID
        }
    })
}


export {
    getUserList,
    changeUserState,
    addUserInfo,
    modifyUserInfo,
    deleteUserInfo,
    getIDUserInfo,
    updateRole
}