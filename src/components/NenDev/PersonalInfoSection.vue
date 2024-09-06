<template>
  <div class="flex flex-col xl:flex-row justify-around items-center gap-6 p-6 my-8 w-full">
    <div
      v-for="(item, index) in infoItems"
      :key="index"
      class="flex flex-col items-center p-4 w-full xl:flex-grow xl:w-auto"
    >
      <p class="text-amber-400 text-xl font-semibold mb-2 text-center">
        {{ item.label }}
      </p>
      <TypeWriter
        class="text-4xl font-extrabold text-black dark:text-white text-center"
        v-if="item.label !== 'AGE'"
        :texts="[item.value]"
        playOne="true"
      />
      <p
        class="text-4xl font-extrabold text-black dark:text-white text-center"
        v-else
      >
        <span ref="ageRef">0</span> years
      </p>
    </div>
  </div>
</template>

<script setup>
import gsap from 'gsap';
import { onMounted, reactive, ref } from 'vue';
import TypeWriter from './TypeWriter.vue';

const ageRef = ref(null);

const infoItems = reactive([
  { label: 'AGE', value: '' },
  { label: 'DATE OF BIRTH', value: '16-10-1999' },
  { label: 'PLACE OF BIRTH', value: 'Germany, Dortmund' },
  { label: 'ACADEMICS', value: 'Computer Science Bachelor' }
]);

onMounted(() => {
  const birthDate = new Date('1999-10-16');
  const ageInMilliseconds = Date.now() - birthDate.getTime();
  const ageInYears = ageInMilliseconds / (365 * 24 * 60 * 60 * 1000);

  gsap.to(ageRef.value, {
    innerHTML: ageInYears.toFixed(2),
    duration: 2,
    ease: 'power2.out'
  });
});
</script>
