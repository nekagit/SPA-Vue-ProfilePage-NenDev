<script setup lang="ts">
import { ref, onMounted } from 'vue';
import ProjectCard from '@/components/NenDev/ProjectCard.vue'
import GithubCalender from '@/components/NenDev/GithubCalender.vue'
// Sample card data
const cards = ref([
  {
    title: 'Project A',
    stars: 4,
    description: 'A description of Project A.',
    technology: 'Vue.js',
    codeLink: 'https://github.com/user/project-a'
  },
  {
    title: 'Project B',
    stars: 5,
    description: 'A description of Project B.',
    technology: 'React',
    codeLink: 'https://github.com/user/project-b'
  },
  {
    title: 'Project C',
    stars: 3,
    description: 'A description of Project C.',
    technology: 'Angular',
    codeLink: 'https://github.com/user/project-c'
  },
  {
    title: 'Project A',
    stars: 4,
    description: 'A description of Project A.',
    technology: 'Vue.js',
    codeLink: 'https://github.com/user/project-a'
  },
  {
    title: 'Project B',
    stars: 5,
    description: 'A description of Project B.',
    technology: 'React',
    codeLink: 'https://github.com/user/project-b'
  },
  {
    title: 'Project C',
    stars: 3,
    description: 'A description of Project C.',
    technology: 'Angular',
    codeLink: 'https://github.com/user/project-c'
  },
]);

// Scroll to top on mount
onMounted(() => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
</script>

<template>
  <GithubCalender />
  <div class="grid grid-cols-3">
    <ProjectCard
      v-for="(card, index) in cards"
      class="projectCard"
      :key="index"
      :title="card.title"
      :stars="card.stars"
      :description="card.description"
      :technology="card.technology"
      :codeLink="card.codeLink"
    />
  </div>
</template>

<style scoped>
.projectCard {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  padding: 2rem;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
  position: relative;
}

.projectCard:hover {
  box-shadow: none;
  transform: translateY(5px);
}

.projectCard::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 5px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.projectCard:hover::after {
  opacity: 1;
}
</style>