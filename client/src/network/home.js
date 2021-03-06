import myaxios from './request'

// 请求首页左侧菜单数据
function getHomeLeftMenu() {
    return myaxios({
        url: '/menus',
    })
}


export {
    getHomeLeftMenu
}



