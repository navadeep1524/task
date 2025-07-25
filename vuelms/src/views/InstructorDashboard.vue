<template>
  <div class="dashboard">
    <h2>My Courses (Instructor)</h2>
    <ul class="course-list">
      <InstructorCourseCard
        v-for="course in limitedCourses"
        :key="course.id"
        :course="course"
        @edit="editCourse"
        @delete="deleteCourse"
      />
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import InstructorCourseCard from '../components/InstructorCard.vue'

export default {
  name: 'InstructorDashboard',
  components: { InstructorCourseCard },
  data() {
    return {
      courses: []
    }
  },
  computed: {
    
    limitedCourses() {
      return this.courses.slice(0, 3)
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
        console.error('Error fetching courses:', error)
      }
    },
    editCourse(course) {
      
      this.$router.push(`/instructor/course/${course.id}/edit`)
    },
    async deleteCourse(courseId) {
      if (confirm('Are you sure you want to delete this course?')) {
        try {
          await axios.delete(`/api/instructor/course/${courseId}`)
          this.courses = this.courses.filter(c => c.id !== courseId)
        } catch (error) {
          console.error('Error deleting course:', error)
        }
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
</style>
