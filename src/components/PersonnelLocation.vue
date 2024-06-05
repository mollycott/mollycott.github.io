<template>
  <div class="personnel-location-container">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-aside>
          <el-card>
            <h2>在线人员列表</h2>
            <el-list :data="personnelList">
              <el-list-item
                  @click="handlePersonClick(item)"
                  v-for="item in personnelList"
                  :key="item.name"
              >
                <el-row class="flex-row">
                  <el-col :span="10">
                    <el-avatar :src="item.avatar" />
                    <el-text class="person-name">{{ item.name }}</el-text>
                  </el-col>
                  <el-col :span="14" class="flex-center">
                    <el-tag :class="'tag-' + item.status">{{ statusText(item.status) }}</el-tag>
                    <el-button type="primary" @click.stop="viewTrajectory(item)">查看轨迹</el-button>
                  </el-col>
                </el-row>
              </el-list-item>
            </el-list>
          </el-card>
        </el-aside>
      </el-col>
      <el-col :span="18">
        <el-main>
          <div class="map-container">
            <map-service :locations="personnelLocations" :selected-person="selectedPerson" />
          </div>
        </el-main>

      </el-col>
    </el-row>


  </div>
  <el-dialog
      title="人员轨迹"
      :visible.sync="dialogVisible"
      width="500px"
      :before-close="handleClose">
    <p>轨迹信息显示区域</p>
    <!-- 这里可以展示轨迹的详细信息，例如使用地图组件或其他方式 -->
  </el-dialog>
</template>

<script setup>
import { ref } from 'vue';
import MapService from './MapContainer.vue';

// 假设的人员位置数据
const personnelLocations = ref([]);

const dialogVisible = ref(false);

// 对话框关闭前的回调
const handleClose = () => {
  // 可以在这里执行一些关闭前的清理工作
};

// 人员信息列表，每个人员都有名字、职位、头像和状态
const personnelList = ref([
  {
    name: '张三',
    position: '工程师',
    avatar: 'https://img.zcool.cn/community/01cfd95d145660a8012051cdb52093.png?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp',
    status: 'normal',
  },
  {
    name: '李四',
    position: '安全监督员',
    avatar: 'https://img.zcool.cn/community/01cfd95d145660a8012051cdb52093.png?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp',
    status: 'warning',
  },
  {
    name: '王五',
    position: '施工队长',
    avatar: 'https://img.zcool.cn/community/01cfd95d145660a8012051cdb52093.png?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp',
    status: 'danger',
  },
    {
      name: '赵六',
      position: '安全员',
      avatar: 'https://img.zcool.cn/community/01cfd95d145660a8012051cdb52093.png?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp',
      status: 'normal',
    },
    {
      name: '钱七',
      position: '安全员',
      avatar: 'https://via.placeholder.com/150',
      status: 'normal',
    },
    {
      name: '孙八',
      position: '安全员',
      avatar: 'https://via.placeholder.com/150',
      status: 'normal',
    },
    {
      name: '李九',
      position: '安全员',
      avatar: 'https://via.placeholder.com/150',
      status: 'normal',
    },
    {
      name: '周十',
      position: '安全员',
      avatar: 'https://via.placeholder.com/150',
      status: 'normal',
    },
  // ... 可以继续添加更多的人员信息
]);

// 存储当前被点击的人员信息
const selectedPerson = ref(null);

// 处理人员点击事件
const handlePersonClick = (person) => {
  selectedPerson.value = person;
  // 这里可以添加代码以高亮显示地图上对应的标记或显示详细信息
};

// 查看人员的轨迹
const viewTrajectory = (person) => {
  console.log('Viewing trajectory for:', person);
  // 显示对话框并传递人员信息
  selectedPerson.value = person;
  dialogVisible.value = true;
  console.log(dialogVisible.value);
  // 这里可以添加代码以显示人员的轨迹信息
};

// 根据状态返回不同的类名
const statusClass = (status) => {
  switch (status) {
    case 'danger':
      return 'text-danger';
    case 'warning':
      return 'text-warning';
    case 'normal':
    default:
      return 'text-normal';
  }
};

// 根据状态返回不同的标签颜色
const statusColor = (status) => {
  switch (status) {
    case 'danger':
      return 'danger';
    case 'warning':
      return 'warning';
    case 'normal':
    default:
      return 'success';
  }
};

// 根据状态返回不同的标签文本
const statusText = (status) => {
  switch (status) {
    case 'danger':
      return '危险';
    case 'warning':
      return '警告';
    case 'normal':
    default:
      return '正常';
  }
};
</script>

<style scoped>
.personnel-location-container {
  padding: 20px;
}

.map-container {
  height: 500px; /* 地图容器的高度 */
  border: 1px solid #eee; /* 地图容器的边框 */
}

.el-avatar {
  margin-right: 10px; /* 头像右边距 */
}

/* 确保列表项内的文本和头像对齐 */
.el-list-item {
  display: flex;
  align-items: center;
}

/* 人员名字样式，确保文字颜色和对齐 */
.person-name {
  margin-left: 10px; /* 保持一定间隔 */
  font-size: 14px; /* 名字字号，可根据实际情况调整 */
  color: #000; /* 名字颜色 */
}

/* 列表项的操作按钮和标签样式 */
.el-list-item__content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* 根据状态返回不同的标签颜色 */
.status-color-normal {
  color: green;
}

.status-color-danger {
  color: red;
}

.status-color-warning {
  color: yellow;
}
.tag-normal {
  background-color: #e6f7ef; /* 正常状态的标签背景色 */
  color: #67c23a; /* 正常状态的标签文字颜色 */
}

.tag-danger {
  background-color: #fef0f0; /* 危险状态的标签背景色 */
  color: #f56c6c; /* 危险状态的标签文字颜色 */
}

.tag-warning {
  background-color: #fdf6ec; /* 警告状态的标签背景色 */
  color: #e6a23c; /* 警告状态的标签文字颜色 */
}

/* 其他样式可以根据需要添加 */
</style>
