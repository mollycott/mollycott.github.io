<script setup>
import { onMounted, ref, onUnmounted } from "vue";
import AMapLoader from "@amap/amap-jsapi-loader";

const map = ref(null);
const markers = ref([]);

// 厦门理工学院内的固定坐标点，这里扩展了一些示例数据
const FIXED_COORDINATES = [
  [118.0874, 24.6238], // 示例坐标点1
  [118.0875, 24.6237], // 示例坐标点2
  [118.0872, 24.6239], // 示例坐标点3
  // ... 可以继续添加更多坐标点
];

const initMap = () => {
  if (!map.value) {
    AMapLoader.load({
      key: "2a0873733c142bca38b0d805808b1de2",
      version: "2.0",
      plugins: ["AMap.Marker", "AMap.InfoWindow"],
    })
        .then((AMap) => {
          map.value = new AMap.Map("container", {
            viewMode: "3D",
            zoom: 18, // 根据需要适当调整缩放级别
            center: [118.08732, 24.62363], // 厦门理工学院的中心坐标
          });

          FIXED_COORDINATES.forEach((coord, index) => {
            const marker = new AMap.Marker({
              position: coord,
              map: map.value,
              title: `人员${index + 1}`,
            });

            const info = new AMap.InfoWindow({
              content: `<div>人员${index + 1} - 工程师</div>`,
              offset: new AMap.Pixel(0, -30),
            });

            AMap.event.addListener(marker, "click", () => {
              info.open(map.value, marker.getPosition());
            });

            markers.value.push(marker);
          });
        })
        .catch((e) => {
          console.error("地图加载失败", e);
        });
  }
};

const destroyMap = () => {
  if (map.value) {
    map.value.destroy();
  }
};

onMounted(() => {
  window._AMapSecurityConfig = {
    securityJsCode: "8ca936d47ce2e5e706c4561cefccb7d7",
  };
  initMap();
});

onUnmounted(() => {
  destroyMap();
});
</script>

<template>
  <div id="container" style="width: 100%; height: 800px;"></div>
</template>

<style scoped>
#container {
  width: 100%;
  height: 800px;
}
</style>