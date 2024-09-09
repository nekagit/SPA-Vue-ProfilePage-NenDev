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
      <div class="w-full md:w-[400px] mt-8 mx-8">
        <div class="flex justify-between mb-8">
          <div v-for="(value, key) in stats" :key="key" class="text-center">
            <span class="text-blue-400 text-3xl block">{{ value }}</span>
            <span class="text-sm">{{ formatKey(key) }}</span>
          </div>
        </div>
        <div class="space-y-4 text-black dark:text-white">
          <p>
            I completed all my formal education in Dortmund, recently finishing my
            <strong class="text-amber-400">Bachelor’s Degree in Computer Science</strong> at TU Dortmund. Earlier, I
            graduated from Gymnasium, earning my diploma with a solid foundation in multiple
            disciplines. 
          </p>
          <p>
            Alongside my academic pursuits, I’ve also made significant achievements in the realm of
            sports. I hold several <strong class="text-amber-400">Swimming Licenses</strong> and a
            <strong class="text-amber-400">Lifeguard Certification</strong>, showcasing my dedication to health and
            fitness.
          </p>
          <p>
            I'm multilingual, having earned certificates in various languages, including achieving a
            <strong class="text-amber-400">C2 level in Serbian</strong>, which connects me to my cultural roots, and a
            <strong class="text-amber-400">B2 level in Spanish</strong>, demonstrating my global perspective and
            adaptability.
          </p>
        </div>
      </div>
    </div>

    <Transition name="fade">
      <h3
        class="absolute right-4 xl:right-[20%] text-2xl font-bold text-center"
        :key="currentPhoto.title"
      >
        {{ currentPhoto.title }}
      </h3>
    </Transition>
  </div>
</template>

<script setup>
import ReactCert from '@/assets/certReact.png';
import { computed, ref } from 'vue';

const photos = [
  {
    title: 'Swimming Licenses and LifeGuard',
    src: 'https://www.sportwelt-dortmund.de/uploads/pics/HOMBRUCH.JPG',
    alt: 'Swimming Pool'
  },
  {
    title: 'Finished Gymnasium (2.7)',
    src: 'https://www.ruhrnachrichten.de/wp-content/uploads/2023/01/11/13/630_0900_2653689_WS_Hlg-1648x824.jpg',
    alt: 'German School'
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
    title: 'Finished Bachelor in Computer Science (3.3)',
    src: 'https://iw-up.com/wp-content/uploads/2013/09/logo-tu-dortmund.jpg',
    alt: 'TU Dortmund Logo'
  },

  { title: 'React Course', src: ReactCert, alt: 'React Certificate' }
]

const stats = {
  finishedProjects: '10+',
  yearsDev: '5+',
  amazingDogs: 1,
  commits: '1085+'
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
