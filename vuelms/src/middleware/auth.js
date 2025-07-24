// src/middleware/auth.js

export default function auth(to, from, next) {
  const token = localStorage.getItem('token')

  if (to.meta.requiresAuth && !token) {
    return next('/')
  } else {
    next()
  }
}

