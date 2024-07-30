<template>
  <div>
    <NavBar  />
    <!-- <AInternetLoadingScreen class="loading" v-if="isLoading" /> -->
    <router-view  class="router bg-white dark:bg-gray-900 text-black dark:text-white" />
    <NenFooter  />
  </div>
</template>

<script setup lang="ts">
// import AInternetLoadingScreen from '@/components/atoms/sections/internet/AInternetLoadingScreen.vue'
import router from '@/router/index';
import { ref } from 'vue';
import NavBar from './components/NenDev/NavBar.vue';
import NenFooter from './components/NenDev/NenFooter.vue';

const isLoading = ref(false)

router.beforeEach((to, from, next) => {
  isLoading.value = true
  next()
})

router.afterEach(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 3000)
})
</script>

