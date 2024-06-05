import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import './styles/element/index.scss'// 引入自定义主题
// import './styles/element-variables.css'; // 引入自定义主题
import App from './App.vue';
import router from './router'; // 引入上面创建的router

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.mount('#app');