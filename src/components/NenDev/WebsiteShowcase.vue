<template>
  <div class="container mx-auto px-4 py-8">
    <h2 class="text-3xl font-bold mb-6 text-center">Featured Websites</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="(site, index) in websites" :key="index" class="bg-orange-100  rounded-lg shadow-lg overflow-hidden">
        <div class="p-4">
          <h3 class="text-xl font-semibold mb-2 text-black">{{ site.title }}</h3>
          <p class="text-gray-600 mb-4">{{ site.description }}</p>
        </div>
        <div class="relative pb-[56.25%] h-[500px]">
          <iframe 
            :src="site.url" 
            class="absolute top-0 left-0 w-full h-full" 
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
import { ref } from 'vue';

const websites = ref([
  {
    title: "Kosta Kalicanin",
    description: "Profile of soccer player Kosta Kalicanin",
    url: "https://kostakalicanin.netlify.app"
  },
  {
    title: "RY Sport",
    description: "Profile of personal fitness coach Robin Schroeder",
    url: "https://rysport.netlify.app"
  },
  {
    title: "Stankovic Art",
    description: "E-Commerce for selling paintings",
    url: "https://stankovicart.netlify.app"
  },
  {
    title: "Vukas",
    description: "Personal portfolio website",
    url: "https://vukas.netlify.app"
  },
  {
    title: "Stichting SOP Rotterdam",
    description: "Profile of a sports club in Rotterdam",
    url: "https://stichtingsoprotterdam.nl"
  }
]);
</script>