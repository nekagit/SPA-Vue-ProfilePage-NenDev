<template>
  <div class="container mx-auto px-4 py-8">
    <h2 class="text-3xl font-bold mb-6 text-center">Featured Websites</h2>
    <div class="grid grid-cols-1 gap-6">
      <div
        v-for="(site, index) in websites"
        :key="index"
        class="bg-[#23314e8c] rounded-lg shadow-lg overflow-hidden"
      >
        <div class="p-4 cursor-pointer text-center" @click="toggleIframe(index)">
          <h3 class="text-xl font-semibold mb-2 text-white">{{ site.title }}</h3>
          <p class="text-gray-600 mb-4">{{ site.description }}</p>
        </div>
        <div class="relative transition-all duration-500" v-show="site.showIframe">
          <iframe
            :src="site.url"
            class="absolute top-0 left-0 w-full h-full transition-all duration-500"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const websites = ref([
  {
    title: 'RY Sport',
    description: 'Profile of personal fitness coach Robin Schroeder',
    url: 'https://rysport.netlify.app',
    showIframe: false
  },
  {
    title: 'Kosta Kalicanin',
    description: 'Profile of soccer player Kosta Kalicanin',
    url: 'https://kostakalicanin.netlify.app',
    showIframe: true
  },
  {
    title: 'Stankovic Art',
    description: 'E-Commerce for selling paintings',
    url: 'https://stankovicart.netlify.app',
    showIframe: false
  },
  {
    title: 'Vukas',
    description: 'Personal portfolio website',
    url: 'https://vukas.netlify.app',
    showIframe: false
  },
  {
    title: 'Stichting SOP Rotterdam',
    description: 'Profile of a sports club in Rotterdam',
    url: 'https://stichtingsoprotterdam.nl',
    showIframe: false
  }
])

function toggleIframe(index) {
  websites.value[index].showIframe = !websites.value[index].showIframe
}

// Optional: Automatically load all iframes on mount
onMounted(() => {
  websites.value.forEach((site, index) => {
    site.showIframe = false // Ensure iframes are not shown initially
  })
})
</script>

<style scoped>
/* Adjust the default height and transition settings */
.relative {
  height: 500px; /* Default height when iframe is not shown */
}

.transition-all {
  transition: height 0.5s ease;
}
</style>
