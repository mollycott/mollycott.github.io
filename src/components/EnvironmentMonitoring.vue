<template>
  <div class="environmental-monitoring">
    <el-row :gutter="20">
      <!-- 左侧宽屏仪表板 -->
      <el-col :span="18">
        <el-card class="dashboard">
          <div class="chart-container">
            <!-- 综合数据图表 -->
            <div ref="overviewChart" class="overview-chart"></div>
            <!-- 设备状态监控 -->
            <div ref="deviceStatusChart" class="device-status-chart"></div>
          </div>
        </el-card>
      </el-col>
      <!-- 右侧辅助信息面板 -->
      <el-col :span="6">
        <el-card class="info-panel">
          <div class="info-header">实时监测数据</div>
          <div class="info-content">
            <div class="construction-suggestion">
              <div class="info-item">
                <span class="info-label">施工状况建议:</span>
                <span class="info-value">根据当前环境指标，建议正常施工。</span>
              </div>
            </div>
            <!-- 实时监测数据列表 -->
            <div class="realtime-data">
              <div class="info-item">
                <span class="info-label">PM2.5:</span>
                <span class="info-value">38μg/m³</span>
              </div>
              <div class="info-item">
                <span class="info-label">PM10:</span>
                <span class="info-value">78μg/m³</span>
              </div>
              <div class="info-item">
                <span class="info-label">温度:</span>
                <span class="info-value">22°C</span>
              </div>
              <div class="info-item">
                <span class="info-label">湿度:</span>
                <span class="info-value">55%</span>
              </div>
              <div class="info-item">
                <span class="info-label">噪音:</span>
                <span class="info-value">65dB</span>
              </div>
            </div>
            <!-- 环境质量评估 -->
            <div class="environmental-assessment">
              <div class="info-item">
                <span class="info-label">环境质量:</span>
                <span class="info-value">良</span>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';

const overviewChart = ref(null);
const deviceStatusChart = ref(null);

onMounted(() => {
  initOverviewChart(overviewChart);
  initDeviceStatusChart(deviceStatusChart);
});

const initOverviewChart = (chartInstance) => {
  const myChart = echarts.init(chartInstance.value);
  const option = {
    title: { text: '环境监测数据' },
    tooltip: {},
    legend: {
      data: ['PM2.5', 'PM10', '温度', '湿度', '噪音']
    },
    xAxis: {
      type: 'category',
      data: ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'PM2.5',
        type: 'line',
        stack: '总量',
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: 'PM10',
        type: 'line',
        stack: '总量',
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: '温度',
        type: 'line',
        stack: '总量',
        data: [220, 192, 201, 234, 290, 332, 301]
      },
      {
        name: '湿度',
        type: 'line',
        stack: '总量',
        data: [150, 232, 201, 154, 190, 303, 300]
      },
      {
        name: '噪音',
        type: 'line',
        stack: '总量',
        data: [68, 72, 78, 85, 90, 100, 95]
      }
    ]
  };
  myChart.setOption(option);
};

const initDeviceStatusChart = (chartInstance) => {
  const myChart = echarts.init(chartInstance.value);
  const option = {
    title: {text: '设备状态监控'},
    series: [
      {
        name: '状态',
        type: 'pie',
        radius: ['40%', '70%'],
        data: [
          {value: 235, name: '正常'},
          {value: 154, name: '故障'},
          {value: 99, name: '维护'},
          {value: 40, name: '离线'}
        ]
      }
    ]
  };
  myChart.setOption(option);
};
</script>

<style scoped>
.environmental-monitoring {
  padding: 20px;
}

.dashboard .chart-container {
  display: flex;
  flex-direction: column;
  height: 600px;
}

.overview-chart {
  flex: 1;
  width: 100%;
  height: 50%;
}

.device-status-chart {
  flex: 1;
  width: 100%;
  height: 50%;
}

.info-panel {
  position: relative;
  overflow: hidden;
}

.info-header {
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
  padding: 10px;
  background-color: #eceff1;
}

.info-content {
  padding: 10px;
}

.realtime-data {
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
  margin-bottom: 10px;
}

.environmental-assessment {
  padding-top: 10px;
}

.info-item {
  margin-bottom: 10px;
}

.info-label {
  font-weight: bold;
}

.info-value {
  margin-left: 10px;
  font-size: 1.2em;
  color: #303F9F;
}
</style>
