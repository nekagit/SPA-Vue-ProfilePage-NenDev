<template>
  <div class="grid grid-cols-2 space-y-8 bg-white">
    <div
      v-for="(item, index) in infoItems"
      :key="index"
      class="flex justify-between items-center p-4 rounded-lg shadow-md bg-black"
    >
      <p class="text-4xl" v-if="item.label !== 'AGE'">{{ item.value }}</p>
      <p class="text-4xl" v-else><span ref="ageRef">0</span> years</p>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import gsap from 'gsap'

const ageRef = ref(null)

const infoItems = reactive([
  { label: 'PLACE OF BIRTH', value: 'Germany, Dortmund' },
  { label: 'DATE OF BIRTH', value: '16-10-1999' },
  { label: 'AGE', value: '' },
  { label: 'ACADEMICS', value: 'Computer Science Bachelor' },
  { label: 'HEIGHT', value: '1.85 m' },
])

onMounted(() => {
  const birthDate = new Date('1999-10-16')
  const ageInMilliseconds = Date.now() - birthDate.getTime()
  const ageInYears = ageInMilliseconds / (365 * 24 * 60 * 60 * 1000)

  gsap.to(ageRef.value, {
    innerHTML: ageInYears.toFixed(2),
    duration: 2,
    ease: 'power2.out'
  })
})
</script>
