<template>
  <ABaseHorizontalSection class="charmFont" :title="pageTitle" />
  <div class="container">
    <footer>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-content-center text-center mb-8 font-bold"
      >
        <div class="">
          <a href="mailto:nenad99@hotmail.de" class="text-black opacity-60 hover:text-blue-300">nenad99@hotmail.de</a>
        </div>
        <p class="text-black opacity-60">&copy; 2024 Nenad Kalicanin. Inspired by <a target="_blank" class="underline underline-offset-2" href="https://devdreaming.com">CodeBucks</a></p>
        
        <div class="">
          <a href="docuverse.netlify.app" class="text-black opacity-60 hover:text-blue-300">DocuVerse</a>
        </div>
         <div class="flex items-center space-x-4">
      <div class="space-x-8 flex md:hidden">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          class="social-icon linkedin"
        >
          <Icon icon="mdi:linkedin" />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          class="social-icon github"
        >
          <Icon icon="mdi:github" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          class="social-icon instagram"
        >
          <Icon icon="mdi:instagram" />
        </a>
        <a
          href="https://pinterest.com"
          target="_blank"
          rel="noopener noreferrer"
          class="social-icon pinterest"
        >
          <Icon icon="mdi:pinterest" />
        </a>
      </div>
    </div>
      </div>
    </footer>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import ABaseHorizontalSection from '../atoms/sections/ABaseHorizontalSection.vue';

const pageTitle = ref('')

const route = useRoute()

const getCurrentPageTitle = () => {
  const path = route.path // Use Vue Router's current route path
  let title = path.replace('/', '') || 'Home' // Default to 'Home' if path is empty
  return title.charAt(0).toUpperCase() + title.slice(1) // Capitalize first letter
}

onMounted(() => {
  pageTitle.value = getCurrentPageTitle()
  console.log(pageTitle.value)
})
</script>
