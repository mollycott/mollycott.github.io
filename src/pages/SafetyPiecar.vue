<script setup>
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';

const safetyChart = ref(null);

onMounted(() => {
  initSafetyChart(safetyChart);
});

const initSafetyChart = (chartInstance) => {
  const myChart = echarts.init(chartInstance.value);
  const option = {
    title: { text: '' },
    tooltip: {},
    xAxis: {
      data: ['未戴安全帽', '危险区域入侵', '无措施高空作业']
    },
    yAxis: {},
    series: [{
      type: 'bar',
      data: [2, 0, 0]
    }]
  };
  myChart.setOption(option);
};
</script>

<template>
  <div class="safety-analysis">
    <h3>安全行为分析</h3>
    <!-- 安全行为分析图表 -->
    <div ref="safetyChart" class="safety-chart"></div>
  </div>
</template>

<style scoped>
/* ...其他样式... */
.safety-chart {
  width: 100%;
  height: 300px;
  margin-top: 20px;
}
</style>
