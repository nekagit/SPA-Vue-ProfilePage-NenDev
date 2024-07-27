<script setup lang="ts">
import TimeLine from '@/components/NenDev/TimeLine.vue'
import Biography from '@/components/NenDev/Biography.vue'
import SkillGrid from '@/components/NenDev/SkillGrid.vue'
import Nenad from "@/assets/NenadOG.jpg"
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
    <Biography 
    :imageSrc="Nenad"
    title="Dear Visitor."
    description="Hi, I’m Nenad Kalicanin from Dortmund. You can reach me at njoco@hotmail.de. Check out some of my work on GitHub at nekagit. I’m a seasoned software developer with experience as a Freelancer at bytes Coding GmbH and was last employed at qmBase in Dortmund. My background includes full-stack web development, backend and frontend technologies, and mobile app development. I've also worked at OrgaTech Solution Engineering Consulting GmbH in Lünen, enhancing my expertise in Java and web technologies. I will hold a Bachelor's degree in Computer Science after August from the Technical University of Dortmund. My skills include .NET, JavaScript, React, Docker, and DevOps, among others.I am very communicative and love languages thus adding turkish to my repertior. I’m proficient in German, English, Serbian, and Spanish, and I also have a forklift license."
  />
    <TimeLine />
    <SkillGrid />
  </div>
</template>
