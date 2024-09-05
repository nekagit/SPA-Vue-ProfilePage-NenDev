<template>
  <div class="grid grid-cols-2 gap-8 p-6 my-8">
    <div
      v-for="(item, index) in infoItems"
      :key="index"
      class="flex flex-col items-center p-6 rounded-full shadow-lg "
    >
      <p class="text-amber-400 text-2xl font-semibold mb-2">{{ item.label }}</p>
      <p class="text-5xl font-extrabold text-white text-center" v-if="item.label !== 'AGE'">{{ item.value }}</p>
      <p class="text-5xl font-extrabold text-white text-center" v-else><span ref="ageRef">0</span> years</p>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted } from 'vue'
import gsap from 'gsap'

const ageRef = ref(null)

const infoItems = reactive([
  { label: 'AGE', value: '' },
  { label: 'PLACE OF BIRTH', value: 'Germany, Dortmund' },
  { label: 'DATE OF BIRTH', value: '16-10-1999' },
  { label: 'ACADEMICS', value: 'Computer Science Bachelor' },
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
