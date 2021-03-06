<template>
    <div>
        <report-nav-bar :navBarItem="['首页', '数据统计', '数据报表']" />
        <el-card>
            <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
            <div id="main" style="width: 800px;height:400px;" ref="main"></div>
        </el-card>
    </div>
</template>

<script>
import echarts from 'echarts'

import reportNavBar from '../../components/breadNav/BreadNavBar'
import { getLineChartData } from '../../network/reports'

export default {
    components: {
        reportNavBar
    },
    data() {
        return {
            // 需要合并的配置项，数据在接口文档中有
            options: {
                title: {
                    text: '用户来源'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#E9EEF3'
                        }
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        boundaryGap: false
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ]
            }
        }
    },
    mounted() {
        this.init()
        console.log('123');
    },
    methods: {
        async init() {
            let { data, meta } = await getLineChartData()
            // 将获取到的配置项与原有的配置项进行合并
            this.options = { ...this.options, ...data }

            // 基于准备好的dom，初始化echarts实例
            const myChart = echarts.init(this.$refs.main);
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(this.options);
        }
    },
};
</script>

<style scoped>
</style>
