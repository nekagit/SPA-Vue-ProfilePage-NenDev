<template>
  <ABaseHorizontalSection :content="pageTitle" />
  <div class="container">
    <footer class="text-white font-medium relative p-3">
      <AMenuButton class="h-[30vh]" />
      <div
        class="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-content-center text-center"
      >
        <div class="">
          <h3 class="text-lg header mb-4">Contact</h3>
          <ul>
            <li>
              <a href="mailto:nenad99@hotmail.de" class="text-white opacity-60"
                >nenad99@hotmail.de</a
              >
            </li>
          </ul>
        </div>
        <div class="text-center mt-8">
          <p class="text-white opacity-60">&copy; 2024 Nenad Kalicanin.</p>
        </div>
        <div>
          <div class="mt-4">
            <button class="text-blue-400 mx-auto h-10 w-10" type="button">
              <Facebook /></button
            ><button class="text-green-600 h-10 w-10" type="button">
              <Instagram /></button
            ><button class="text-pink-400 h-10 w-10" type="button">
              <Github />
            </button>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import ABaseHorizontalSection from '../atoms/sections/ABaseHorizontalSection.vue'
import AMenuButton from '@/components/NenDev/AMenuButton.vue'
import { Facebook, Github, Instagram } from 'lucide-vue-next'

const pageTitle = ref('')

const route = useRoute()

const getCurrentPageTitle = () => {
  const path = route.path // Use Vue Router's current route path
  let title = path.replace('/', '') || 'Home' // Default to 'Home' if path is empty
  return title.charAt(0).toUpperCase() + title.slice(1) // Capitalize first letter
}

onMounted(() => {
  pageTitle.value = getCurrentPageTitle()
})

</script>

<style scoped>
</style>
