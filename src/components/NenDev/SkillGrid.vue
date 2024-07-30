<template>
  <div class="tech-grid mb-20">
    <div v-for="tech in technologies" :key="tech.name" class="tech-item" @mouseover="showModal(tech.name)" @mouseleave="hideModal">
      <Icon :icon="tech.icon" class="tech-icon" />
      <span class="tech-name">{{ tech.name }}</span>
      <div v-if="activeTech === tech.name" class="modal">
        <StarRating :rating="tech.rating" :name="tech.name" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import StarRating from '@/components/NenDev/StarRating.vue';
import { Icon } from '@iconify/vue';
import { ref } from 'vue';

interface Technology {
  name: string;
  icon: string;
  rating: number;
}

const activeTech = ref<string | null>(null);

const showModal = (name: string) => {
  activeTech.value = name;
};

const hideModal = () => {
  activeTech.value = null;
};


const technologies = ref<Technology[]>([
  { name: 'Docker', icon: 'logos:docker-icon', rating: 7 },
  { name: 'Git', icon: 'logos:git-icon', rating: 7 },
  { name: 'Vue', icon: 'logos:vue', rating: 8 },
  { name: 'React', icon: 'logos:react', rating: 6 },
  { name: 'React Native', icon: 'simple-icons:react', rating: 5 },
  { name: 'Javascript', icon: 'logos:javascript', rating: 6 },
  { name: 'TypeScript', icon: 'logos:typescript-icon', rating: 6 },
  { name: 'Express', icon: 'simple-icons:express', rating: 5 },
  { name: 'NodeJS', icon: 'logos:nodejs-icon', rating: 5 },
  { name: 'MySQL', icon: 'logos:mysql', rating: 6 },
  { name: 'Mongo DB', icon: 'logos:mongodb-icon', rating: 7 },
  { name: 'MSSQL', icon: 'devicon:microsoftsqlserver-wordmark', rating: 6 },
  { name: 'Postman', icon: 'simple-icons:postman', rating: 4 },
  { name: 'Flutter', icon: 'logos:flutter', rating: 5 },
  { name: 'Dart', icon: 'logos:dart', rating: 5 },
  { name: 'Bootstrap', icon: 'logos:bootstrap', rating: 7 },
  { name: 'CSS', icon: 'logos:css-3', rating: 7 },
  { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon', rating: 7 },
  { name: 'Sass', icon: 'logos:sass', rating: 5 },
  { name: 'HTML', icon: 'logos:html-5', rating: 8 },
  { name: 'C Language', icon: 'mdi-language-c', rating: 4 },
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
  position: relative;
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
}

.modal {
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translateY(-150%);
  background: white;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
</style>
