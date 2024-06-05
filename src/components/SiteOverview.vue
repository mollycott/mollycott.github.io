<template>
  <div class="site-overview">
    <el-row :gutter="20">
      <el-col :span="5">
        <el-card class="transparent-card">
          <div class="engineering-intro">工程简介</div>
          <el-image
              src="https://tse2-mm.cn.bing.net/th/id/OIP-C.Q69Cz8Rj_HRM9cJ6aRAVcwHaEK?rs=1&pid=ImgDetMain"
              fit="cover"
              class="image"
              style = "padding-top: 20px;"
          ></el-image>
          <div class="card-content">
            <ul>
              <li>项目名称：智慧工地</li>
              <li>建设地点：厦门市集美区</li>
              <li>建筑面积：5000平方米</li>
              <li>预计竣工日期：第十六周</li>
            </ul>
          </div>
        </el-card>
      </el-col>
      <el-col :span="14">
        <!-- 空占位-->
        <h1 style="color: #2BE5EC; text-align: center">智慧工地安全检测平台，欢迎您</h1>
      </el-col>
      <el-col :span="5">
        <el-card class="transparent-card-right-top">
          <div class="engineering-intro" style = "text-align: left">总体进度情况</div>
          <div class="progress-info">
            <!-- 其他统计信息 -->
            <div class="message-collapse">
              <el-collapse v-model="active" accordion>
                <el-collapse-item title="桥梁工程" name="1">
                  <div>
                    <p>当前工程进度：</p>
                    <el-progress :percentage="60.88" color="#1CCDCE"></el-progress>
                  </div>
                  <div>
                    <p>本月完成工程量：15000平方米</p>
                    <p>本月施工人数：200人</p>
                  </div>
                </el-collapse-item>
                <el-collapse-item title="隧道工程" name="2">
                  <div>
                    <p>当前工程进度：</p>
                    <el-progress :percentage="15.98" color="#1CCDCE"></el-progress>

                  </div>
                  <div>
                    <p>本月完成工程量：15000平方米</p>
                    <p>本月施工人数：200人</p>
                  </div>
                </el-collapse-item>
                <el-collapse-item title="房建工程" name="3">
                  <div>
                    <p>当前工程进度：</p>
                    <el-progress :percentage="84.61" color="#1CCDCE"></el-progress>

                  </div>
                  <div>
                    <p>本月完成工程量：15000平方米</p>
                    <p>本月施工人数：200人</p>
                  </div>
                </el-collapse-item>
                <el-collapse-item title="路基工程" name="4">
                  <div>
                    <p>挖方路基
                        <el-progress :percentage="75.51" color="#1CCDCE"></el-progress>
                    </p>
                    <p>挖方路基
                      <span class="progress-value"></span>
                      <br>
                      <el-progress :percentage="36.51" color="#0AB5F6"></el-progress>
                    </p>
                  </div>

                </el-collapse-item>
              </el-collapse>
            </div>
          </div>
        </el-card>
        <el-card class="transparent-card-right-bottom" style="color: #2BE5EC; text-align: center">
          <el-row>
            <el-col :span="6"><P>事记</P></el-col>
            <el-col :span="6"><P>新闻</P></el-col>
            <el-col :span="6"><P>视频</P></el-col>
            <el-col :span="6"><P>图片</P></el-col>
          </el-row>
          <el-row>
            <el-timeline style="max-width: 600px">
              <el-timeline-item center timestamp="2024-04-13" placement="top">
                <p style="color: #E4E7ED;">公司召开“十四五”宣贯会</p>
              </el-timeline-item>
              <el-timeline-item center timestamp="2024-04-13" placement="top">
                <p style="color: #E4E7ED;">公司召开“十四五”宣贯会</p>
              </el-timeline-item><el-timeline-item center timestamp="2024-04-13" placement="top">
                <p style="color: #E4E7ED;">公司召开“十四五”宣贯会</p>
            </el-timeline-item>
            </el-timeline>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>


<style lang="scss" scoped>
@import "../styles/element/index";
</style>

<style scoped>
.site-overview {
  padding: 20px;
  background-image: url('../assets/SiteOverview_Map.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
}

.transparent-card {
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid #303f9f;
  height: 750px;
}

.transparent-card-right-bottom {
  margin-top: 10px;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid #303f9f;
  height: 300px;
}

.transparent-card-right-top {
  margin-bottom: 10px;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid #303f9f;
  height: 440px;
}

.card-content {
  padding: 20px; /* 为卡片内容添加一些内边距 */
  color: #2BE5EC;
}

.card-content ul {
  list-style-type: none; /* 移除列表项的默认标记 */
  padding: 0;
}

.card-content li {
  padding-top: 20px;
  padding-bottom: 20px;
  margin-bottom: 10px; /* 为列表项添加一些间距 */
}

.image {
  width: 100%; /* 使图片宽度适应容器 */
  /* 根据需要设置图片的高度 */
}
.engineering-intro {
  color: #EAEBEC;
  text-align: center;
  padding-bottom: 20px;
}
.message-collapse /deep/ .el-collapse {
  background-color: rgba(255, 255, 255, 0); /* 设置el-collapse的背景为微透明 */
  border-top: 2px solid #303f9f; /* 边框颜色 */
  border-bottom: 2px solid #303f9f;
}

.message-collapse /deep/ .el-collapse-item__header {
  background-color: rgba(255, 255, 255, 0.01); /* 设置标题背景为更透明 */
  border-bottom: 1px solid #303f9f; /* 标题边框颜色 */
  color: #EAEBEC; /* 设置折叠面板标题的字体颜色 */
  padding-top: 1px;
  padding-left: 20px;
}

.message-collapse /deep/ .el-collapse-item__wrap {
  background-color: transparent; /* 确保内容区域背景也为透明 */
}
.message-collapse /deep/ .el-collapse-item__content {
  color: #EAEBEC; /* 设置折叠面板内容的字体颜色 */
}



</style>
<script setup>
</script>
