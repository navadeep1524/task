<template>
  <div class="login-page">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />

      
      <select v-model="role" required>
        <option disabled value="">Select Role</option>
        <option value="student">Student</option>
        <option value="instructor">Instructor</option>
      </select>

      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
      role: '', 
    };
  },
  methods: {
    async handleLogin() {
      try {
        const res = await axios.post('/api/login', {
          email: this.email,
          password: this.password,
          role: this.role, 
        });

        const user = res.data;

        if (user.role === 'student') {
          this.$router.push('/student/dashboard');
        } else if (user.role === 'instructor') {
          this.$router.push('/instructor/dashboard');
        } else {
          alert('Invalid role');
        }
      } catch (error) {
        alert('Login failed. Check credentials.');
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
.login-page {
  max-width: 400px;
  margin: 4rem auto;
  padding: 2rem;
  background-color: #e3f2fd;
  border-radius: 8px;
  border-left: 6px solid #2196f3;
  font-family: 'Segoe UI', sans-serif;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.login-page h2 {
  text-align: center;
  color: #0d47a1;
  margin-bottom: 1.5rem;
}

form {
  display: flex;
  flex-direction: column;
}

input,
select {
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #2196f3;
  color: white;
  border: none;
  padding: 0.8rem;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
}

button:hover {
  background-color: #1976d2;
}
</style>
