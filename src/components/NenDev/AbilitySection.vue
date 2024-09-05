<template>
  <div class="abilities my-auto">
    <ul class="grid grid-cols-2 gap-8">
      <li v-for="(ability, index) in abilities" :key="index" class="flex flex-col items-center mb-8">
        <div class="text-center mb-4">
          <span class="text-2xl font-semibold">{{ ability.name }}</span>
        </div>
        <div class="relative flex justify-center items-center">
          <svg class="circular-progress" width="200" height="200" viewBox="0 0 72 72">
            <circle
              class="circle-background"
              cx="36" cy="36" r="32"
              fill="none" stroke="#e6e6e6" stroke-width="4"
            />
            <circle
              class="circle-progress"
              cx="36" cy="36" r="32"
              fill="none" stroke="#4f46e5" stroke-width="4"
              stroke-dasharray="100, 100"
              :data-percentage="ability.percentage"
            />
          </svg>
          <div class="absolute text-3xl font-bold text-amber-600">
            {{ ability.percentage }}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import gsap from 'gsap'

const abilities = reactive([
  { name: 'DevOps', percentage: '85%' },
  { name: 'Database', percentage: '90%' },
  { name: 'Backend', percentage: '95%' },
  { name: 'Frontend', percentage: '98%' }
])

onMounted(() => {
  gsap.to('.circle-progress', {
    strokeDasharray: (index, target) => {
      const percentage = parseFloat(target.getAttribute('data-percentage'));
      const radius = target.r.baseVal.value;
      const circumference = 2 * Math.PI * radius;
      const progress = (percentage / 100) * circumference;
      return `${progress}, ${circumference}`;
    },
    duration: 1.5,
    ease: 'power2.out',
    stagger: 0.2
  });
})
</script>

<style scoped>
.circular-progress {
  transform: rotate(-90deg); /* Rotate the circle to start from top */
}

.circle-background {
  stroke: #e6e6e6;
}

.circle-progress {
  stroke: rgb(217 119 6 / var(--tw-text-opacity));
  stroke-linecap: round;
  transition: stroke-dasharray 1.5s ease-out;
}

.abilities {
  padding: 1.5rem;
}

.grid {
  grid-gap: 2rem;
}

</style>
