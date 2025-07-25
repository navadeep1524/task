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

</script>

<style scoped>

</style>
