<!-- App.vue -->
<template>
  <NavBar />
  <transition name="fade" mode="out-in">
    <router-view class="bg-white dark:bg-[#090E19] text-black dark:text-white" />
  </transition>
  <NenFooter />
</template>

<script setup lang="ts">
import NenFooter from '@/components/NenDev/NenFooter.vue';
import NavBar from './components/NenDev/NavBar.vue';
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
