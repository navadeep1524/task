<template>
  <li class="course-card">
    <span class="course-title">{{ course.title }}</span>
    <router-link :to="`/student/course/${course.id}`" class="view-btn">View Course</router-link>
  </li>
</template>

<script>
export default {
  name: 'CourseCard',
  props: {
    course: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
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
