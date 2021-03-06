import myaxios from './request'

// 获取订单数据列表
function getOrderList(query, pagenum, pagesize) {
    return myaxios({
        url: "/orders",
        params: {
            query,
            pagenum,
            pagesize
        }
    })
}



export {
    getOrderList,
}