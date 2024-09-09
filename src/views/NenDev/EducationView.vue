<script setup lang="ts">
import AInternetUpFlipCard from '@/components/atoms/cards/internet/AInternetUpFlipCard.vue'
import { onMounted } from 'vue'
import ReactCert from '@/assets/certReact.png'
import PhotoStack from '@/components/NenDev/PhotoStack.vue';
onMounted(() => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})
const developing = [
  {
    title: 'React Course',
    imgSrc: ReactCert,
    tags: 'Web Development, Software Development, Computer Science'
  } // Swimming Pool
]

const schooling = [
  {
    title: 'Finished Gymnasium (2.7)',
    imgSrc:
      'https://www.ruhrnachrichten.de/wp-content/uploads/2023/01/11/13/630_0900_2653689_WS_Hlg-1648x824.jpg'
  }, // German School
  {
    title: 'Finished Bachelor in Computer Science (3.4)',
    imgSrc: 'https://iw-up.com/wp-content/uploads/2013/09/logo-tu-dortmund.jpg'
  } // TU Dortmund Logo
]

const languages = [
  {
    title: 'Serbish Course until C2',
    imgSrc: 'https://meritocracyparty.org/wp-content/uploads/2013/12/Flag-of-Serbia.png'
  }, // Serbian Flag
  {
    title: 'Spanish Course B2',
    imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg'
  } // Spanish Flag
]

const sports = [
  {
    title: 'Swimming Licenses and LifeGuard',
    imgSrc: 'https://www.sportwelt-dortmund.de/uploads/pics/HOMBRUCH.JPG'
  } // Swimming Pool
]
</script>

<template>
  <PhotoStack/>
  <div class="p-6 min-h-screen">
    <h1 class="text-3xl font-bold mb-6 text-center">Developing</h1>
    <div class="my-8 grid grid-cols-1 xl:grid-cols-2">
      <div v-for="(item, index) in developing" :key="index" class="relative">
        <AInternetUpFlipCard
          :imgSrc="item.imgSrc"
          :title="item.title"
          :description="''"
          class="transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer mx-auto"
        />
      </div>
    </div>
    <h1 class="text-3xl font-bold mb-6 text-center">Schooling</h1>
    <div class="my-8 grid grid-cols-1 xl:grid-cols-2">
      <div v-for="(item, index) in schooling" :key="index" class="relative">
        <!-- Flip Card Container -->
        <AInternetUpFlipCard
          :imgSrc="item.imgSrc"
          :title="item.title"
          :description="''"
          class="transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer mx-auto"
        />
      </div>
    </div>
    <h1 class="text-3xl font-bold mb-6 text-center">Languages</h1>
    <div class="my-8 grid grid-cols-1 xl:grid-cols-2">
      <div v-for="(item, index) in languages" :key="index" class="relative">
        <!-- Flip Card Container -->
        <AInternetUpFlipCard
          :imgSrc="item.imgSrc"
          :title="item.title"
          :description="''"
          class="transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer mx-auto"
        />
      </div>
    </div>
    <h1 class="text-3xl font-bold mb-6 text-center">Sports</h1>
    <div class="my-8 grid grid-cols-1 xl:grid-cols-2">
      <div v-for="(item, index) in sports" :key="index" class="relative">
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
