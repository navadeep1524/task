<template>
  <div class="dashboard">
    <h2>My Courses (Instructor)</h2>
    <ul class="course-list">
      <li v-for="course in courses" :key="course.id" class="course-card">
        <span class="course-title">{{ course.title }}</span>
        <router-link :to="`/instructor/course/${course.id}`" class="view-btn">View Course</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'InstructorDashboard',
  data() {
    return {
      courses: []
    }
  },
  mounted() {
    this.fetchCourses()
  },
  methods: {
    async fetchCourses() {
      try {
        const response = await axios.get('/api/instructor/courses')
        this.courses = response.data
      } catch (error) {
        console.error('Error fetching instructor courses:', error)
      }
    }
  }
}
</script>

<style scoped>
.dashboard {
  padding: 2rem;
  font-family: 'Segoe UI', sans-serif;
  background: #f0f8ff;
  min-height: 100vh;
}

h2 {
  color: #003366;
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
  border-left: 5px solid #0077cc;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 600px;
  width: 100%;
}

.course-title {
  font-weight: bold;
  color: #003366;
}

.view-btn {
  padding: 0.5rem 1rem;
  background-color: #0077cc;
  color: white;
  border-radius: 4px;
  font-weight: bold;
  text-decoration: none;
}

.view-btn:hover {
  background-color: #005fa3;
}
</style>
