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
</script>

<style scoped>

</style>
