import { createRouter, createWebHistory } from 'vue-router';

import LoginPage from '../views/Login.vue';
import StudentDashboard from '../views/StudentDashbord.vue';
import CourseDetail from '../views/CourseDetaill.vue';
import InstructorDashboard from '../views/InstructorDashboard.vue';
import InstructorOverview from '../views/InstructorOverview.vue';
import LectureSection from '../views/LectureSection.vue';
import CodingSection from '../views/CodingSection.vue';
import GradesSection from '../views/GradesSection.vue';
import AssignmentsSection from '../views/AssignmentsSection.vue';
import ForumSection from '../views/ForumSection.vue';

const routes = [
  { path: '/', name: 'Login', component: LoginPage },
  { path: '/student/dashboard', name: 'StudentDashboard', component: StudentDashboard },
  {
    path: '/student/course/:id',
    name: 'CourseDetail',
    component: CourseDetail,
    props: true,
    children: [
      {
        path: 'lectures',
        name: 'LectureSection',
        component: LectureSection,
      },
      {
        path: 'coding',
        name: 'CodingSection',
        component: CodingSection,
      },
      {
        path: 'grades',
        name: 'GradesSection',
        component: GradesSection,
      },
      {
        path: 'assignments',
        name: 'AssignmentsSection',
        component: AssignmentsSection,
      },
      {
        path: 'forum',
        name: 'ForumSection',
        component: ForumSection,
      },
    ],
  },
  { path: '/instructor/dashboard', name: 'InstructorDashboard', component: InstructorDashboard },
  { path: '/instructor/overview', name: 'InstructorOverview', component: InstructorOverview },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
