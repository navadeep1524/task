<template>
  <div class="dashboard">
    <h2>My Courses</h2>
    <ul class="course-list">
      <li v-for="course in courses" :key="course.id" class="course-card">
        <span class="course-title">{{ course.title }}</span>
        <router-link :to="`/student/course/${course.id}`" class="view-btn">View Course</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'StudentDashboard',
  data() {
    return {
      courses: [],
    };
  },
  mounted() {
    this.fetchCourses();
  },
  methods: {
    async fetchCourses() {
      try {
        const res = await axios.get('/api/student/courses');
        this.courses = res.data;
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    },
  },
};
</script>

<style scoped>
.dashboard {
  padding: 2rem;
  font-family: 'Segoe UI', sans-serif;
  background: #f5faff;
  min-height: 100vh;
}

h2 {
  color: #0d47a1;
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 2rem;
}

.course-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: center;
}

.course-card {
  background-color: #e3f2fd;
  padding: 1rem 1.5rem;
  border-left: 5px solid #2196f3;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}

.course-title {
  font-weight: 600;
  color: #0d47a1;
  font-size: 1.1rem;
}

.view-btn {
  padding: 0.5rem 1rem;
  background-color: #2196f3;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  white-space: nowrap;
}

.view-btn:hover {
  background-color: #1976d2;
}
</style>
