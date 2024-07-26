<script setup lang="ts">
import { onMounted } from 'vue';
import Jumbotron from '@/components/NenDev/Jumbotron.vue'
import Nenad from "@/assets/Nenad.png"
const handleResumeClick = () => {
  // Handle resume button click
}

const handleContactClick = () => {
  // Handle contact button click
}
onMounted(() => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})
</script>

<script setup>

</script>
<template>
 <Jumbotron
    :imageSrc="Nenad"
    title="Turning Vision Into Reality With Code And Design."
    description="As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in React.js and web development."
    primaryButtonText="Resume"
    secondaryButtonText="Contact"
    @primaryAction="handleResumeClick"
    @secondaryAction="handleContactClick"
  />
</template>
