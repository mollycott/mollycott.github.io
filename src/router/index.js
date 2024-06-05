import { createRouter, createWebHistory } from 'vue-router';
import SiteOverview from '../components/SiteOverview.vue';
import PersonnelLocation from '../components/PersonnelLocation.vue';
import EquipmentMonitoring from '../components/EquipmentMonitoring.vue';
import VideoMonitoring from '../components/VideoMonitoring.vue';
import EnvironmentMonitoring from '../components/EnvironmentMonitoring.vue';
import SafetyInspection from '../components/SafetyInspection.vue';
const routes = [
    {
        path: '/overview', // 定义工地总览的路由路径
        name: 'SiteOverview',
        component: SiteOverview,
    },
    {
        path: '/personnel-location',
        name: 'PersonnelLocation',
        component: PersonnelLocation,
    },
    {
        path: '/equipment-monitoring',
        name: 'EquipmentMonitoring',
        component: EquipmentMonitoring,
    },
    {
        path: '/video-monitoring',
        name: 'VideoMonitoring',
        component: VideoMonitoring,
    },
    {
        path: '/environment-monitoring',
        name: 'EnvironmentMonitoring',
        component: EnvironmentMonitoring,
    },
    {
        path: '/safety-inspection',
        name: 'SafetyInspection',
        component: SafetyInspection,
    },



];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
