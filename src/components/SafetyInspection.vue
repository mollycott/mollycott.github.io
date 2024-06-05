<template>
  <div class="safety-monitoring">
    <!-- 导航栏 -->
    <el-menu :default-active="activeIndex" class="nav-menu" mode="horizontal" @select="handleNavSelect">
      <el-menu-item index="1">环境检测</el-menu-item>
      <el-menu-item index="2">安全行为分析</el-menu-item>
      <el-menu-item index="3">人脸抓拍与识别</el-menu-item>
    </el-menu>

    <el-row :gutter="20" style="margin-top: 20px;">
      <!-- 环境监测-->
      <el-col :span="24" v-if="activeIndex === '1'">
        <environment-monitoring></environment-monitoring>
      </el-col>
      <!-- 实时视频监控 -->
      <el-col :span="24" v-if="activeIndex === '2'">
        <el-row>
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
              <el-row :gutter="20">
                <el-col :span="12">
                  <el-card>

                    <div class="video-recordings">
                      <h3>视频录像</h3>
                      <!-- 模拟录像列表 -->
                      <ul>
                        <li>地基层检测 - <el-button @click="playRecording('录像1')">播放</el-button></li>
                        <li>高空层检测 - <el-button @click="playRecording('录像2')">播放</el-button></li>
                        <!-- 更多录像... -->
                      </ul>
                    </div>
                  </el-card>
                </el-col>
                <el-col :span="12">
                  <el-card>

                    <!-- 云台控制 -->
                    <h3>云台控制</h3>
                    <div class="ptz-control">
                      <el-button icon="el-icon-arrow-up" @click="controlPTZ('up')">UP</el-button>
                      <el-button icon="el-icon-arrow-left" @click="controlPTZ('left')">LEFT</el-button>
                      <el-button icon="el-icon-arrow-right" @click="controlPTZ('right')">RIGHT</el-button>
                      <el-button icon="el-icon-arrow-down" @click="controlPTZ('down')">DOWN</el-button>
                    </div>
                    <div class="ptz-control">
                      <el-button icon="el-icon-arrow-up" @click="controlPTZ('up')">CENTER</el-button>
                      <el-button icon="el-icon-arrow-left" @click="controlPTZ('left')">REVERSE</el-button>
                      <el-button icon="el-icon-arrow-right" @click="controlPTZ('right')">RESET</el-button>
                    </div>
                  </el-card>
                </el-col>
              </el-row>

            </el-card>


          </el-col>
          <el-col :span="8">
            <!-- 安全行为分析 -->
              <el-card>
                <div class="safety-analysis">
                  <h3>安全行为分析</h3>
                  <p>监测到未戴安全帽人员：2人</p>
                  <p>监测到危险区域入侵：0次</p>
                  <p>监测到高空危险作业：0人</p>
                </div>
              </el-card>

            <el-card>
              <SafetyPiecar />
            </el-card>
          </el-col>
        </el-row>

      </el-col>

      <!-- 人脸抓拍与识别 -->
      <el-col :span="24" v-if="activeIndex === '3'">
        <AceRecognitionPage />
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import EnvironmentMonitoring from "@/components/EnvironmentMonitoring.vue";
import AceRecognitionPage from "@/pages/AceRecognition-page.vue";
import SafetyPiecar from "@/pages/SafetyPiecar.vue";
const activeIndex = ref('1'); // 默认显示实时视频监控
const videoPlayer = ref(null);

const playVideo = () => {
  videoPlayer.value.play();
};

const pauseVideo = () => {
  videoPlayer.value.pause();
};

const handleNavSelect = (key, indexPath) => {
  activeIndex.value = key;
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

.nav-menu {
  background-color: #303F9F;
  color: #fff;
  border-bottom: 2px solid #009688;
}

.nav-menu .el-menu-item {
  color: #fff;
  font-size: 16px;
}

.nav-menu .el-menu-item.is-active {
  border-bottom: 2px solid #f56c6c;
  color: #f56c6c;
}
</style>
