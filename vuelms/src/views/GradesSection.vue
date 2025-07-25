<template>
  <div class="section-content">
    <h3>Grades</h3>
    <table class="grades-table">
      <thead>
        <tr>
          <th>Task</th>
          <th>Grade</th>
          <th>Feedback</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="grade in grades" :key="grade.task">
          <td>{{ grade.task }}</td>
          <td>{{ grade.score }}</td>
          <td>{{ grade.feedback }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      grades: [
        { task: 'Assignment 1', score: '90%', feedback: 'Great job!' },
        { task: 'Coding Test', score: '80%', feedback: 'Improve logic' },
      ],
    };
  },
};
</script>

<style scoped>
.grades-table {
  width: 100%;
  border-collapse: collapse;
}

.grades-table th,
.grades-table td {
  border: 1px solid #ccc;
  padding: 0.5rem;
  text-align: left;
}
</style>
<style scoped>
.section-content {
  padding: 20px;
  background-color: #f0f6ff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 93, 172, 0.1);
}

.section-content h3 {
  font-size: 24px;
  color: #003e7e;
  margin-bottom: 20px;
  border-bottom: 2px solid #007bff;
  padding-bottom: 10px;
}

.grades-table {
  width: 100%;
  border-collapse: collapse;
  background-color: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 123, 255, 0.1);
}

.grades-table th {
  background-color: #007bff;
  color: white;
  padding: 12px;
  font-size: 16px;
  text-align: left;
  border-bottom: 2px solid #0056b3;
}

.grades-table td {
  padding: 12px;
  font-size: 14px;
  color: #333333;
  border-bottom: 1px solid #ddd;
}

.grades-table tr:hover {
  background-color: #e6f0ff;
}
</style>
