<template>
    <div class="relative">

  <div class="flex flex-col md:flex-row items-center justify-center text-white p-4 container">
    <div class="w-full md:w-1/2 md:pr-8">
   
      <div class="relative w-full h-96 mb-8">
        <TransitionGroup name="photo-stack">
          <div
            v-for="(photo, index) in visiblePhotos"
            :key="photo.src"
            class="absolute top-0 left-0 w-full h-full"
            :style="{
              transform: `rotate(${getRandomRotation(index)}deg)`,
              zIndex: visiblePhotos.length - index
            }"
            @click="nextPhoto"
          >
            <img
              :src="photo.src"
              :alt="photo.alt"
              class="w-full h-full object-cover rounded-lg shadow-lg cursor-pointer slide-in"
            />
          </div>
        </TransitionGroup>
      </div>
    </div>
    <div class="w-full md:w-[400px]">
      <div class="flex justify-between mb-8">
        <div v-for="(value, key) in stats" :key="key" class="text-center">
          <span class="text-blue-400 text-3xl block">{{ value }}</span>
          <span class="text-sm">{{ formatKey(key) }}</span>
        </div>
      </div>
      <div class="space-y-4">
        <p>
          I'm a Cape Town based Web Developer and Entrepreneur. My focus area for the past few years
          has been front-end development with Next.js, Typescript and TailwindCSS to create
          beautiful user- and developer experiences that bring delight.
        </p>
        <p>
          I've spent most of my life deeply interested in technology and food, continuously building
          things with both. As a teenager, I was a classic computer nerd, spending most of my time
          modding games, tinkering with hardware, and developing websites.
        </p>
      </div>
    </div>
  </div>

      <Transition name="fade">
          <h3 class=" absolute right-4 xl:right-[20%] text-2xl font-bold text-center" :key="currentPhoto.title">
              {{ currentPhoto.title }}
            </h3>
        </Transition>
    </div>

</template>

<script setup>
import ReactCert from '@/assets/certReact.png';
import { computed, ref } from 'vue';

const photos = [
  { title: 'React Course', src: ReactCert, alt: 'React Certificate' },
  {
    title: 'Finished Gymnasium (2.7)',
    src: 'https://www.ruhrnachrichten.de/wp-content/uploads/2023/01/11/13/630_0900_2653689_WS_Hlg-1648x824.jpg',
    alt: 'German School'
  },
  {
    title: 'Finished Bachelor in Computer Science (3.4)',
    src: 'https://iw-up.com/wp-content/uploads/2013/09/logo-tu-dortmund.jpg',
    alt: 'TU Dortmund Logo'
  },
  {
    title: 'Serbian Course until C2',
    src: 'https://meritocracyparty.org/wp-content/uploads/2013/12/Flag-of-Serbia.png',
    alt: 'Serbian Flag'
  },
  {
    title: 'Spanish Course B2',
    src: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg',
    alt: 'Spanish Flag'
  },
  {
    title: 'Swimming Licenses and LifeGuard',
    src: 'https://www.sportwelt-dortmund.de/uploads/pics/HOMBRUCH.JPG',
    alt: 'Swimming Pool'
  }
]

const stats = {
  yearsOld: 38,
  yearsWebDev: '10+',
  amazingDogs: 1,
  commits: 3149
}

const currentIndex = ref(0)
const visiblePhotos = computed(() => photos.slice(currentIndex.value))
const currentPhoto = computed(() => photos[currentIndex.value])

const nextPhoto = () => {
  if (currentIndex.value < photos.length - 1) {
    currentIndex.value++
  } else {
    currentIndex.value = 0 // Loop back to the first photo
  }
}

const formatKey = (key) => {
  return key
    .split(/(?=[A-Z])/)
    .join(' ')
    .toLowerCase()
    .replace(/\b\w/g, (l) => l.toUpperCase())
}

const getRandomRotation = (index) => {
  return (Math.random() - 0.5) * 20 + index * 2
}
</script>

.photo-stack-enter-active, .photo-stack-leave-active { transition: transform 0.5s ease, opacity 0.5s
ease; } .photo-stack-enter-from, .photo-stack-leave-to { opacity: 0; transform: translateX(-100%)
rotate(-45deg); } .fade-enter-active, .fade-leave-active { transition: opacity 0.8s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; } .slide-in { animation: slideIn 0.8s ease forwards;
} @keyframes slideIn { from { opacity: 0; transform: translateX(-100%); } to { opacity: 1;
transform: translateX(0); } } img { transition: transform 0.3s ease, opacity 0.5s ease; } img:hover
{ transform: scale(1.05); opacity: 0.9; }
