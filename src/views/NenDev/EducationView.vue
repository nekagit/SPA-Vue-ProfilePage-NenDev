<script setup lang="ts">
import AInternetUpFlipCard from '@/components/atoms/cards/internet/AInternetUpFlipCard.vue';
import { onMounted } from 'vue';

onMounted(() => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})
const certificates = [
  {
    title: 'Serbish Course until C2',
    imgSrc: 'https://meritocracyparty.org/wp-content/uploads/2013/12/Flag-of-Serbia.png'
  }, // Serbian Flag
  {
    title: 'Spanish Course B2',
    imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg'
  }, // Spanish Flag
  {
    title: 'Swimming Licenses and LifeGuard',
    imgSrc: 'https://www.sportwelt-dortmund.de/uploads/pics/HOMBRUCH.JPG'
  }, // Swimming Pool
  {
    title: 'Finished Gymnasium',
    imgSrc:
      'https://www.ruhrnachrichten.de/wp-content/uploads/2023/01/11/13/630_0900_2653689_WS_Hlg-1648x824.jpg'
  }, // German School
  {
    title: 'Finishing Bachelor in Computer Science',
    imgSrc: 'https://iw-up.com/wp-content/uploads/2013/09/logo-tu-dortmund.jpg'
  } // TU Dortmund Logo
]

</script>

<template>
  <div class="p-6 min-h-screen">
    <h1 class="text-3xl font-bold mb-6 text-center">Education Certificates</h1>
    <div class="grid grid-cols-1 xl:grid-cols-2 gap-8">
      <div v-for="(item, index) in certificates" :key="index" class="relative">
        <!-- Flip Card Container -->
        <AInternetUpFlipCard
          :imgSrc="item.imgSrc"
          :title="item.title"
          :description="''"
          class="transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer mx-auto"
        />
      </div>
    </div>
  </div>
</template>
