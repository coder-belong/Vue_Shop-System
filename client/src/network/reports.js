import myaxios from './request'

// 获取折线图数据（用echart渲染）
function getLineChartData() {
    return myaxios({
        url: 'reports/type/1'
    })
}

export {
    getLineChartData
}