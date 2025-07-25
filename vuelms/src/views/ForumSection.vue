<template>
  <div class="section-content">
    <h3>Course Forum</h3>
    <ul class="forum-list">
      <li v-for="post in posts" :key="post.id">
        <strong>{{ post.author }}:</strong> {{ post.message }}
      </li>
    </ul>
    <input v-model="newMessage" placeholder="Type your message..." />
    <button @click="postMessage">Post</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        { id: 1, author: 'Kumar', message: 'Can someone explain closures?' },
        { id: 2, author: 'Sekar', message: 'Sure! I can help.' },
      ],
      newMessage: '',
    };
  },
  methods: {
    postMessage() {
      if (this.newMessage.trim()) {
        this.posts.push({
          id: Date.now(),
          author: 'You',
          message: this.newMessage,
        });
        this.newMessage = '';
      }
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

.forum-list {
  list-style-type: none;
  padding: 0;
  margin-bottom: 20px;
}

.forum-list li {
  background-color: #ffffff;
  border-left: 5px solid #007bff;
  padding: 12px 16px;
  margin-bottom: 10px;
  border-radius: 8px;
  color: #333333;
  box-shadow: 0 2px 6px rgba(0, 93, 172, 0.1);
}

.forum-list li strong {
  color: #0056b3;
}

input[type="text"],
input[type="search"],
input {
  width: 100%;
  padding: 10px 12px;
  font-size: 14px;
  border: 1px solid #007bff;
  border-radius: 6px;
  box-sizing: border-box;
  margin-bottom: 10px;
  background-color: #e6f0ff;
  color: #003e7e;
}

input:focus {
  outline: none;
  background-color: #dceeff;
  border-color: #0056b3;
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
