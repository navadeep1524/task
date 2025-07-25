<template>
  <div>
    <h1 class="main-heading">Learning Management System</h1>
    <div class="login-container">
      <h2>Login</h2>

      <form @submit.prevent="handleLogin">
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

        <p class="error" v-if="errors.general">{{ errors.general }}</p>

        <button type="submit">Login</button>
      </form>

      <p class="success" v-if="successMessage">{{ successMessage }}</p>

      <p class="signup-link">
        Don't have an account?
        <router-link to="/signup">Sign up here</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
      errors: {},
      successMessage: '',
    }
  },
  mounted() {
    this.email = this.$route.query.email || ''
    this.password = this.$route.query.password || ''
  },
  methods: {
    async handleLogin() {
      this.errors = {}
      this.successMessage = ''

      if (!this.email) this.errors.email = 'Email is required.'
      if (!this.password) this.errors.password = 'Password is required.'
      if (Object.keys(this.errors).length > 0) return

      try {
        const res = await axios.post('http://localhost:3333/login', {
          email: this.email,
          password: this.password,
        })

        const token = res.data.token
        const role = res.data.role 

        localStorage.setItem('token', token)
        localStorage.setItem('role', role)

        this.successMessage = 'Login successful!'

        setTimeout(() => {
          if (role === 'student') {
            this.$router.push('/student/dashboard')
          } else if (role === 'instructor') {
            this.$router.push('/instructor/dashboard')
          } else {
            this.errors.general = 'Invalid user role.'
          }
        }, 1000)
      } catch (error) {
        console.error('Login error:', error)
        this.errors.general =
          error?.response?.data?.message || 'Login failed. Please check credentials.'
      }
    },
  },
}
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 60px auto;
  padding: 30px;
  border-radius: 10px;
  background: #f0f4ff;
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

input {
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

.signup-link {
  margin-top: 15px;
  text-align: center;
  font-size: 16px;
}
.signup-link a {
  color: #1e40af;
  text-decoration: underline;
}
</style>
