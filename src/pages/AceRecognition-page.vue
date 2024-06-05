<template>
  <div class="face-recognition-page">
    <el-card>
      <div class="page-header">
        <h2>人脸抓拍与识别系统</h2>
      </div>
      <div class="recognition-container">
        <!-- 抓拍图片 -->
        <div class="capture-image-container">
          <img src="../assets/path_to_face_image.jpg" class="capture-image" alt="Captured Face">
          <div class="image-details">
            <p>抓拍时间：2023-06-04 14:20:30</p>
            <p>抓拍地点：工地入口A</p>
          </div>
        </div>

        <!-- 识别结果 -->
        <div class="recognition-result">
          <h3>已识别人员信息</h3>
          <ul>
            <li>姓名：张三</li>
            <li>工号：007</li>
            <li>部门：施工管理部</li>
            <li>职位：工程师</li>
            <li>安全帽佩戴：<span class="safety-hat-yes">是</span></li>
            <li>工服穿着：<span class="work-clothing-yes">是</span></li>
          </ul>
        </div>

        <!-- 历史识别记录 -->
        <div class="history-records">
          <h3>历史识别记录</h3>
          <table>
            <thead>
            <tr>
              <th>抓拍时间</th>
              <th>姓名</th>
              <th>工号</th>
              <th>安全帽</th>
              <th>工服</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="record in historyRecords" :key="record.name">
              <td>{{ record.time }}</td>
              <td>{{ record.name }}</td>
              <td>{{ record.employeeId }}</td>
              <td>{{ record.safetyHat ? '是' : '否' }}</td>
              <td>{{ record.workClothing ? '是' : '否' }}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 模拟的历史识别记录数据
const historyRecords = ref([
  {
    time: '2023-06-04 14:15:00',
    name: '李四',
    employeeId: '008',
    safetyHat: true,
    workClothing: false
  },
  {
    time: '2023-06-04 14:10:00',
    name: '王五',
    employeeId: '009',
    safetyHat: false,
    workClothing: true
  },
  // ... 更多记录
]);
</script>

<style scoped>
.face-recognition-page {
  padding: 20px;
}

.page-header h2 {
  text-align: center;
  padding-bottom: 20px;
}

.capture-image-container {
  text-align: center;
}

.capture-image {
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
  border-radius: 5px;
}

.image-details p {
  margin: 0;
  color: #666;
}

.recognition-result h3 {
  margin-bottom: 15px;
}

.recognition-result ul {
  list-style: none;
  padding: 0;
}

.recognition-result li {
  margin-bottom: 5px;
}

.history-records {
  margin-top: 30px;
}

.history-records table {
  width: 100%;
  border-collapse: collapse;
}

.history-records th,
.history-records td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.history-records th {
  background-color: #f2f2f2;
}

.safety-hat-yes,
.work-clothing-yes {
  color: green;
}

/* 添加一些样式以区分未佩戴安全帽或未穿工服的情况 */
.safety-hat-no,
.work-clothing-no {
  color: red;
}

.capture-image {
  width: 100%;
  max-width: 500px; /* 或者根据需要设置一个合适的宽度 */
  height: auto;
  margin-bottom: 10px;
  border-radius: 5px;
}

/* 添加一些审核按钮的样式 */
.action-buttons {
  margin-top: 20px;
  text-align: right;
}

/* 表格样式调整 */
.history-records table {
  width: 100%;
  border-collapse: collapse;
}

.history-records th,
.history-records td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.history-records th {
  background-color: #f2f2f2;
}

</style>
