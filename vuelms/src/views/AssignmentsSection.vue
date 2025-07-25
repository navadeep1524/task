<template>
  <div class="section-content">
    <h3>Assignments</h3>
    <div v-for="assignment in assignments" :key="assignment.id" class="assignment-block">
      <h4>{{ assignment.title }}</h4>
      <p>{{ assignment.description }}</p>
      <input type="file" @change="uploadFile($event, assignment.id)" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      assignments: [
        { id: 1, title: 'HTML Form Page', description: 'Build a form with validation.' },
        { id: 2, title: 'JavaScript To-Do App', description: 'Create a task tracker.' },
      ],
    };
  },
  methods: {
    uploadFile(event, id) {
      const file = event.target.files[0];
      alert(`Uploaded for Assignment ${id}: ${file.name}`);
    },
  },
};
</script>
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

.assignment-block {
  background-color: #ffffff;
  border-left: 5px solid #007bff;
  padding: 16px;
  margin-bottom: 20px;
  border-radius: 8px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.assignment-block:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 10px rgba(0, 123, 255, 0.2);
}

.assignment-block h4 {
  font-size: 20px;
  color: #0056b3;
  margin-bottom: 8px;
}

.assignment-block p {
  font-size: 16px;
  color: #444444;
  margin-bottom: 12px;
}

input[type="file"] {
  padding: 6px 10px;
  border: 1px solid #007bff;
  border-radius: 6px;
  background-color: #e6f0ff;
  color: #003e7e;
  cursor: pointer;

}

input[type="file"]:hover {
  background-color: #d0e5ff;
  border-color: #0056b3;
}
</style>
