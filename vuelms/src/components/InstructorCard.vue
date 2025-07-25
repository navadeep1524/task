<template>
  <li class="course-card">
    <span class="course-title">{{ course.title }}</span>
    <div class="btn-group">
      <router-link :to="`/instructor/course/${course.id}`" class="view-btn">View</router-link>
      <button @click="$emit('edit', course)" class="edit-btn">Edit</button>
      <button @click="$emit('delete', course.id)" class="delete-btn">Delete</button>
    </div>
  </li>
</template>

<script>
export default {
  name: 'InstructorCourseCard',
  props: {
    course: Object
  }
}
</script>

<style scoped>
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

.btn-group {
  display: flex;
  gap: 0.5rem;
}

.view-btn,
.edit-btn,
.delete-btn {
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  font-weight: bold;
  text-decoration: none;
  color: white;
}

.view-btn {
  background-color: #0077cc;
}
.view-btn:hover {
  background-color: #005fa3;
}

.edit-btn {
  background-color: #f0ad4e;
}
.edit-btn:hover {
  background-color: #d68910;
}

.delete-btn {
  background-color: #d9534f;
}
.delete-btn:hover {
  background-color: #c9302c;
}
</style>
