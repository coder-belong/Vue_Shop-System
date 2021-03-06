import myaxios from './request'

// 获取权限列表数据
function getRightList() {
    return myaxios({
        url: `/rights/list`
    })
}


export {
    getRightList
}