<script setup lang="ts">
import Nenad from "@/assets/Nenad.png";
import Jumbotron from '@/components/NenDev/Jumbotron.vue';
import SpinningButton from "@/components/NenDev/SpinningButton.vue";
import StartJumbotron from "@/components/NenDev/StartJumbotron.vue";
import { onMounted } from 'vue';


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
 <!-- <Jumbotron
    :imageSrc="Nenad"
    title="Implementing and Refining any Ui/UX Ideas."
    description="As an enthusiastic intermediate full-stack developer, I'm on a journey to transform ideas into functional web applications. I'm constantly learning and improving my skills in Vue.js, React.js and web development. Explore my growing portfolio of projects and articles that demonstrate my progress and passion for coding."
    primaryButtonText="Contact"
    secondaryButtonText="Resume"
    @secondaryAction="handleContactClick"
  /> -->
  <StartJumbotron/>
    <SpinningButton />

</template>
