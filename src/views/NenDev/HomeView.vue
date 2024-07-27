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
    title="Implementing and Refining any Ui/UX Ideas."
    description="As an enthusiastic intermediate full-stack developer, I'm on a journey to transform ideas into functional web applications. I'm constantly learning and improving my skills in Vue.js, React.js and web development. Explore my growing portfolio of projects and articles that demonstrate my progress and passion for coding."
    primaryButtonText="Contact"
    secondaryButtonText="Resume"
    @primaryAction="handleResumeClick"
    @secondaryAction="handleContactClick"
  />
</template>
