<template>
  <div class="dashboard">
    <h2>My Courses</h2>
    <ul class="course-list">
      <CourseCard v-for="course in courses" :key="course.id" :course="course" />
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import CourseCard from '@/components/CourseCard.vue';

export default {
  name: 'StudentDashboard',
  components: {
    CourseCard
  },
  data() {
    return {
      courses: [
        { id: 1, title: 'C++ Basics' },
        { id: 2, title: 'Java Object-Oriented Programming' },
        { id: 3, title: 'Python for Data Science' },
      ],
    };
  },
  async mounted() {
    try {
      const res = await axios.get('/api/student/courses');
      if (res.data && Array.isArray(res.data) && res.data.length) {
        this.courses = res.data;
      }
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  }
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
</style>
