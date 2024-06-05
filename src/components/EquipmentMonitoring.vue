<template>
  <div class="equipment-monitoring-container">
    <el-row :gutter="20">
      <!-- 设备菜单 -->
      <el-col :span="4">
        <el-aside>
          <el-menu :default-active="activeMenu" @select="handleMenuSelect" unique-opened style="width: 250px">
            <!-- 添加一个按钮项，用于显示所有设备 -->
            <el-menu-item index="show-all" @click="showAllEquipment" v-model = "activeMenu">
              <i class="el-icon-s-grid"></i>
              显示所有设备
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

              <el-menu-item :index="'equipment-' + item.id">
                <el-row>
                  <el-col :span="18">{{item.name}}</el-col>

                  <el-col :span="6">
                    <el-button type="primary" size="mini" @click="deleteEquipment(item.id)">查看详情</el-button>
                  </el-col>
                </el-row>
              </el-menu-item>

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
                      <!-- 添加一行来显示设备状态 -->
                      <p>设备状态：<span :class="statusClass(item.status)">{{ item.status }}</span></p>
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
    name: '塔吊1',
    imageUrl: 'https://ts1.cn.mm.bing.net/th/id/R-C.18a32ec6fcaec628b526b5d5924820dc?rik=E6YWn9XUYPwhlQ&riu=http%3a%2f%2fwww.yfjzsb.com%2fuploads%2fallimg%2f190726%2f1-1ZH6144319215.jpg&ehk=Wmm2IurCHUBNraGY42sXDr4X64Ze0XYpHrPArGZfC6w%3d&risl=&pid=ImgRaw&r=0',
    status: '故障'
  },
  {
    id: 2,
    name: '挖掘机1',
    imageUrl: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.21fppGEER0HNkNgAaX3nLAHaFj?rs=1&pid=ImgDetMain',
    status: '正常'
  },
  {
    id: 3,
    name: '起重机1',
    imageUrl: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.5KQ5SIlCKtrtvYIwnLjcJwHaE6?rs=1&pid=ImgDetMain',
    status: '正常'
  },
  {
    id: 4,
    name: '搅拌车1',
    imageUrl: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.Ez6r6na_Y6a_q4-P4vKULgHaE8?rs=1&pid=ImgDetMain',
    status: '正常'
  },
  {
    id: 5,
    name: '推土机1',
    imageUrl: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.OBgoHrbjqjFtVNeiBh2vQQHaEM?rs=1&pid=ImgDetMain',
    status: '正常'
  },
  {
    id: 6,
    name: '装载机1',
    imageUrl: 'https://www.lovol.com/upload/images/2020/12/08/l/95adb6663ace4ecb910764895024f9fa.jpg',
    status: '正常'
  },
  {
    id: 7,
    name: '自卸车1',
    imageUrl: 'https://img4.kcimg.cn/imgc/0/93/93225.jpg_1200x800.jpg',
    status: '正常'
  },
  {
    id: 8,
    name: '混凝土泵车1',
    imageUrl: 'https://ts1.cn.mm.bing.net/th/id/R-C.a325890aeef81a1f428943e877da1d92?rik=qnmGnRqAbV2R2A&riu=http%3a%2f%2fwww.hnsmzk.com%2fUploads%2fEditor%2f2019-08-21%2f5d5c9e0156427.JPG&ehk=wT9a%2bhyjRew4e%2fMltr3QxQ8PC5xb6r%2bRUwKg1LUuysg%3d&risl=&pid=ImgRaw&r=0',
    status: '正常'
  },
  {
    id: 9,
    name: '钢筋加工机1',
    imageUrl: 'https://ts1.cn.mm.bing.net/th/id/R-C.f4acfb14bd15f1a16e4c4b8f77c1812a?rik=7euES6vVsko2eQ&riu=http%3a%2f%2fwww.sdjiantouzg.com%2fupfile%2fimages%2f2020%2f03%2f21%2f15847616252651349.jpg&ehk=Mm%2bqpuMfpAfLUh9ROorHTPssK79A%2bNjQqPBvkle1hWU%3d&risl=&pid=ImgRaw&r=0',
    status: '正常'
  },
]);

// 存储当前选中的设备信息
const selectedEquipment = ref(null);

// 控制是否显示所有设备的九宫格
const showAllGrid = ref(false);

// 默认激活的菜单项
const activeMenu = ref('equipment-1');

const initAllEquipment = () => {
  showAllGrid.value = true;
  selectedEquipment.value = null;
};

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

const statusClass = (status) => {
  switch (status) {
    case '故障':
      return 'status-fault';
    case '维护中':
      return 'status-maintenance';
    case '正常':
    default:
      return 'status-normal';
  }
};
</script>

<style scoped>
.equipment-monitoring-container {
  padding: 20px;
}


.equipment-image {
  width: 100%; /* 使图片宽度适应容器 */
  height: auto; /* 设备图片的高度 */
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
  height: 400px; /* 让图片高度自适应 */
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
