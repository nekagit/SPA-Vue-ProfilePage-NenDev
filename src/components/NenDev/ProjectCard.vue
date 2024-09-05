<template>
  <div class="card">
    <h3 class="title">{{ title }}</h3>
    <p class="description">{{ description }}</p>
    <p class="technology">{{ technology }}</p>
    <p class="codeLink"><a :href="codeLink" target="_blank" rel="noopener noreferrer">View</a></p>
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgb(37, 37, 37);
  color: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 80%;
  max-width: 300px;
  margin: 1rem auto;
  transition: all 0.3s ease;
}

.title {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: white;
}

.rating {
  font-size: 1rem;
  margin-bottom: 0.75rem;
}

.description {
  color: white;
  font-size: 0.875rem;
  margin-bottom: 0.75rem;
}

.technology {
  font-size: 0.875rem;
  margin-bottom: 0.75rem;
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

@media (max-width: 768px) {
  .card {
    max-width: 100%;
    margin: 0.5rem auto;
    padding: 0.75rem;
  }

  .title {
    font-size: 1.1rem;
  }

  .rating, .description, .technology, .codeLink a {
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .card {
    padding: 0.5rem;
  }

  .title {
    font-size: 1rem;
  }

  .rating, .description, .technology, .codeLink a {
    font-size: 0.75rem;
  }
}
</style>