<template>
  <div class="card">
    <h3 class="title">{{ title }}</h3>
    <div class="rating">{{ stars }} ★</div>
    <p class="description">{{ description }}</p>
    <p class="technology">{{ technology }}</p>
    <p class="codeLink"><a :href="codeLink" target="_blank" rel="noopener noreferrer">View Code</a></p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  },
  stars: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  technology: {
    type: String,
    required: true
  },
  codeLink: {
    type: String,
    required: true
  },
})
</script>

<style scoped>
.card {
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgb(37, 37, 37);
  color: white;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: 16px auto;
}

.title {
  font-size: 1.5rem;
  margin-bottom: 8px;
  font-weight: bold;
  color:white;
}

.rating {
  font-size: 1rem;
  margin-bottom: 12px;
}

.description {
  color:white;
  font-size: 0.875rem;
  margin-bottom: 12px;
}

.technology {
  font-size: 0.875rem;
  margin-bottom: 12px;
  color: #aaa;
}

.codeLink a {
  font-size: 0.875rem;
  color: #1e90ff;
  text-decoration: none;
}

.codeLink a:hover {
  text-decoration: underline;
}
</style>
