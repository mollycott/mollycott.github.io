<template>
  <div id="app" class="full-width">
    <el-container>
      <!-- 顶部导航栏 -->
      <el-header class="navbar">
        <div class="nav-container">

          <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect" class="menu">
            <el-menu-item index="/overview" @click="navigateTo('overview')">工地总览</el-menu-item>
            <el-sub-menu index="/man">
              <template #title>人员管理</template>
              <el-menu-item index="/personnel-location" @click="handleSelect('personnel-location')">人员定位</el-menu-item>
<!--              <el-menu-item index="/role1Attendance" @click="handleSelect('role1Mantwo')">设备监控</el-menu-item>-->
            </el-sub-menu>
            <div class="logo-title">
              <span>智慧工地安全检测数字化看板</span>
            </div>
            <el-sub-menu index="/video-monitoring">
              <template #title>视频监控</template>
              <el-menu-item index="/video-monitoring" @click="handleSelect('video-monitoring')">视频监控</el-menu-item>
              <el-menu-item index="/equipment-monitoring" @click="handleSelect('equipment-monitoring')">设备监控</el-menu-item>
            </el-sub-menu>
            <el-menu-item index="/safety-inspection" @click="handleSelect('safety-inspection')">安全检测</el-menu-item>
          </el-menu>
        </div>
      </el-header>
      <!-- 主体内容 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const activeIndex = ref('1');
const router = useRouter();

const handleSelect = (key) => {
  activeIndex.value = key;
  navigateTo(key);
};

const navigateTo = (view) => {
  if (view) {
    router.push(`/${view}`);
  }
};
</script>

<style>
#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.logo-title {
  padding-top: 15px;
  text-align: center;
}
.nav-container {
  flex-grow: 1; /* 使主体内容占据剩余空间 */
  overflow: auto; /* 如果内容过多，可以滚动 */
}
.menu {
  display: flex;
  flex-grow: 1; /* 使菜单占满除标题外的剩余空间 */
  justify-content: space-between; /* 导航项均匀分布 */
  padding: 0;
  margin: 0;
}

</style>

