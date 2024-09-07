<template>
  <div class="card text-center relative">
    <img :src="imgSrc" alt="" class="card-image" />
    <div class="tech-icons">
      <Icon
        v-for="(tech) in technologyIcons"
        :key="tech.name"
        :icon="tech.icon"
        width="48"
        height="48"
      />
    </div>
    <h3 class="title">{{ title }}</h3>
    <p class="description">{{ description }}</p>
    <p class="technology">
      {{
        technology
          .split(',')
          .map((t) => t.trim())
          .join(', ')
      }}
    </p>
    <p class="codeLink">
      <a :href="codeLink" target="_blank" rel="noopener noreferrer">View</a>
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Icon } from '@iconify/vue'

const props = defineProps({
  title: {
    type: String,
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
  imgSrc: {
    type: String,
    required: true
  }
})

interface Technology {
  name: string
  icon: string
  type: 'frontend' | 'backend'
}

const technologies = ref<Technology[]>([
  { name: 'Java', icon: 'logos:java', type: 'frontend' },
  { name: 'Vue', icon: 'logos:vue', type: 'frontend' },
  { name: 'Angular', icon: 'logos:angular-icon', type: 'frontend' },
  { name: 'React', icon: 'logos:react', type: 'frontend' },
  { name: 'Javascript', icon: 'logos:javascript', type: 'frontend' },
  { name: 'TypeScript', icon: 'logos:typescript-icon', type: 'frontend' },
  { name: 'HTML', icon: 'logos:html-5', type: 'frontend' },
  { name: 'CSS', icon: 'logos:css-3', type: 'frontend' },
  { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon', type: 'frontend' },
  { name: 'Bootstrap', icon: 'logos:bootstrap', type: 'frontend' },
  { name: 'Sass', icon: 'logos:sass', type: 'frontend' },
  { name: 'Flutter', icon: 'logos:flutter', type: 'frontend' },
  { name: 'Docker', icon: 'logos:docker-icon', type: 'backend' },
  { name: 'Git', icon: 'logos:git-icon', type: 'backend' },
  { name: 'Express', icon: 'simple-icons:express', type: 'backend' },
  { name: 'NodeJS', icon: 'logos:nodejs-icon', type: 'backend' },
  { name: 'MySQL', icon: 'logos:mysql', type: 'backend' },
  { name: 'Mongo DB', icon: 'logos:mongodb-icon', type: 'backend' },
  { name: 'MSSQL', icon: 'devicon:microsoftsqlserver-wordmark', type: 'backend' },
  { name: 'Postman', icon: 'simple-icons:postman', type: 'backend' },
  { name: 'C#', icon: 'logos:dotnet', type: 'backend' }
])

const technologyIcons = computed(() => {
  const techArray = props.technology.split(',').map((tech) => tech.trim())
  return technologies.value.filter((tech) => techArray.includes(tech.name))
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
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 80%;
  max-width: 300px;
  margin: 1rem auto;
  transition: all 0.3s ease;
  padding-bottom:1rem;
  
}

.card-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  margin-bottom: 1rem;
}

.tech-icons {
  position: absolute;
  top: -1.5rem;
  left: -1rem;
  width: 80px;
  height: 80px;
}

.tech-icons :deep(svg) {
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 4px;
  padding: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  /* background-color: rgba(0, 0, 0, 0.63); */
  transition: transform 0.3s ease;
  transform-origin: bottom right;
}

/* Staggered movement and rotation */
.tech-icons svg:nth-child(1) {
  margin-right: 5px;
  transform: rotate(-10deg);
  z-index: 5;
}

.tech-icons svg:nth-child(2) {
  margin-right: 15px;
  transform: rotate(-25deg);
  z-index: 4;
}

.tech-icons svg:nth-child(3) {
  margin-right: 25px;
  transform: rotate(-40deg);
  z-index: 3;
}

.tech-icons svg:nth-child(4) {
  margin-right: 20px;
  transform: rotate(-15deg);
  z-index: 2;
}

.tech-icons svg:nth-child(5) {
  margin-right: 20px;
  transform: rotate(-15deg);
  z-index: 1;
}

/* Staggered movement and rotation */
.tech-icons svg:nth-child(1):hover {
  transform: rotate(0deg) translate(-5px, -5px) !important;
  z-index: 6;
  background-color: rgba(0, 0, 0);
}

.tech-icons svg:nth-child(2):hover {
  transform: rotate(0deg) translate(-5px, -5px) !important;
  z-index: 6;
  background-color: rgba(0, 0, 0);
}

.tech-icons svg:nth-child(3):hover {
  transform: rotate(0deg) translate(-5px, -5px) !important;
  z-index: 6;
  background-color: rgba(0, 0, 0);
}

.tech-icons svg:nth-child(4):hover {
  transform: rotate(0deg) translate(-5px, -5px) !important;
  z-index: 6;
  background-color: rgba(0, 0, 0);
}

.tech-icons svg:nth-child(5):hover {
  transform: rotate(0deg) translate(-5px, -5px) !important;
  z-index: 6;
  background-color: rgba(0, 0, 0);
}
.title {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
  padding:1rem;
  padding-bottom:0;
  color: white;
}

.description {
  color: white;
  font-size: 0.875rem;
  padding:1rem;
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

  .description,
  .technology,
  .codeLink a {
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

  .description,
  .technology,
  .codeLink a {
    font-size: 0.75rem;
  }
}
</style>
