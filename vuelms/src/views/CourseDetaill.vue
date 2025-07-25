<template>
  <div class="course-detail">
    <h2>{{ course.title }}</h2>

    <section class="course-section">
      <h3>Video Lectures</h3>
      <ul>
        <li v-for="video in course.videos" :key="video.id">{{ video.title }}</li>
      </ul>
    </section>

    <section class="course-section">
      <h3>Coding Exercises</h3>
      <ul>
        <li v-for="exercise in course.exercises" :key="exercise.id">{{ exercise.title }}</li>
      </ul>
    </section>

    <section class="course-section">
      <h3>Grades</h3>
      <p>{{ course.grade }}</p>
    </section>

    <section class="course-section">
      <h3>Assignments</h3>
      <ul>
        <li v-for="assignment in course.assignments" :key="assignment.id">
          <div class="assignment-item">
            {{ assignment.title }} - Feedback: {{ assignment.feedback }}
            <form @submit.prevent="submitAssignment(assignment.id)">
              <input type="file" @change="e => selectedFile = e.target.files[0]" />
              <button type="submit">Submit</button>
            </form>
          </div>
        </li>
      </ul>
    </section>

    <section class="course-section">
      <h3>Forum</h3>
      <ul>
        <li v-for="post in course.forum" :key="post.id">{{ post.content }}</li>
      </ul>
    </section>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CourseDetail',
  props: ['id'],
  data() {
    return {
      course: {
        title: '',
        videos: [],
        exercises: [],
        assignments: [],
        forum: [],
        grade: '',
      },
      selectedFile: null,
    };
  },
  mounted() {
    this.fetchCourseDetails();
  },
  methods: {
    async fetchCourseDetails() {
      try {
        const res = await axios.get(`/api/student/course/${this.id}`);
        this.course = res.data;
      } catch (error) {
        console.error('Failed to fetch course data', error);
      }
    },
    async submitAssignment(assignmentId) {
      if (!this.selectedFile) return alert('Please select a file before submitting');
      const formData = new FormData();
      formData.append('file', this.selectedFile);
      try {
        await axios.post(`/api/student/assignment/${assignmentId}/submit`, formData);
        alert('Assignment submitted!');
        this.selectedFile = null;
      } catch (error) {
        alert('Failed to submit assignment.');
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
.course-detail {
  padding: 2rem;
  background-color: #f0f8ff;
  font-family: 'Segoe UI', sans-serif;
}

h2 {
  color: #0d47a1;
  margin-bottom: 1rem;
}

.course-section {
  background: #e3f2fd;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  border-left: 5px solid #2196f3;
}

.course-section h3 {
  color: #1565c0;
  margin-bottom: 0.5rem;
}

.assignment-item {
  margin-bottom: 1rem;
}

button {
  background-color: #2196f3;
  color: white;
  border: none;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 0.3rem;
}

button:hover {
  background-color: #1976d2;
}

input[type='file'] {
  margin-top: 0.5rem;
}
</style>
