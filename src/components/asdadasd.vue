<template>
  <div class="safety-monitoring">
    <el-row :gutter="10">
      <el-row :gutter="20">
        <!-- 实时视频监控 -->
        <el-col :span="16">
          <el-card>
            <div class="video-live">
              <video ref="videoPlayer" class="video-player" controls>
                <source src="../assets/path_to_your_video.mp4" type="video/mp4">
                Your browser does not support the video tag.
              </video>
              <div class="video-actions">
                <el-button @click="playVideo">播放</el-button>
                <el-button @click="pauseVideo">暂停</el-button>
              </div>
            </div>
          </el-card>
        </el-col>

        <!-- 视频录像与回放 -->
        <el-col :span="8">
          <el-card>
            <div class="video-recordings">
              <h3>视频录像</h3>
              <!-- 模拟录像列表 -->
              <ul>
                <li>录像1 - <el-button @click="playRecording('录像1')">播放</el-button></li>
                <li>录像2 - <el-button @click="playRecording('录像2')">播放</el-button></li>
                <!-- 更多录像... -->
              </ul>
            </div>
            <!-- 云台控制 -->
            <el-col :span="24">
              <div class="ptz-control">
                <el-button icon="el-icon-arrow-up" @click="controlPTZ('up')"></el-button>
                <el-button icon="el-icon-arrow-left" @click="controlPTZ('left')"></el-button>
                <el-button icon="el-icon-arrow-right" @click="controlPTZ('right')"></el-button>
                <el-button icon="el-icon-arrow-down" @click="controlPTZ('down')"></el-button>
              </div>
            </el-col>
          </el-card>
        </el-col>
      </el-row>



      <el-row :gutter="20">
        <!-- 人脸抓拍与识别 -->
        <el-col :span="24">
          <el-card>
            <div class="face-recognition">
              <img src="../assets/path_to_face_image.jpg" class="capture-image" alt="Face Capture">
              <div>已识别人员：张三</div>
            </div>
          </el-card>
        </el-col>

        <!-- 安全行为分析 -->
        <el-col :span="12">
          <el-card>
            <div class="safety-analysis">
              <h3>安全行为分析</h3>
              <p>监测到未戴安全帽人员：2人</p>
              <p>监测到危险区域入侵：0次</p>
            </div>
          </el-card>
        </el-col>

        <!-- 视频质量诊断 -->
        <el-col :span="12">
          <el-card>
            <div class="video-diagnosis">
              <h3>视频质量诊断</h3>
              <p>当前视频质量：良好</p>
              <p>问题检测：无</p>
            </div>
          </el-card>
        </el-col>

        <!-- 统计分析 -->
        <el-col :span="24">
          <el-card>
            <div class="statistics">
              <h3>统计分析</h3>
              <!-- 使用ECharts或其他图表库展示统计图表 -->
            </div>
          </el-card>
        </el-col>
      </el-row>


    </el-row>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const videoPlayer = ref(null);

const playVideo = () => {
  videoPlayer.value.play();
};

const pauseVideo = () => {
  videoPlayer.value.pause();
};

const playRecording = (recording) => {
  console.log(`播放录像: ${recording}`);
  // 这里可以加入播放特定录像的逻辑
};

const controlPTZ = (direction) => {
  console.log(`控制云台向${direction}移动`);
  // 这里可以加入控制云台的逻辑
};
</script>

<style scoped>
/* 基础布局和通用样式 */
.safety-monitoring {
  padding: 20px;
}

.el-row {
  margin-bottom: 20px;
}

.el-col {
  padding: 0 10px;
}

.el-card {
  border-radius: 10px;
  overflow: hidden;
}

/* 实时视频监控 */
.video-live {
  position: relative;
}

.video-player {
  width: 100%;
  height: 300px;
  background-color: #000;
}

.video-actions {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 20px;
}

/* 视频录像与回放 */
.video-recordings ul {
  list-style: none;
  padding: 0;
}

.video-recordings li {
  margin-bottom: 10px;
}

/* 云台控制 */
.ptz-control {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.ptz-control button {
  margin: 0 5px;
}

/* 人脸抓拍与识别 */
.face-recognition {
  text-align: center;
}

.capture-image {
  max-width: 100%;
  height: auto;
  margin: 20px 0;
  border-radius: 5px;
}

/* 安全行为分析与视频质量诊断 */
.safety-analysis, .video-diagnosis {
  padding: 20px;
}

/* 统计分析 */
.statistics {
  padding: 20px;
  text-align: center;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .el-row {
    flex-direction: column;
  }

  .el-col {
    padding: 0;
    margin-bottom: 20px;
  }

  .el-col:last-child {
    margin-bottom: 0;
  }
}
</style>
