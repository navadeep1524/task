<template>
  <div class="section-content">
    <h3>Video Lectures</h3>
    <video v-for="video in videos" :key="video.id" controls width="600">
      <source :src="video.url" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videos: [
        { id: 1, url: '/videos/intro.mp4' },
        { id: 2, url: '/videos/variables.mp4' },
      ],
    };
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

video {
  display: block;
  width: 100%;
  max-width: 600px;
  margin-bottom: 20px;
  border: 3px solid #007bff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 93, 172, 0.1);
  background-color: #000;
}
</style>
