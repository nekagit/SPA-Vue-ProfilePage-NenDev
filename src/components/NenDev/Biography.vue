<template>
  <div class="grid grid-cols-1 md:grid-cols-2 container">
    <ImageLanguageSection/>
     <div class="text-content my-auto">
      <h1 class="title text-center pb-8 text-amber-400">{{ title }}</h1>
      <p class="description shadow-2xl" v-html="description"></p>
    </div>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-16 container">
    <PersonalInfoSection />
    <AbilitySection />
   
  </div>
</template>

<script setup>
import AbilitySection from './AbilitySection.vue';
import ImageLanguageSection from './ImageLanguageSection.vue';
import PersonalInfoSection from './PersonalInfoSection.vue';

defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})

</script>
<style scoped>

.text-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #34495e;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  padding: 2rem;
  transition: all 0.3s ease;
}

.description:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.button-group {
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  margin-top: 2rem;
}

.primary-button,
.secondary-button {
  padding: 0.8rem 1.5rem;
}
</style>
