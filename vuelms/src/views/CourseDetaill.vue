<template>
  <div class="course-detail">
    <h2>Course Sections</h2>
    <div class="section-list">
      <router-link :to="`${$route.path}/lectures`" class="section-btn">Video Lectures</router-link>
      <router-link :to="`${$route.path}/coding`" class="section-btn">Coding Exercises</router-link>
      <router-link :to="`${$route.path}/grades`" class="section-btn">Grades</router-link>
      <router-link :to="`${$route.path}/assignments`" class="section-btn">Assignments</router-link>
      <router-link :to="`${$route.path}/forum`" class="section-btn">Forum</router-link>
    </div>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'CourseDetail',
};
</script>

<style scoped>
.course-detail {
  padding: 2rem;
  background: #f0f8ff;
  min-height: 100vh;
  font-family: 'Segoe UI', sans-serif;
}

h2 {
  text-align: center;
  color: #0d47a1;
  margin-bottom: 2rem;
}

.section-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 600px;
  margin: 0 auto;
}

.section-btn {
  display: block;
  background-color: #e3f2fd;
  padding: 1rem;
  text-align: left;
  border-left: 5px solid #2196f3;
  border-radius: 8px;
  font-weight: 600;
  color: #0d47a1;
  text-decoration: none;
}

.section-btn:hover {
  background-color: #bbdefb;
}
</style>
