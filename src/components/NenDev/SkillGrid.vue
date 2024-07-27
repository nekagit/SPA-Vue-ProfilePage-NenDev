<template>
  <div class="tech-grid mb-20">
    <div v-for="tech in technologies" :key="tech.name" class="tech-item">
      <Icon :icon="tech.icon" class="tech-icon" />
      <span class="tech-name">{{ tech.name }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Icon } from '@iconify/vue';

interface Technology {
  name: string;
  icon: string;
}

const technologies = ref<Technology[]>([
  { name: 'C Language', icon: 'mdi-language-c' },
  { name: 'Javascript', icon: 'logos:javascript' },
  { name: 'TypeScript', icon: 'logos:typescript-icon' },
  { name: 'Express', icon: 'simple-icons:express' },
  { name: 'NodeJS', icon: 'logos:nodejs-icon' },
  { name: 'Postman', icon: 'simple-icons:postman' },
  { name: 'Dart', icon: 'logos:dart' },
  { name: 'Flutter', icon: 'logos:flutter' },
  { name: 'React Native', icon: 'simple-icons:react' },
  { name: 'HTML', icon: 'logos:html-5' },
  { name: 'CSS', icon: 'logos:css-3' },
  { name: 'Bootstrap', icon: 'logos:bootstrap' },
  { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
  { name: 'Sass', icon: 'logos:sass' },
  { name: 'Vue', icon: 'logos:vue' },
  { name: 'React', icon: 'logos:react' },
  { name: 'MySQL', icon: 'logos:mysql' },
  { name: 'Mongo DB', icon: 'logos:mongodb-icon' },
  { name: 'MSSQL', icon: 'logos:mongodb-icon' }, // Placeholder
  { name: 'Git', icon: 'logos:git-icon' },
]);
</script>

<style scoped>
.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 20px;
  padding: 20px;
}

.tech-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.tech-icon {
  width: 50px;
  height: 50px;
  object-fit: contain;
  margin-bottom: 10px;
}

.tech-name {
  font-size: 14px;
  color: #333;
}
</style>
