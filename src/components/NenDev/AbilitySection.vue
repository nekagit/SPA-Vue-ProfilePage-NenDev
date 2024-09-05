<template>
  <div class="abilities my-auto">
    <ul class="space-y-6">
      <li v-for="(ability, index) in abilities" :key="index" class="mb-4">
        <div class="flex justify-between mb-2">
          <span class="text-xl font-semibold">{{ ability.name }}</span>
          <span class="text-xl font-bold text-indigo-600">{{ ability.percentage }}</span>
        </div>
        <div class="relative bg-gray-300 rounded-full h-4">
          <div
            class="ability-fill absolute top-0 left-0 h-full bg-indigo-500 rounded-full"
            :data-percentage="ability.percentage"
            :style="{ width: '0%' }"
          ></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import gsap from 'gsap'

const abilities = reactive([
  { name: 'Server Administration', percentage: '75%' },
  { name: 'DevOps', percentage: '85%' },
  { name: 'Database', percentage: '90%' },
  { name: 'Backend', percentage: '95%' },
  { name: 'Frontend', percentage: '98%' }
])

onMounted(() => {
  gsap.to('.ability-fill', {
    width: (index, target) => target.getAttribute('data-percentage'),
    duration: 1.5,
    ease: 'power2.out',
    stagger: 0.2
  })
})
</script>
