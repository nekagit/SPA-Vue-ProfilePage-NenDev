<!-- App.vue -->
<template>
  <LoadingScreen v-if="isLoading" />
  <NavBar v-if="!isLoading" />
  <transition name="fade" mode="out-in">
    <router-view v-if="!isLoading" class="bg-white dark:bg-[#090E19] text-black dark:text-white" />
  </transition>
  <NenFooter v-if="!isLoading" />
</template>

<script setup lang="ts">
import LoadingScreen from '@/components/LoadingScreen.vue'
import NenFooter from '@/components/NenDev/NenFooter.vue'
import { onMounted, ref } from 'vue'
import NavBar from './components/NenDev/NavBar.vue'

const isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false // Hide loading screen after 3 seconds
  }, 2800)
})
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
