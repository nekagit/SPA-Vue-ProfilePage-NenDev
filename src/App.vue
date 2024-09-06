<!-- App.vue -->
<template>
    <LoadingScreen v-if="isLoading" />
    <NavBar v-if="!isLoading" />
    <transition name="fade" mode="out-in">
      <router-view v-if="!isLoading" class="router bg-white dark:bg-[#090E19] text-black dark:text-white" />
    </transition>
    <div class="">

      <NenFooter v-if="!isLoading"  />
    </div>
</template>

<script setup lang="ts">
import LoadingScreen from '@/components/LoadingScreen.vue';
import NenFooter from '@/components/NenDev/NenFooter.vue';
import { onMounted, ref } from 'vue';
import NavBar from './components/NenDev/NavBar.vue';

const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false; // Hide loading screen after 3 seconds
  }, 3000);
});
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
