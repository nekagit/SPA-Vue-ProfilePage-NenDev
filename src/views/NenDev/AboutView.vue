<script setup lang="ts">
import TimeLine from '@/components/NenDev/TimeLine.vue'
import { onMounted } from 'vue'
onMounted(() => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})
</script>

<template>
  <div class="container">
    <TimeLine />
  </div>
</template>
