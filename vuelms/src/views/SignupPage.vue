<template>
  <div>
    <h1 class="main-heading">Learning Management System</h1>
    <div class="signup-container">
      <h2>Create Account</h2>

      <form @submit.prevent="handleSignup">
        <div class="form-group">
          <label>Name:</label>
          <input type="text" v-model="name" placeholder="Enter your name" />
          <p class="error" v-if="errors.name">{{ errors.name }}</p>
        </div>

        <div class="form-group">
          <label>Email:</label>
          <input type="email" v-model="email" placeholder="Enter your email" />
          <p class="error" v-if="errors.email">{{ errors.email }}</p>
        </div>

        <div class="form-group">
          <label>Password:</label>
          <input type="password" v-model="password" placeholder="Enter your password" />
          <p class="error" v-if="errors.password">{{ errors.password }}</p>
        </div>

        <div class="form-group">
          <label>Role:</label>
          <select v-model="role">
            <option disabled value="">Select a role</option>
            <option value="student">Student</option>
            <option value="instructor">Instructor</option>
          </select>
          <p class="error" v-if="errors.role">{{ errors.role }}</p>
        </div>

        <p class="error" v-if="errors.general">{{ errors.general }}</p>

        <button type="submit">Signup</button>
      </form>

      <p class="success" v-if="successMessage">{{ successMessage }}</p>

      <p class="login-link">
        Already have an account?
        <router-link to="/login">Login here</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SignupPage',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      role: '',
      errors: {},
      successMessage: '',
    }
  },
  methods: {
    async handleSignup() {
      this.errors = {}
      this.successMessage = ''

      
      if (!this.name) this.errors.name = 'Name is required.'
      if (!this.email) this.errors.email = 'Email is required.'
      if (!this.password) this.errors.password = 'Password is required.'
      if (!this.role) this.errors.role = 'Role is required.'
      if (Object.keys(this.errors).length > 0) return

      try {
        const res = await axios.post('http://localhost:3333/signup', {
          name: this.name,
          email: this.email,
          password: this.password,
          role: this.role,
        })

        this.successMessage = 'Signup successful! Redirecting to login...'

        setTimeout(() => {
          this.$router.push({
            path: '/login',
            query: { email: this.email, password: this.password }, 
          })
        }, 1500)
      } catch (error) {
        console.error('Signup error:', error)
        this.errors.general =
          error?.response?.data?.message || 'Signup failed. Please try again.'
      }
    },
  },
}
</script>

<style scoped>
.signup-container {
  max-width: 400px;
  margin: 60px auto;
  padding: 30px;
  border-radius: 10px;
  background: #f5faff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  color: #0a0404;
  font-family: 'Segoe UI';
  font-size: 18px;
}

h1 {
  text-align: center;
  color: #000042;
  font-size: 35px;
  font-weight: bold;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 26px;
  color: #222;
}

.form-group {
  margin-bottom: 16px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 6px;
}

input,
select {
  width: 100%;
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #333;
  font-size: 14px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #1e40af;
  color: white;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background-color: #1a237e;
}

.error {
  color: red;
  font-size: 15px;
  margin-top: 4px;
}

.success {
  color: green;
  margin-top: 20px;
  font-size: 20px;
  text-align: center;
}

.login-link {
  margin-top: 15px;
  text-align: center;
  font-size: 16px;
}
.login-link a {
  color: #1e40af;
  text-decoration: underline;
}
</style>
