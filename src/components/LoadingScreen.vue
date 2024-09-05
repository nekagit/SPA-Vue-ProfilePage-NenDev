<!-- components/LoadingScreen.vue -->
<template>
  <div v-if="isVisible" :class="{'loading-screen': true, 'fade-out': !isVisible}">
    <img src="./../../public/N.png" alt="Logo" class="logo" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isVisible = ref(true);

onMounted(() => {
  // Simulate a delay before hiding the loading screen
  setTimeout(() => {
    isVisible.value = false;
  }, 3000); // Adjust the delay time as needed
});
</script>

<style scoped>
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  opacity: 1;
  transition: opacity 1s ease-in-out; /* Smooth fade-in and fade-out */
}

.fade-out {
  opacity: 0;
}

.logo {
  width: 300px; /* Adjust size as needed */
  height: auto;
  animation: blink 1s infinite;
}

@keyframes blink {
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
}
</style>
