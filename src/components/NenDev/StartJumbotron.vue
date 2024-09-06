<template>
  <div class="text-white xl:max-w-[60%] p-8 grid gap-0 mx-auto grid-cols-1 ">
    <div>
      <header>
        <h1 class="text-amber-400 text-lg">Welcome to my site.</h1>
        <h1 class="text-6xl font-bold robot-bold my-2">
          I'm <span class="bg-clip-text text-transparent gradientText">Nenad Kalicanin</span>, a
          <br />
          Fullstack Developer.
        </h1>
        <div class="flex items-center space-x-4 my-4">
          <span class="flex items-center">
            <Icon icon="logos:react" width="24" height="24" /> React.js</span
          >
          <span class="flex items-center">
            <Icon icon="mdi:nodejs" width="24" height="24" />Node.js</span
          >
          <span class="flex items-center">
            <Icon icon="mdi:tailwind" width="24" height="24" />TailwindCSS</span
          >
        </div>
      </header>
      <section class="my-4 roboto xl:max-w-[60%] text-gray-400 leading-relaxed space-y-4">
        <p>
          I love writing code that takes things next level creating highly performant websites,
          automated API integrations, building my own dev-tools, and creating stunning user
          experiences that make you feel WOW!
        </p>
        <p>
          I am always keen to learn and explore new technologies, frameworks, and programming
          languages. Currently, I'm learning about Astro and Replicache.
        </p>
      </section>

      <section class="flex space-x-4">
        <button class="px-4 py-2 bg-gray-800 rounded-md">Let's Work</button>
        <button class="px-4 py-2 bg-gray-800 rounded-md">Resume</button>
      </section>
    </div>

    <div class="">
      <section class="flex space-x-2 my-4">
        <span class="bg-gray-800 px-2 py-1 rounded-lg">Hiker</span>
        <span class="bg-gray-800 px-2 py-1 rounded-lg">Chef</span>
        <span class="bg-gray-800 px-2 py-1 rounded-lg">Runner</span>
        <span class="bg-gray-800 px-2 py-1 rounded-lg">Mixologist</span>
        <span class="bg-gray-800 px-2 py-1 rounded-lg">Space Enthusiast</span>
      </section>

      <section>
        <CodeSnippet />
      </section>

      <footer class="flex justify-center mt-8">
        <button class="px-4 py-2 bg-gray-800 rounded-full mr-4">Support</button>
        <button class="px-4 py-2 bg-gray-800 rounded-full">Other</button>
      </footer>
    </div>
  </div>
</template>

<script setup>
import CodeSnippet from '@/components/NenDev/CodeSnippet.vue'
import { Icon } from '@iconify/vue'
</script>

<style scoped>
.gradientText {
  background: linear-gradient(90deg, #06b6d4, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
