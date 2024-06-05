<template>
  <div class="equipment-monitoring-container">
    <el-row :gutter="20">
      <!-- 设备菜单 -->
      <el-col :span="4">
        <el-aside>
          <el-menu :default-active="activeMenu" @select="handleMenuSelect" unique-opened>
            <!-- 添加一个按钮项，用于显示所有设备 -->
            <el-menu-item index="show-all" @click="showAllEquipment">
              <i class="el-icon-s-grid"></i>
              显示所有监控
            </el-menu-item>
            <!-- 动态生成菜单项 -->
            <el-submenu
                v-for="item in equipmentList"
                :key="item.id"
                :index="'equipment-' + item.id"
            >
              <template #title>
                <span>{{ item.name }}</span>
              </template>
              <el-menu-item :index="'equipment-' + item.id">{{item.name}}</el-menu-item>
            </el-submenu>


          </el-menu>
        </el-aside>
      </el-col>
      <!-- 监控大屏 -->
      <el-col :span="20">
        <el-main>
          <div class="monitoring-screen">
            <!-- 当前选中的设备详细信息 -->
            <div v-if="selectedEquipment" class="selected-equipment-info">
              <h2>{{ selectedEquipment.name }}</h2>
              <!-- 展示设备的详细信息 -->
              <img :src="selectedEquipment.imageUrl" alt="设备图片" class="equipment-image">
              <p>设备状态：{{ selectedEquipment.status }}</p>
              <!-- 其他详细信息 -->
            </div>
            <!-- 九宫格显示所有设备 -->
            <div v-if="showAllGrid" class="all-equipment-grid">
              <el-row :gutter="20">
                <!-- 每个col占据8个栅格，共3个设备一行 -->
                <el-col :span="8" v-for="(item) in equipmentList" :key="item.id">
                  <el-card class="equipment-card">
                    <img :src="item.imageUrl" class="equipment-image">
                    <div class="equipment-info">
                      <h3>{{ item.name }}</h3>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-main>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 假设的设备列表数据，包含设备名称和图片URL
const equipmentList = ref([
  {
    id: 1,
    name: '工地东门监控',
    imageUrl: 'https://ts1.cn.mm.bing.net/th/id/R-C.d99c68d04e569d778801e5810c410022?rik=8Tqdo3gVw8KkUA&riu=http%3a%2f%2fwww.czxnjk.com%2fuploadfiles%2fpictures%2fnews%2f20191120082746_7562.jpg&ehk=eBY4ckSNMUO6JywOy7JtkWPktXJROUMBPhQ99cFYsDE%3d&risl=&pid=ImgRaw&r=0',
  },
  {
    id: 2,
    name: '工地西门监控',
    imageUrl: 'https://ts1.cn.mm.bing.net/th/id/R-C.6799504c96c72a47499a861e6a162f01?rik=pBWvjGoWIIpMig&riu=http%3a%2f%2fwww.tovi.cn%2fimage%2ffangan%2fjianzhugongdi%2f1%2fschemebg03.jpg&ehk=%2bbRI1WxVUdra259IWRX9eMkgqssl%2bhumwUB6xudHh1Y%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',
  },
  {
    id: 3,
    name: '工地北门监控',
    imageUrl: 'https://ts1.cn.mm.bing.net/th/id/R-C.be678fdc194263412596e60823799759?rik=stWCgEV8vlgfIQ&riu=http%3a%2f%2fwww.hkcctv.net.cn%2fupLoad%2fimages%2f200326%2f20200326165181568156.jpg&ehk=1e48awkHWA2d6N%2fxLAwNpbZnj4a51d8ZH8d6USdqrz0%3d&risl=&pid=ImgRaw&r=0',
  },
  {
    id: 4,
    name: '工地南门监控',
    imageUrl: 'https://ts1.cn.mm.bing.net/th/id/R-C.e734d260f9045c921512c1a212c78385?rik=h802fCqoLbiNHQ&riu=http%3a%2f%2fimg.bj.wezhan.cn%2fcontent%2fsitefiles%2f2010115%2fimages%2f11786979_677896032417714656.jpeg&ehk=gafd9%2bUUC7bZiQW3eGq9UDPToKBLvHMPXJbWUkHrwNI%3d&risl=&pid=ImgRaw&r=0',
  },
  {
    id: 5,
    name: '高空作业监控',
    imageUrl: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.qdW1zorBg4QacyGg7gxeUAHaE8?rs=1&pid=ImgDetMain',
  },
  {
    id: 6,
    name: '施工路段监控',
    imageUrl: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.OFHGcHbTdTsxiS4NnKyyPgHaEy?rs=1&pid=ImgDetMain',
  },
]);

// 存储当前选中的设备信息
const selectedEquipment = ref(null);

// 控制是否显示所有设备的九宫格
const showAllGrid = ref(false);

// 默认激活的菜单项
const activeMenu = ref('equipment-1');

// 处理菜单选择事件
const handleMenuSelect = (key, indexPath) => {
  if (key === 'show-all') {
    showAllGrid.value = !selectedEquipment.value;
    selectedEquipment.value = null;
  } else {
    // 根据点击的菜单项key找到对应的设备
    const equipment = equipmentList.value.find(item => 'equipment-' + item.id === key);
    if (equipment) {
      selectedEquipment.value = equipment;
      showAllGrid.value = false;
    }
  }
};

// 显示所有设备的九宫格
const showAllEquipment = () => {
  selectedEquipment.value = null;
  showAllGrid.value = true;
};
</script>

<style scoped>
.equipment-monitoring-container {
  padding: 20px;
}


.equipment-image {
  width: 100%; /* 使图片宽度适应容器 */
  height: 400px; /* 设备图片的高度 */
  object-fit: cover; /* 保持图片比例 */
}



.monitoring-screen {
  height: 500px; /* 监控大屏的高度 */
  border: 1px solid #eee; /* 边框 */
  display: flex;
  align-items: center;
  justify-content: center;
}

.selected-equipment-info {
  padding: 20px;
  border: 1px solid #ddd;
  width: 100%;
}

.equipment-card {
  /* 设定容器的宽高比，可以根据实际需求调整 */
  height: 200px;
  box-sizing: border-box;
  padding: 10px;
}

.equipment-image {
  width: 100%;
  height: auto; /* 让图片高度自适应 */
  object-fit: cover; /* 保持宽高比，裁剪超出部分 */
  border-radius: 4px; /* 可选，为图片添加圆角 */
}

.equipment-info {
  text-align: center;
  margin-top: 10px;
}

el-submenu {
  margin-left: 10px;
}

.status-badge {
  position: absolute; /* 定位到图片左上角 */
  top: 10px;
  left: 10px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
}

.status-badge.fault {
  background-color: red;
  color: white;
}

.status-badge.normal {
  background-color: green;
  color: white;
}

.menu-item {
  display: flex;
  align-items: center;
}


/* 其他样式可以根据需要添加 */
</style>