<template>
  <div class="section-content">
    <h3>Coding Exercises</h3>
    <div v-for="(exercise, index) in exercises" :key="index" class="exercise-block">
      <h4>{{ exercise.title }}</h4>
      <p>{{ exercise.description }}</p>
      <textarea v-model="exercise.code" rows="10" cols="80"></textarea>
      <button @click="submitCode(index)">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      exercises: [
        {
          title: 'Reverse a String',
          description: 'Write a function to reverse a string.',
          code: '',
        },
        {
          title: 'Sum of Array',
          description: 'Write a function to return the sum of an array.',
          code: '',
        },
      ],
    };
  },
  methods: {
    submitCode(index) {
      alert(`Submitted code for: ${this.exercises[index].title}`);
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
  font-family: 'Segoe UI', sans-serif;
}

.section-content h3 {
  font-size: 24px;
  color: #003e7e;
  margin-bottom: 20px;
  border-bottom: 2px solid #007bff;
  padding-bottom: 10px;
}

.exercise-block {
  background-color: #ffffff;
  border-left: 5px solid #007bff;
  padding: 16px;
  margin-bottom: 24px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 123, 255, 0.08);
  
}

.exercise-block:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 123, 255, 0.15);
}

.exercise-block h4 {
  font-size: 20px;
  color: #0056b3;
  margin-bottom: 8px;
}

.exercise-block p {
  font-size: 16px;
  color: #444444;
  margin-bottom: 12px;
}

textarea {
  width: 100%;
  max-width: 100%;
  font-size: 14px;
  font-family: Consolas, 'Courier New', monospace;
  padding: 10px;
  border: 1px solid #007bff;
  border-radius: 6px;
  background-color: #e6f0ff;
  color: #003e7e;
  resize: vertical;
  box-sizing: border-box;
  margin-bottom: 12px;
}

textarea:focus {
  outline: none;
  border-color: #0056b3;
  background-color: #dceeff;
}

button {
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  
}

button:hover {
  background-color: #0056b3;
}
</style>
