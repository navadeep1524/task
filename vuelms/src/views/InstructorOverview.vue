<template>
  <div class="course-detail">
    <h2>{{ course.title }} (Instructor View)</h2>

    <section class="course-section">
      <h3>Assign New Assignment</h3>
      <form @submit.prevent="assignAssignment">
        <input v-model="newAssignmentTitle" type="text" placeholder="Assignment Title" required />
        <button type="submit">Create</button>
      </form>
    </section>

    <section class="course-section">
      <h3>Assignments</h3>
      <ul>
        <li v-for="assignment in course.assignments" :key="assignment.id">
          {{ assignment.title }} - Submissions: {{ assignment.submissions.length }}
        </li>
      </ul>
    </section>

    <section class="course-section">
      <h3>Students</h3>
      <ul>
        <li v-for="student in course.students" :key="student.id">
          {{ student.name }} - Grade:
          <input v-model="student.grade" type="text" style="width: 60px;" />
          <button @click="updateGrade(student.id, student.grade)">Save</button>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'InstructorCourseDetail',
  data() {
    return {
      course: {
        title: '',
        assignments: [],
        students: [],
      },
      newAssignmentTitle: '',
    }
  },
  mounted() {
    this.fetchCourseDetail()
  },
  methods: {
    getCourseId() {
      return this.$route.params.id
    },
    async fetchCourseDetail() {
      try {
        const res = await axios.get(`/api/instructor/course/${this.getCourseId()}`)
        this.course = res.data
      } catch (error) {
        console.error('Error loading instructor course detail:', error)
      }
    },
    async assignAssignment() {
      try {
        await axios.post(`/api/instructor/course/${this.getCourseId()}/assignments`, {
          title: this.newAssignmentTitle,
        })
        this.newAssignmentTitle = ''
        this.fetchCourseDetail()
      } catch (error) {
        console.error('Error assigning assignment:', error)
      }
    },
    async updateGrade(studentId, grade) {
      try {
        await axios.post(`/api/instructor/course/${this.getCourseId()}/grade`, {
          studentId,
          grade,
        })
        alert('Grade updated')
      } catch (error) {
        console.error('Error updating grade:', error)
      }
    },
  },
}
</script>

<style scoped>
.course-detail {
  padding: 2rem;
  background-color: #f7fbff;
}

h2 {
  color: #003366;
  margin-bottom: 1.5rem;
  text-align: center;
}

.course-section {
  background: #e6f0fa;
  padding: 1rem;
  margin-bottom: 1.5rem;
  border-left: 4px solid #0077cc;
  border-radius: 6px;
}

.course-section h3 {
  color: #005fa3;
  margin-bottom: 0.5rem;
}

input[type='text'] {
  padding: 0.3rem;
  margin-right: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
}

button {
  background-color: #0077cc;
  color: white;
  border: none;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #005fa3;
}
</style>
