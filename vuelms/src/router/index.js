import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../views/Login.vue';
import StudentDashboard from '../views/StudentDashbord.vue';
import CourseDetail from '../views/CourseDetaill.vue';
import InstructorDashboard from '../views/InstructorDashboard.vue';
import InstructorOverview from '../views/InstructorOverview.vue';

const routes = [
  { path: '/', name: 'Login', component: LoginPage },
  { path: '/student/dashboard', name: 'StudentDashboard', component: StudentDashboard },
  { path: '/student/course/:id', name: 'CourseDetail', component: CourseDetail, props: true },
  { path: '/instructor/dashboard', name: 'InstructorDashboard', component: InstructorDashboard },
  { path: '/instructor/overview', name: 'InstructorOverview', component: InstructorOverview },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;