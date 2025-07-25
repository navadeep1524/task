<template>
  <div>
    <header v-if="!hideNavRoutes.includes(currentRoute.path)">
      <nav>
        
      </nav>
    </header>

    <RouterView />
  </div>
</template>

<script>
import { RouterLink, RouterView, useRoute } from 'vue-router';

export default {
  name: 'AppLayout',
  components: {
    RouterLink,
    RouterView,
  },
  data() {
    return {
      hideNavRoutes: ['/login', '/register'],
    };
  },
  computed: {
    currentRoute() {
      return this.$route;
    },
  },
};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 20px 0;
}

nav a {
  text-decoration: none;
  padding: 10px 20px;
  background-color: #d9a8f2;
  color: black;
  border-radius: 8px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

nav a.router-link-active {
  background-color: #a366d3;
  color: white;
}
</style>
