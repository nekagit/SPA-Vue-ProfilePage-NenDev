<!-- App.vue or your main layout component -->
<template>
  <div>
    <LoadingScreen />
    <NavBar />
    <router-view class="router bg-white dark:bg-gray-900 text-black dark:text-white" />
    <NenFooter />
  </div>
</template>

<script setup lang="ts">
import NavBar from './components/NenDev/NavBar.vue';
import NenFooter from '@/components/NenDev/NenFooter.vue';
import LoadingScreen from '@/components/LoadingScreen.vue';
</script>
